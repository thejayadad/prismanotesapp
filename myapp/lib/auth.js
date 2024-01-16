import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
  };
  
  export const getAuthSession = () => getServerSession(authOptions);