import * as graphql from "@nestjs/graphql";
import { MarketingManagementModuleService } from "./marketingmanagementmodule.service";

export class MarketingManagementModuleResolver {
  constructor(protected readonly service: MarketingManagementModuleService) {}
}
