import { prisma } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  afterAll(() => {
    prisma.$disconnect();
  });
  it("should be able to query sql", async () => {
    const samples = await prisma.$queryRaw`SELECT * FROM sample;`;

    samples.map((sample) => {
      console.log(`id: ${sample.id}, name: ${sample.name}`);
    });
  });
});
