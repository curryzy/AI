import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";

import {
  OpenTelemetryModule,
  PipeInjector,
  ControllerInjector,
  EventEmitterInjector,
  GraphQLResolverInjector,
  GuardInjector,
} from "@amplication/opentelemetry-nestjs";

import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { AuthorModule } from "./author/author.module";
import { CommentModule } from "./comment/comment.module";
import { BlogModule } from "./blog/blog.module";
import { InventoryModule } from "./inventory/inventory.module";
import { ProductModule } from "./product/product.module";
import { CustomerLevelModule } from "./customerLevel/customerLevel.module";
import { OrderModule } from "./order/order.module";
import { LeadModule } from "./lead/lead.module";
import { CustomerInfoModule } from "./customerInfo/customerInfo.module";
import { QuotationModule } from "./quotation/quotation.module";
import { SalesProcessModule } from "./salesProcess/salesProcess.module";
import { ContractModule } from "./contract/contract.module";
import { UserModule } from "./user/user.module";
import { CustomerManagementModuleModule } from "./customermanagementmodule/customermanagementmodule.module";
import { ProductInventoryManagementModuleModule } from "./productinventorymanagementmodule/productinventorymanagementmodule.module";
import { SalesManagementModuleModule } from "./salesmanagementmodule/salesmanagementmodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    AuthorModule,
    CommentModule,
    BlogModule,
    InventoryModule,
    ProductModule,
    CustomerLevelModule,
    OrderModule,
    LeadModule,
    CustomerInfoModule,
    QuotationModule,
    SalesProcessModule,
    ContractModule,
    UserModule,
    CustomerManagementModuleModule,
    ProductInventoryManagementModuleModule,
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
    OpenTelemetryModule.forRoot({
      serviceName: "BlogService",
      spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter()),
      instrumentations: [
        new HttpInstrumentation({
          requestHook: (span, request) => {
            if (request.method)
              span.setAttribute("http.method", request.method);
          },
        }),
      ],

      traceAutoInjectors: [
        ControllerInjector,
        EventEmitterInjector,
        GraphQLResolverInjector,
        GuardInjector,
        PipeInjector,
      ],
    }),
  ],
  providers: [],
})
export class AppModule {}
