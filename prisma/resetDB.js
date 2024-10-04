require("dotenv").config();
const { prisma } = require("../src/models");

async function run() {
  await prisma.$executeRawUnsafe("DROP DATABASE cc18_fakebook");
  await prisma.$executeRawUnsafe("CREATE DATABASE cc18_fakebook");
}

console.log("Reset DB...");
run();
