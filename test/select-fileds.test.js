import { prisma } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  afterAll(() => {
    prisma.$disconnect();
  });

  it("should can create and select fields", async () => {
    const customer = await prisma.customer.create({
      data: {
        id: "rully",
        name: "Rully Kece",
        email: "rully@gmail.com",
        phone: "089766547812",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("rully");
    expect(customer.name).toBe("Rully Kece");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it.only("should can select fields", async () => {
    const customers = await prisma.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    customers.forEach((data) => {
      expect(data.id).toBeDefined();
      expect(data.name).toBeDefined();
      expect(data.email).toBeUndefined();
      expect(data.phone).toBeUndefined();
    });
  });
});
