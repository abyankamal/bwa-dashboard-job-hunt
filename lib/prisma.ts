import { PrismaClient } from "@prisma/client/edge";
let prisma = new PrismaClient();

declare const globalThis: {
  prisma: PrismaClient;
};

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  prisma = globalThis.prisma;
}

export default prisma;
