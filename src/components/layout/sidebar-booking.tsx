'use client'

import { useState } from 'react'

import { Button } from '../ui/button'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import { quickSearchOptions } from '@/constants/search'
import { Calendar } from '../ui/calendar'
import { Card, CardContent } from '../ui/card'

import { Decimal } from '@prisma/client/runtime/client'
import { formatPrice } from '@/lib/utils'

interface SidebarBooking {
  barbershop: string
  service: string
  price: Decimal
}

export function SidebarBooking({ barbershop, price, service }: SidebarBooking) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [hour, setHour] = useState<string>('')

  return (
    <SheetContent className='overflow-y-auto'>
      <SheetHeader className='border-b'>
        <SheetTitle>Fazer Reserva</SheetTitle>
      </SheetHeader>

      <div className='px-4'>
        <Calendar mode='single' selected={date} onSelect={setDate} className='rounded-lg border' />

        <div className='flex gap-2 overflow-x-auto border-b border-solid py-5'>
          {quickSearchOptions.map(({ title }) => (
            <Button key={title} variant={'outline'}>
              12:00
            </Button>
          ))}
        </div>

        <div className='flex flex-col py-5'>
          <Card>
            <CardContent>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span>{service}</span>
                  <span>{formatPrice(Number(price))}</span>
                </div>

                <div className='flex justify-between'>
                  <span className='text-zinc-500'>Data</span>
                  <span>R$ 50,00</span>
                </div>

                <div className='flex justify-between'>
                  <span className='text-zinc-500'>Horário</span>
                  <span>R$ 50,00</span>
                </div>

                <div className='flex justify-between'>
                  <span className='text-zinc-500'>Barbearia</span>
                  <span>{barbershop}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SheetContent>
  )
}
