import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function insertUser(username: string, password: string, firstname: string, lastname: string, email: string) {
    const res = await prisma.user.create({
        data: {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email
        }
    })
    console.log(res);
    
}

insertUser("cheating_lemons", "ratoR33+6", "chaitanya", "harshan", "chaitanyareigns33@getMaxListeners.com");