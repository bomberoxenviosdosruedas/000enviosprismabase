import prisma from "../src/lib/prisma";

async function verify() {
  try {
    // Run one read
    const user = await prisma.user.findFirst();
    console.log("✅ Connected");
  } catch (error) {
    console.error("❌ Connection failed:");
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

verify();
