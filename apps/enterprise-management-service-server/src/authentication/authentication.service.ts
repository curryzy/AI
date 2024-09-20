import { Injectable } from "@nestjs/common";
import { JwtStrategyInput } from "./JwtStrategyInput";
import { JwtStrategyOutput } from "./JwtStrategyOutput";
import { PasswordServiceInput } from "./PasswordServiceInput";
import { PasswordServiceOutput } from "./PasswordServiceOutput";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async DefaultAuthGuard(args: JwtStrategyInput): Promise<JwtStrategyOutput> {
    throw new Error("Not implemented");
  }
  async JwtStrategy(args: JwtStrategyInput): Promise<JwtStrategyOutput> {
    throw new Error("Not implemented");
  }
  async PasswordService(args: PasswordServiceInput): Promise<PasswordServiceOutput> {
    throw new Error("Not implemented");
  }
  async TokenService(args: PasswordServiceInput): Promise<PasswordServiceOutput> {
    throw new Error("Not implemented");
  }
}
