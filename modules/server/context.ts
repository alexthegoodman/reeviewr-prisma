// not in use in makeSchema currently

import { PrismaClient } from "../../__generated__/prisma-client";

const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
};

export const createContext = (): Context => ({
  prisma,
});
