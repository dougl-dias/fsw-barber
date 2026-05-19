'use client'

import { Check, Copy, SmartphoneIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

interface PhoneItemProps {
  phone: string
}

export default function PhoneItem({ phone }: PhoneItemProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyPhoneClick = async () => {
    await navigator.clipboard.writeText(phone)

    setCopied(true)

    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-2 text-sm'>
        <SmartphoneIcon size={16} />
        {phone}
      </div>

      <Button variant='outline' size='sm' onClick={handleCopyPhoneClick}>
        {copied ? <Check size={16} /> : <Copy size={16} />}
        Copiar
      </Button>
    </div>
  )
}
