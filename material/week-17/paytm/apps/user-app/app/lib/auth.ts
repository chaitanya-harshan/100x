import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "@repo/db/client"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Phone Number",
            credentials: {
                phone: { label: "Phone Number", type: "text", placeholder: "Enter your phone number" },
                password: { label: "Password", type: "password", placeholder: "09/azAZ/@&*" }
            },
            async authorize(credentials: any) {
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await prisma.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email
                        }
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword
                        }
                    });
                
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }
                } catch (e) {
                    console.error(e);
                }

                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        async session({token, session}: any) {
            session.user.id = token.sub;
            return session;
        }
    }
}