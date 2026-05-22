'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Menu } from 'lucide-react'

import { Button } from '../ui/button'
import { Sheet, SheetTrigger } from '../ui/sheet'

import { SidebarMenu } from './sidebar-menu'

export function Header() {
  const pathname = usePathname()
  const isBarbershopPage = pathname.startsWith('/barbearias/')

  if (isBarbershopPage) return null

  return (
    <header className='border-b'>
      <div className='flex items-center justify-between px-5 py-6'>
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt='FSW-Barber' width={130} height={22} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <Menu />
            </Button>
          </SheetTrigger>

          <SidebarMenu />
        </Sheet>
      </div>
    </header>
  )
}
