/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CustomerSegmentService } from "../customerSegment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerSegmentCreateInput } from "./CustomerSegmentCreateInput";
import { CustomerSegment } from "./CustomerSegment";
import { CustomerSegmentFindManyArgs } from "./CustomerSegmentFindManyArgs";
import { CustomerSegmentWhereUniqueInput } from "./CustomerSegmentWhereUniqueInput";
import { CustomerSegmentUpdateInput } from "./CustomerSegmentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerSegmentControllerBase {
  constructor(
    protected readonly service: CustomerSegmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerSegment })
  @nestAccessControl.UseRoles({
    resource: "CustomerSegment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCustomerSegment(
    @common.Body() data: CustomerSegmentCreateInput
  ): Promise<CustomerSegment> {
    return await this.service.createCustomerSegment({
      data: data,
      select: {
        createdAt: true,
        criteria: true,
        id: true,
        segmentName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomerSegment] })
  @ApiNestedQuery(CustomerSegmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CustomerSegment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customerSegments(
    @common.Req() request: Request
  ): Promise<CustomerSegment[]> {
    const args = plainToClass(CustomerSegmentFindManyArgs, request.query);
    return this.service.customerSegments({
      ...args,
      select: {
        createdAt: true,
        criteria: true,
        id: true,
        segmentName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomerSegment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerSegment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customerSegment(
    @common.Param() params: CustomerSegmentWhereUniqueInput
  ): Promise<CustomerSegment | null> {
    const result = await this.service.customerSegment({
      where: params,
      select: {
        createdAt: true,
        criteria: true,
        id: true,
        segmentName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CustomerSegment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerSegment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCustomerSegment(
    @common.Param() params: CustomerSegmentWhereUniqueInput,
    @common.Body() data: CustomerSegmentUpdateInput
  ): Promise<CustomerSegment | null> {
    try {
      return await this.service.updateCustomerSegment({
        where: params,
        data: data,
        select: {
          createdAt: true,
          criteria: true,
          id: true,
          segmentName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CustomerSegment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerSegment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCustomerSegment(
    @common.Param() params: CustomerSegmentWhereUniqueInput
  ): Promise<CustomerSegment | null> {
    try {
      return await this.service.deleteCustomerSegment({
        where: params,
        select: {
          createdAt: true,
          criteria: true,
          id: true,
          segmentName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
