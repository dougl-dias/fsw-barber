import Image from 'next/image'
import { CalendarIcon, HomeIcon, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { quickSearchOptions } from '@/constants/search'

export function Header() {
  return (
    <header className='border-b'>
      <div className='flex items-center justify-between px-5 py-6'>
        <Image src={'/logo.svg'} alt='FSW-Barber' width={130} height={22} />

        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>

          <SheetContent className='overflow-y-auto'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className='px-4'>
              <div className='flex items-center gap-2.5 border-b border-solid pb-5'>
                <Avatar className='border-primary size-12 overflow-hidden border-2'>
                  <Image src='/avatar.png' alt='Nome' fill className='object-cover' />
                </Avatar>

                <div>
                  <p>Douglas Dias</p>
                  <p className='text-xs text-zinc-400'>douglas@gmail.com</p>
                </div>
              </div>

              <div className='flex flex-col gap-2 border-b border-solid py-5'>
                <Button className='justify-start gap-2'>
                  <HomeIcon size={18} />
                  Início
                </Button>

                <Button variant={'ghost'} className='justify-start gap-2'>
                  <CalendarIcon size={18} />
                  Agendamento
                </Button>
              </div>

              <div className='flex flex-col gap-2 border-b border-solid py-5'>
                {quickSearchOptions.map(({ title, imageUrl }) => (
                  <Button key={title} variant={'ghost'} className='justify-start gap-2'>
                    <Image src={imageUrl} alt={title} width={18} height={18} />
                    {title}
                  </Button>
                ))}
              </div>

              <div className='flex flex-col py-5'>
                <Button variant={'ghost'} className='justify-start gap-2'>
                  <Image src='/logout.svg' alt='Sair da conta' width={18} height={18} />
                  Sair da conta
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
