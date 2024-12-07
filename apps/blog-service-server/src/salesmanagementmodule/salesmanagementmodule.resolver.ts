import * as graphql from "@nestjs/graphql";
import { SalesManagementModuleService } from "./salesmanagementmodule.service";

export class SalesManagementModuleResolver {
  constructor(protected readonly service: SalesManagementModuleService) {}
}
