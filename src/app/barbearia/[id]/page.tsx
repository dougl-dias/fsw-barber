import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import ServicesItemProps from '@/components/service-item'
import Section from '@/components/section'
import { Button } from '@/components/ui/button'
import { DivideSection } from '@/components/ui/divide-section'
import { ChevronLeft, Menu } from 'lucide-react'
import PhoneItem from '@/components/phone-item'

import { prisma } from '@/lib/prisma'

interface BarbershopPageProps {
  params: Promise<{ id: string }>
}

export default async function BarbershopPage({ params }: BarbershopPageProps) {
  const { id } = await params

  const barbershop = await prisma.barbershop.findUnique({
    where: { id },
    include: {
      barbershopServices: true
    }
  })

  if (!barbershop) return notFound()

  return (
    <main>
      {/* Banner */}
      <div className='relative h-64'>
        <Image src={barbershop.imageUrl} alt={barbershop.name} fill className='object-cover' />

        <Link
          href={`/`}
          className='bg-secondary text-secondary-foreground absolute top-4 left-4 z-20 inline-flex h-9 items-center justify-center rounded-md px-1.5 text-sm font-medium'
        >
          <ChevronLeft />
        </Link>

        <Button variant={'secondary'} size={'icon-lg'} className='absolute top-4 right-4 z-20'>
          <Menu />
        </Button>
      </div>

      {/* Informações */}
      <Section className='border-none'>
        <h1 className='text-xl font-semibold'>{barbershop.name}</h1>

        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Image src='/map-pin.svg' alt='Endereço' width={20} height={20} />
            <p className='text-sm text-zinc-200'>{barbershop.address}</p>
          </div>

          <div className='flex items-center gap-2'>
            <Image src='/star.svg' alt='Avaliações' width={20} height={20} />
            <p className='text-sm text-zinc-200'>5,0 (889 avaliações)</p>
          </div>
        </div>
      </Section>

      {/* Sobre */}
      <Section>
        <DivideSection title='Sobre' />

        <p className='text-sm/6'>{barbershop.description}</p>
      </Section>

      {/* Serviços */}
      <Section>
        <DivideSection title='Serviços' />

        {barbershop.barbershopServices.map((service) => (
          <div key={service.id}>
            <ServicesItemProps service={service} />
          </div>
        ))}
      </Section>

      {/* Contato */}
      <Section>
        <DivideSection title='Contato' />

        <div className='space-y-2 pb-6'>
          {barbershop.phone.map((phone, index) => (
            <PhoneItem key={index} phone={phone} />
          ))}
        </div>
      </Section>
    </main>
  )
}
