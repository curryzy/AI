/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Quotation as PrismaQuotation } from "@prisma/client";

export class QuotationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuotationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.quotation.count(args);
  }

  async quotations(
    args: Prisma.QuotationFindManyArgs
  ): Promise<PrismaQuotation[]> {
    return this.prisma.quotation.findMany(args);
  }
  async quotation(
    args: Prisma.QuotationFindUniqueArgs
  ): Promise<PrismaQuotation | null> {
    return this.prisma.quotation.findUnique(args);
  }
  async createQuotation(
    args: Prisma.QuotationCreateArgs
  ): Promise<PrismaQuotation> {
    return this.prisma.quotation.create(args);
  }
  async updateQuotation(
    args: Prisma.QuotationUpdateArgs
  ): Promise<PrismaQuotation> {
    return this.prisma.quotation.update(args);
  }
  async deleteQuotation(
    args: Prisma.QuotationDeleteArgs
  ): Promise<PrismaQuotation> {
    return this.prisma.quotation.delete(args);
  }
}
