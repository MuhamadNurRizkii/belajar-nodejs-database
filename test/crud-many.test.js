import { prisma } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  afterAll(() => {
    prisma.$disconnect();
  });
  it("should can create many records", async () => {
    const { count } = await prisma.customer.createMany({
      data: [
        {
          id: "Andi",
          name: "Andi Setiawan",
          email: "andiset@gmail.com",
          phone: "0897789845676",
        },
        {
          id: "user5",
          name: "user5",
          email: "user5@gmail.com",
          phone: "0897789878670",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should can udpate many records", async () => {
    const { count } = await prisma.customer.updateMany({
      data: {
        email: "rizkilagi@gmail.com",
      },

      where: {
        name: "Muhamad Nur Rizki",
      },
    });

    expect(count).toBe(1);
  });

  it.only("should can select many records", async () => {
    const data = await prisma.customer.findMany({
      take: 5,
    });

    console.log(data);
    expect(data.length).toBe(5);
  });

  it("should can delete records", async () => {
    const { count } = await prisma.customer.deleteMany({
      where: {
        name: "Tidak ada",
      },
    });

    expect(count).toBe(0);
  });
});
