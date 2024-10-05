import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
    const response = await prisma.user.findUnique({
        where: {
            username
        }
    })
    console.log(response)
}

getUser('aryansharma')