import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstname: string;
    lastname: string;
}

async function updateUser(username: string, {
    firstname,
    lastname
}: UpdateParams) {
    const response = await prisma.user.update({
        where: {
            username
        },
        data: {
            firstname,
            lastname
        },
    })
    console.log(response)
}

updateUser('aryansharma', { firstname: 'sharma', lastname: 'aryan' })