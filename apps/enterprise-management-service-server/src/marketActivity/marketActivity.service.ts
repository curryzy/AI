import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketActivityServiceBase } from "./base/marketActivity.service.base";

@Injectable()
export class MarketActivityService extends MarketActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
