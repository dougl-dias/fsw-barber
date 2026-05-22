'use client'

import Image from 'next/image'

import { HomeIcon, CalendarIcon, LogInIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { QuickSearchSidebar } from '../quick-search'
import { signIn, signOut, useSession } from 'next-auth/react'

export function SidebarMenu() {
  const { data } = useSession()

  const handleLoginWithGoogleClick = () => signIn('google')

  const handleLogoutClick = () => signOut()

  return (
    <SheetContent className='overflow-y-auto'>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      <div className='px-4'>
        <div className='border-b border-solid pb-5'>
          {data?.user ? (
            <div className='flex items-center gap-2.5'>
              <Avatar className='border-primary size-12 overflow-hidden border-2'>
                <AvatarImage
                  src={data.user.image || '/avatar.svg'}
                  alt={data.user.name ?? 'Foto usuário'}
                  className='object-cover'
                />
                <AvatarFallback>
                  <Image src='/avatar.svg' alt='Foto usuário' fill className='object-cover' />
                </AvatarFallback>
              </Avatar>

              <div>
                <p>{data.user.name}</p>
                <p className='text-xs text-zinc-400'>{data.user.email}</p>
              </div>
            </div>
          ) : (
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

                  <Button variant={'outline'} className='gap-1 font-bold' onClick={handleLoginWithGoogleClick}>
                    <Image src={'/google-icon.svg'} alt='Fazer login com Google' width={18} height={18} />
                    Google
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          )}
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

        <QuickSearchSidebar />

        <div className='flex flex-col py-5'>
          <Button variant={'ghost'} className='justify-start gap-2' onClick={handleLogoutClick}>
            <Image src='/logout.svg' alt='Sair da conta' width={18} height={18} />
            Sair da conta
          </Button>
        </div>
      </div>
    </SheetContent>
  )
}
