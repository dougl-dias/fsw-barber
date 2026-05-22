import Image from 'next/image'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { DivideSection } from '@/components/ui/divide-section'

import { BarbershopItem } from '@/components/barbershop-item'
import { Section } from '@/components/section'
import { Searchbar } from '@/components/searchbar'

import { prisma } from '@/lib/prisma'
import { Barbershop } from '@/generated/prisma/client'
import { QuickSearch } from '@/components/quick-search'

export default async function Home() {
  const barbershops: Barbershop[] = await prisma.barbershop.findMany({})

  return (
    <>
      <main>
        <Section className='border-none'>
          {/* Bem vindo */}
          <div>
            <h1 className='font-semibold'>Olá, Douglas</h1>
            <p className='text-sm'>Sexta, 2 de Fevereiro</p>
          </div>

          {/* Barra de busca */}
          <Searchbar />

          {/* Busca rápida */}
          <QuickSearch />

          {/* Banner */}
          <div className='relative h-36'>
            <Image
              src={'/banner-home.svg'}
              alt='Agende nos melhores com FSW Barber'
              fill
              className='rounded-xl object-cover'
            />
          </div>

          <DivideSection title='Agendamentos' />

          {/* Reserva */}
          <Card className='p-0'>
            <CardContent className='flex justify-between p-0'>
              {/* Booking info */}
              <div className='w-full space-y-3 p-4'>
                <Badge className='w-fit'>Confirmado</Badge>

                <div className='flex flex-col gap-3'>
                  <span className='text-lg'>Corte de Cabelo</span>

                  <div className='flex items-center gap-2'>
                    <Avatar size='sm' className='relative overflow-hidden'>
                      <Image src='/booking.png' alt='Vintage Barbe' fill className='object-cover' />
                    </Avatar>
                    <span>Vintage Barbe</span>
                  </div>
                </div>
              </div>

              {/* Booking date */}
              <div className='flex flex-col items-center justify-center border-l p-4'>
                <span className='text-sm'>Fevereiro</span>
                <span className='text-2xl'>06</span>
                <span className='text-sm font-light'>09:45</span>
              </div>
            </CardContent>
          </Card>

          <DivideSection title='Recomendados' />

          {/* Barbearias Recomendadas */}
          <div className='flex scrollbar-none gap-3 overflow-x-scroll p-1'>
            {barbershops.map((barbershop) => (
              <div key={barbershop.id}>
                <BarbershopItem barbershop={barbershop} />
              </div>
            ))}
          </div>

          <DivideSection title='Populares' />

          {/* Barbearias Populares */}
          <div className='flex scrollbar-none gap-3 overflow-x-scroll p-1'>
            {barbershops.map((barbershop) => (
              <div key={barbershop.id}>
                <BarbershopItem barbershop={barbershop} />
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  )
}
