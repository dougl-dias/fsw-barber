import { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ]
})

export { handler as GET, handler as POST }
