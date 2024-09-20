import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuotationService } from "./quotation.service";
import { QuotationControllerBase } from "./base/quotation.controller.base";

@swagger.ApiTags("quotations")
@common.Controller("quotations")
export class QuotationController extends QuotationControllerBase {
  constructor(
    protected readonly service: QuotationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
