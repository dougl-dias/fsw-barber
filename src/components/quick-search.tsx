'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

import { quickSearchOptions } from '@/constants/search'

interface QuickSearchLinksProps {
  containerClassName?: string
  buttonVariant: 'secondary' | 'ghost'
  buttonClassName?: string
}

function QuickSearchLinks({ containerClassName, buttonVariant, buttonClassName }: QuickSearchLinksProps) {
  return (
    <div className={containerClassName}>
      {quickSearchOptions.map(({ title, imageUrl }) => (
        <Button key={title} variant={buttonVariant} className={buttonClassName} asChild>
          <Link href={`/barbearias?search=${encodeURIComponent(title)}`}>
            <Image src={imageUrl} alt={title} width={18} height={18} />
            {title}
          </Link>
        </Button>
      ))}
    </div>
  )
}

export function QuickSearch() {
  return (
    <QuickSearchLinks containerClassName='flex scrollbar-none gap-2 overflow-x-scroll p-1' buttonVariant='secondary' />
  )
}

export function QuickSearchSidebar() {
  return (
    <QuickSearchLinks
      containerClassName='flex flex-col gap-2 border-b border-solid py-5'
      buttonVariant='ghost'
      buttonClassName='justify-start gap-2'
    />
  )
}
