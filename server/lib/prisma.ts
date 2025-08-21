import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3';
import { H3Event } from "h3";

export function getPrisma(event: H3Event) {
  if (!event.context.prisma) {
      const connectionString = event.context.cloudflare?.env.DATABASE_URL || process.env.DATABASE_URL;
      const adapter = new PrismaPg({ connectionString });
      // const adapter = new PrismaBetterSQLite3({ url: connectionString });
      event.context.prisma = new PrismaClient({ adapter });
  }

  return event.context.prisma as PrismaClient;
}