import { defineEventHandler } from "h3";
import { getPrisma } from "../../lib/prisma";

export default defineEventHandler((event) => {
  return getPrisma(event).user.findMany({});
})