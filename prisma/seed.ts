import prisma from "../src/lib/prisma";

async function main() {
  console.log("Start seeding...");

  // Delete existing data to ensure idempotency
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const alice = await prisma.user.create({
    data: {
      email: "alice@prisma.io",
      name: "Alice",
      posts: {
        create: [
          {
            title: "Hello World",
            content: "This is Alice's first post.",
            published: true,
          },
          {
            title: "Prisma Postgres is awesome",
            content: "Setting up Prisma Postgres was so easy!",
            published: true,
          },
        ],
      },
    },
  });

  const bob = await prisma.user.create({
    data: {
      email: "bob@prisma.io",
      name: "Bob",
      posts: {
        create: [
          {
            title: "Draft Post",
            content: "This is a draft post by Bob.",
            published: false,
          },
        ],
      },
    },
  });

  console.log(`Seeded users: ${alice.name}, ${bob.name}`);
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
