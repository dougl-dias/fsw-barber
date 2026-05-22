import { DivideSection } from '@/components/ui/divide-section'

import { BarbershopItem } from '@/components/barbershop-item'
import { Searchbar } from '@/components/searchbar'

import { prisma } from '@/lib/prisma'
import { Section } from '@/components/section'

interface BarbershopsPage {
  searchParams: Promise<{ search: string }>
}

export default async function BarbershopsPage({ searchParams }: BarbershopsPage) {
  const { search } = await searchParams

  const barbershops = await prisma.barbershop.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          barbershopServices: {
            some: {
              name: {
                contains: search,
                mode: 'insensitive'
              }
            }
          }
        }
      ]
    }
  })

  return (
    <>
      <main>
        <Section className='border-none'>
          <Searchbar />

          {search && <DivideSection title={`Resultados para "${search}"`} />}

          <div className='grid grid-cols-2 gap-3'>
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
