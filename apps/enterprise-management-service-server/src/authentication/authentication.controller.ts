import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationService } from "./authentication.service";
import { JwtStrategyInput } from "./JwtStrategyInput";
import { JwtStrategyOutput } from "./JwtStrategyOutput";
import { PasswordServiceInput } from "./PasswordServiceInput";
import { PasswordServiceOutput } from "./PasswordServiceOutput";

@swagger.ApiTags("authentications")
@common.Controller("authentications")
export class AuthenticationController {
  constructor(protected readonly service: AuthenticationService) {}

  @common.Post("/default-auth-guard")
  @swagger.ApiOkResponse({
    type: JwtStrategyOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DefaultAuthGuard(
    @common.Body()
    body: JwtStrategyInput
  ): Promise<JwtStrategyOutput> {
        return this.service.DefaultAuthGuard(body);
      }

  @common.Post("/jwt-strategy")
  @swagger.ApiOkResponse({
    type: JwtStrategyOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async JwtStrategy(
    @common.Body()
    body: JwtStrategyInput
  ): Promise<JwtStrategyOutput> {
        return this.service.JwtStrategy(body);
      }

  @common.Post("/password-service")
  @swagger.ApiOkResponse({
    type: PasswordServiceOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PasswordService(
    @common.Body()
    body: PasswordServiceInput
  ): Promise<PasswordServiceOutput> {
        return this.service.PasswordService(body);
      }

  @common.Post("/token-service")
  @swagger.ApiOkResponse({
    type: PasswordServiceOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TokenService(
    @common.Body()
    body: PasswordServiceInput
  ): Promise<PasswordServiceOutput> {
        return this.service.TokenService(body);
      }
}
