/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MarketActivity as PrismaMarketActivity } from "@prisma/client";

export class MarketActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MarketActivityCountArgs, "select">
  ): Promise<number> {
    return this.prisma.marketActivity.count(args);
  }

  async marketActivities(
    args: Prisma.MarketActivityFindManyArgs
  ): Promise<PrismaMarketActivity[]> {
    return this.prisma.marketActivity.findMany(args);
  }
  async marketActivity(
    args: Prisma.MarketActivityFindUniqueArgs
  ): Promise<PrismaMarketActivity | null> {
    return this.prisma.marketActivity.findUnique(args);
  }
  async createMarketActivity(
    args: Prisma.MarketActivityCreateArgs
  ): Promise<PrismaMarketActivity> {
    return this.prisma.marketActivity.create(args);
  }
  async updateMarketActivity(
    args: Prisma.MarketActivityUpdateArgs
  ): Promise<PrismaMarketActivity> {
    return this.prisma.marketActivity.update(args);
  }
  async deleteMarketActivity(
    args: Prisma.MarketActivityDeleteArgs
  ): Promise<PrismaMarketActivity> {
    return this.prisma.marketActivity.delete(args);
  }
}
