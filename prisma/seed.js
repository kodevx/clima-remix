import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {

  const cities = [
    {
      name: "Kochi",
      temp: '24'
    },
    {
      name: "Dubai",
      temp: '34'
    }
  ]
  
  for (const city of cities) {
    await prisma.city.create({
      data: city
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
