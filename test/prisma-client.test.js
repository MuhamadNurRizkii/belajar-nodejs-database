import { prisma } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able to connect to database", async () => {
    await prisma.$connect();

    // do something

    await prisma.$disconnect();
  });
});
