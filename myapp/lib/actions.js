'use server'
import { revalidatePath } from "next/cache";
import getServerUser from "./getServerUser";
import prisma from "@/lib/connect"
import { redirect } from "next/navigation";

export const addPost = async (formData) => {
    const user = await getServerUser()
    const email = user.email
    console.log("user " + email)
    const { name, desc, category, premium, } =
    Object.fromEntries(formData);
    try {
        await prisma.post.create({
           data: {
            name, desc, category, premium,
             userEmail: email, 
           },
         });
         revalidatePath("/dashboard")
         
   } catch (error) {
       throw new Error("Failed To Create Exercise " + error)
   }
   revalidatePath("/dashboard")
   redirect(`/dashboard`)

}