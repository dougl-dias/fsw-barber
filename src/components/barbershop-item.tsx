import Image from 'next/image'

import { Card, CardContent } from './ui/card'
import { Barbershop } from '@/generated/prisma/client'
import { Star } from 'lucide-react'
import { Badge } from './ui/badge'
import Link from 'next/link'

interface CardServiceProps {
  barbershop: Barbershop
}

export default function BarbershopItem({ barbershop }: CardServiceProps) {
  return (
    <Card className='max-w-40 p-0'>
      <CardContent className='p-0.5'>
        <div className='relative h-40 w-40'>
          <Badge className='bg-primary/25 absolute top-1.5 left-1.5 z-10 px-2 py-2.5'>
            <Star size={16} className='fill-primary text-primary' />
            5.0
          </Badge>

          <Image className='rounded-xl' src={barbershop.imageUrl} alt={barbershop.name} fill objectFit='cover' />
        </div>

        <div className='p-2'>
          <h3 className='mb-1.5 truncate'>{barbershop.name}</h3>

          <p className='mb-3 truncate text-sm text-zinc-500'>{barbershop.address}</p>

          <Link
            href={`/barbearia/${barbershop.id}`}
            className='bg-secondary text-secondary-foreground inline-flex h-8 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium'
          >
            Reservar
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
