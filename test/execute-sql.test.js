import { prisma } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  afterAll(() => {
    prisma.$disconnect();
  });
  it("should be able to execute sql", async () => {
    const id = "2";
    const name = "Andi Aja";

    const impacted =
      await prisma.$executeRaw`INSERT INTO sample (id, name) VALUES (${id},${name});`;

    expect(impacted).toBe(1);
  });
});
