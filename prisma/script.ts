const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


async function main() {
    const user = await prisma.user.create({
        data: {
            firstName: 'Asi ondrej nebo alice?',
            lastName: "Fakt ondrej",
        },
    })

    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
