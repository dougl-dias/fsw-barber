import Image from 'next/image'

import { CalendarIcon, HomeIcon, Menu } from 'lucide-react'

import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { Sheet, SheetTrigger } from '../ui/sheet'

import { SidebarMenu } from './sidebar-menu'

export function Header() {
  return (
    <header className='border-b'>
      <div className='flex items-center justify-between px-5 py-6'>
        <Image src={'/logo.svg'} alt='FSW-Barber' width={130} height={22} />

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
