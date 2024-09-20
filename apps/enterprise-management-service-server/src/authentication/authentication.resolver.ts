import * as graphql from "@nestjs/graphql";
import { JwtStrategyInput } from "./JwtStrategyInput";
import { JwtStrategyOutput } from "./JwtStrategyOutput";
import { PasswordServiceInput } from "./PasswordServiceInput";
import { PasswordServiceOutput } from "./PasswordServiceOutput";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Mutation(() => JwtStrategyOutput)
  async DefaultAuthGuard(
    @graphql.Args()
    args: JwtStrategyInput
  ): Promise<JwtStrategyOutput> {
    return this.service.DefaultAuthGuard(args);
  }

  @graphql.Mutation(() => JwtStrategyOutput)
  async JwtStrategy(
    @graphql.Args()
    args: JwtStrategyInput
  ): Promise<JwtStrategyOutput> {
    return this.service.JwtStrategy(args);
  }

  @graphql.Mutation(() => PasswordServiceOutput)
  async PasswordService(
    @graphql.Args()
    args: PasswordServiceInput
  ): Promise<PasswordServiceOutput> {
    return this.service.PasswordService(args);
  }

  @graphql.Mutation(() => PasswordServiceOutput)
  async TokenService(
    @graphql.Args()
    args: PasswordServiceInput
  ): Promise<PasswordServiceOutput> {
    return this.service.TokenService(args);
  }
}
