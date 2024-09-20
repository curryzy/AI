import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerSegmentServiceBase } from "./base/customerSegment.service.base";

@Injectable()
export class CustomerSegmentService extends CustomerSegmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
