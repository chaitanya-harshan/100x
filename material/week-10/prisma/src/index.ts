import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function insertData(username: string, firstName: string, lastName: string, password: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            firstName,
            lastName,
            password
        },
        select: {
            id: true,
            email: true,
            password: true
        }
    })    
    console.log(res);
}
// insertData("chaitanyareigns98@gmail.com", "Chaitanya", "Harshan", "starmanin400orbit");
// insertData("elonmusk@spacex.mars", "Elon", "Musk", "ridingteslaonmarsbaby");
insertData("likhitkalla@gmail.com", "likhit", "sai eswar", "ilovepanner");



interface updateParams {
    firstName: string,
    lastName: string    
}
async function updateData(username: string, {firstName, lastName}: updateParams) {
    const res = await prisma.user.update({
        where: {email: username},
        data: {firstName, lastName},
    })
    console.log(res);
}
updateData("elonmusk@spacex.mars", {firstName: "XÆA12", lastName: "Elon baby eat a mars rock"});