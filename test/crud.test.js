import { prisma } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  afterAll(() => {
    prisma.$disconnect();
  });
  it("should be able to create customer", async () => {
    const customer = await prisma.customer.create({
      data: {
        id: "Budi",
        email: "budiaja@gmail.com",
        name: "Budi Gaming",
        phone: "0897889998",
      },
    });

    expect(customer.id).toBe("Budi");
    expect(customer.email).toBe("budiaja@gmail.com");
    expect(customer.name).toBe("Budi Gaming");
    expect(customer.phone).toBe("0897889998");
  });

  it("should be able to update customer", async () => {
    const customer = await prisma.customer.update({
      data: {
        name: "Budi Santoso",
        email: "budi123@gmail.com",
      },
      where: {
        id: "Budi",
      },
    });

    expect(customer.id).toBe("Budi");
    expect(customer.email).toBe("budi123@gmail.com");
    expect(customer.name).toBe("Budi Santoso");
    expect(customer.phone).toBe("0897889998");
  });

  it("should be able to read customer", async () => {
    const customer = await prisma.customer.findUnique({
      where: {
        id: "Rizki",
      },
    });

    expect(customer.id).toBe("Rizki");
    expect(customer.email).toBe("aku@gmail.com");
    expect(customer.name).toBe("Muhamad Nur Rizki");
    expect(customer.phone).toBe("0897887567");
  });

  it("should be able to delete customer", async () => {
    const customer = await prisma.customer.delete({
      where: {
        id: "Budi",
      },
    });

    expect(customer.id).toBe("Budi");
    expect(customer.email).toBe("budi123@gmail.com");
    expect(customer.name).toBe("Budi Santoso");
    expect(customer.phone).toBe("0897889998");
  });
});
