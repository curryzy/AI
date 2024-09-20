import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarketActivityService } from "./marketActivity.service";
import { MarketActivityControllerBase } from "./base/marketActivity.controller.base";

@swagger.ApiTags("marketActivities")
@common.Controller("marketActivities")
export class MarketActivityController extends MarketActivityControllerBase {
  constructor(
    protected readonly service: MarketActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
