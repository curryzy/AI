import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerInfoServiceBase } from "./base/customerInfo.service.base";

@Injectable()
export class CustomerInfoService extends CustomerInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
