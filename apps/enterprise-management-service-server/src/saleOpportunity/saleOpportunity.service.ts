import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleOpportunityServiceBase } from "./base/saleOpportunity.service.base";

@Injectable()
export class SaleOpportunityService extends SaleOpportunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
