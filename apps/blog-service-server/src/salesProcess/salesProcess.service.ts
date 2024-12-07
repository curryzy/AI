import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesProcessServiceBase } from "./base/salesProcess.service.base";

@Injectable()
export class SalesProcessService extends SalesProcessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
