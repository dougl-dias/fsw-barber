import Image from 'next/image'

import { HomeIcon, CalendarIcon, LogInIcon } from 'lucide-react'

import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import { quickSearchOptions } from '@/constants/search'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export function SidebarMenu() {
  return (
    <SheetContent className='overflow-y-auto'>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      <div className='px-4'>
        <div className='border-b border-solid pb-5'>
          <div className='flex items-center justify-between gap-2.5'>
            <h3 className='font-semibold'>Olá, faça login</h3>

            <Dialog>
              <DialogTrigger asChild>
                <Button size={'icon'}>
                  <LogInIcon />
                </Button>
              </DialogTrigger>

              <DialogContent className='w-[90%]'>
                <DialogHeader>
                  <DialogTitle>Faça login na plataforma</DialogTitle>
                  <DialogDescription>Conecte-se usando sua conta Google</DialogDescription>
                </DialogHeader>

                <Button variant={'outline'} className='gap-1 font-bold'>
                  <Image src={'/google-icon.svg'} alt='Fazer login com Google' width={18} height={18} />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </div>

          {/* <div className='flex items-center gap-2.5'>
            <Avatar className='border-primary size-12 overflow-hidden border-2'>
              <Image src='/avatar.png' alt='Nome' fill className='object-cover' />
            </Avatar>

            <div>
              <p>Douglas Dias</p>
              <p className='text-xs text-zinc-400'>douglas@gmail.com</p>
            </div>
          </div> */}
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
  )
}
