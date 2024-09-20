import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { QuotationModule } from "./quotation/quotation.module";
import { SaleOpportunityModule } from "./saleOpportunity/saleOpportunity.module";
import { CustomerSegmentModule } from "./customerSegment/customerSegment.module";
import { MarketActivityModule } from "./marketActivity/marketActivity.module";
import { OrderModule } from "./order/order.module";
import { EmailCampaignModule } from "./emailCampaign/emailCampaign.module";
import { ContractModule } from "./contract/contract.module";
import { CustomerLevelModule } from "./customerLevel/customerLevel.module";
import { CustomerInfoModule } from "./customerInfo/customerInfo.module";
import { LeadModule } from "./lead/lead.module";
import { UserModule } from "./user/user.module";
import { CustomerManagementModuleModule } from "./customermanagementmodule/customermanagementmodule.module";
import { MarketingManagementModuleModule } from "./marketingmanagementmodule/marketingmanagementmodule.module";
import { SalesManagementModuleModule } from "./salesmanagementmodule/salesmanagementmodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    LoggerModule,
    QuotationModule,
    SaleOpportunityModule,
    CustomerSegmentModule,
    MarketActivityModule,
    OrderModule,
    EmailCampaignModule,
    ContractModule,
    CustomerLevelModule,
    CustomerInfoModule,
    LeadModule,
    UserModule,
    CustomerManagementModuleModule,
    MarketingManagementModuleModule,
    SalesManagementModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
