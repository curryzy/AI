import * as graphql from "@nestjs/graphql";
import { CustomerManagementModuleService } from "./customermanagementmodule.service";

export class CustomerManagementModuleResolver {
  constructor(protected readonly service: CustomerManagementModuleService) {}
}
