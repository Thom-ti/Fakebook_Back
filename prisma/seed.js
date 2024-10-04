const { prisma } = require("../src/models");
const bcrypt = require("bcryptjs");

const hashedPassword = bcrypt.hashSync("123456", 10); // hash no async

const userData = [
  {
    firstName: "Andy",
    lastName: "Codecamp",
    password: hashedPassword,
    email: "andy@ggg.mail",
    profileImage: "https://www.svgrepo.com/show/420362/avatar-cacti-cactus.svg",
  },
  {
    firstName: "Bobby",
    lastName: "Codecamp",
    password: hashedPassword,
    email: "bobby@ggg.mail",
    profileImage: "https://www.svgrepo.com/show/420343/avatar-joker-squad.svg",
  },
  {
    firstName: "Candy",
    lastName: "Codecamp",
    password: hashedPassword,
    mobile: "1111111111",
    profileImage: "https://www.svgrepo.com/show/420344/avatar-man-person.svg",
  },
  {
    firstName: "Danny",
    lastName: "Codecamp",
    password: hashedPassword,
    mobile: "2222222222",
    profileImage:
      "https://www.svgrepo.com/show/420342/avatar-male-president.svg",
  },
];

async function run() {
  await prisma.user.createMany({
    data: userData,
  });
}

console.log("DB seed...");
run();
