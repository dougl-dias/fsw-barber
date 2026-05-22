import Image from 'next/image'

import { SidebarBooking } from './layout/sidebar-booking'

import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Sheet, SheetTrigger } from './ui/sheet'

import { BarbershopService } from '@/generated/prisma/client'
import { formatPrice } from '@/lib/utils'

interface ServicesItemProps {
  service: BarbershopService
}

export function ServicesItem({ service }: ServicesItemProps) {
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
            <span className='text-primary font-semibold'>{formatPrice(Number(service.price))}</span>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'secondary'} size={'sm'}>
                  Reservar
                </Button>
              </SheetTrigger>

              {/* <SidebarBooking /> */}
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
