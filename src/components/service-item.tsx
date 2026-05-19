import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { BarbershopService } from '@/generated/prisma/client'
import { Button } from './ui/button'

interface ServicesItemProps {
  service: BarbershopService
}

export default function ServicesItem({ service }: ServicesItemProps) {
  const formatPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(service.price))

  return (
    <Card className='py-3'>
      <CardContent className='flex gap-3 px-3'>
        <div className='relative min-w-28'>
          <Image src={service.imageUrl} alt={service.name} fill className='rounded-xl object-cover' />
        </div>

        <div className='w-full space-y-2'>
          <h3>{service.name}</h3>

          <p className='text-sm text-zinc-500'>{service.description}</p>

          <div className='flex items-center justify-between'>
            <span className='text-primary font-semibold'>{formatPrice}</span>

            <Button variant={'secondary'} size={'sm'}>
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
