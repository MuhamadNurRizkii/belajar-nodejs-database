import { prisma } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  afterAll(() => {
    prisma.$disconnect();
  });

  it("should can do paging", async () => {
    const page1 = await prisma.customer.findMany({
      skip: 0,
      take: 1,
    });
    expect(page1.length).toBe(1);

    const page2 = await prisma.customer.findMany({
      skip: 1,
      take: 2,
    });
    expect(page2.length).toBe(2);

    const page3 = await prisma.customer.findMany({
      skip: 3,
      take: 2,
    });
    expect(page3.length).toBe(2);
  });
});
