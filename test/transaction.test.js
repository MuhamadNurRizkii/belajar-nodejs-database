import { prisma } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  afterAll(() => {
    prisma.$disconnect();
  });
  it("should can execute sequential transaction", async () => {
    const [user1, user2] = await prisma.$transaction([
      prisma.customer.create({
        data: {
          id: "user1",
          name: "user1",
          email: "user1@gmail.com",
          phone: "09898776765",
        },
      }),
      prisma.customer.create({
        data: {
          id: "user2",
          name: "user2",
          email: "user2@gmail.com",
          phone: "0989878776",
        },
      }),
    ]);

    expect(user1.name).toBe("user1");
    expect(user2.name).toBe("user2");
  });

  it.only("should can execute interactive transaction", async () => {
    const [user3, user4] = await prisma.$transaction(async (prisma) => {
      const user3 = await prisma.customer.create({
        data: {
          id: "user3",
          name: "user3",
          email: "user3@gmail.com",
          phone: "08987876655",
        },
      });
      const user4 = await prisma.customer.create({
        data: {
          id: "user4",
          name: "user4",
          email: "user4@gmail.com",
          phone: "08987676648",
        },
      });

      return [user3, user4];
    });

    expect(user3.name).toBe("user3");
    expect(user4.name).toBe("user4");
  });
});
