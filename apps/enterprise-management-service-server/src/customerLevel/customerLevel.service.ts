import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerLevelServiceBase } from "./base/customerLevel.service.base";

@Injectable()
export class CustomerLevelService extends CustomerLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
