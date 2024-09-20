import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleOpportunityService } from "./saleOpportunity.service";
import { SaleOpportunityControllerBase } from "./base/saleOpportunity.controller.base";

@swagger.ApiTags("saleOpportunities")
@common.Controller("saleOpportunities")
export class SaleOpportunityController extends SaleOpportunityControllerBase {
  constructor(
    protected readonly service: SaleOpportunityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
