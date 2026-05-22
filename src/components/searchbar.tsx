'use client'

import { useRouter } from 'next/navigation'

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

import { Search } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Field, FieldError } from './ui/field'

const formSchema = z.object({
  search: z.string().trim()
})

export function Searchbar() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: standardSchemaResolver(formSchema),
    defaultValues: {
      search: ''
    }
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/barbearias?search=${encodeURIComponent(data.search)}`)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className='flex gap-1'>
        <Controller
          name='search'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id='form-search'
                aria-invalid={fieldState.invalid}
                placeholder='Buscar Barbearias'
                className='text-sm'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button type='submit'>
          <Search />
        </Button>
      </div>
    </form>
  )
}
