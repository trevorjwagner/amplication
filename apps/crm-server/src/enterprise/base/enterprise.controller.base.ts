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
import { EnterpriseService } from "../enterprise.service";
import { EnterpriseCreateInput } from "./EnterpriseCreateInput";
import { Enterprise } from "./Enterprise";
import { EnterpriseFindManyArgs } from "./EnterpriseFindManyArgs";
import { EnterpriseWhereUniqueInput } from "./EnterpriseWhereUniqueInput";
import { EnterpriseUpdateInput } from "./EnterpriseUpdateInput";

export class EnterpriseControllerBase {
  constructor(protected readonly service: EnterpriseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Enterprise })
  async createEnterprise(
    @common.Body() data: EnterpriseCreateInput
  ): Promise<Enterprise> {
    return await this.service.createEnterprise({
      data: data,
      select: {
        createdAt: true,
        description: true,
        establishedDate: true,
        id: true,
        industry: true,
        name: true,
        numberOfEmployees: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Enterprise] })
  @ApiNestedQuery(EnterpriseFindManyArgs)
  async enterprises(@common.Req() request: Request): Promise<Enterprise[]> {
    const args = plainToClass(EnterpriseFindManyArgs, request.query);
    return this.service.enterprises({
      ...args,
      select: {
        createdAt: true,
        description: true,
        establishedDate: true,
        id: true,
        industry: true,
        name: true,
        numberOfEmployees: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Enterprise })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async enterprise(
    @common.Param() params: EnterpriseWhereUniqueInput
  ): Promise<Enterprise | null> {
    const result = await this.service.enterprise({
      where: params,
      select: {
        createdAt: true,
        description: true,
        establishedDate: true,
        id: true,
        industry: true,
        name: true,
        numberOfEmployees: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Enterprise })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEnterprise(
    @common.Param() params: EnterpriseWhereUniqueInput,
    @common.Body() data: EnterpriseUpdateInput
  ): Promise<Enterprise | null> {
    try {
      return await this.service.updateEnterprise({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          establishedDate: true,
          id: true,
          industry: true,
          name: true,
          numberOfEmployees: true,
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
  @swagger.ApiOkResponse({ type: Enterprise })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEnterprise(
    @common.Param() params: EnterpriseWhereUniqueInput
  ): Promise<Enterprise | null> {
    try {
      return await this.service.deleteEnterprise({
        where: params,
        select: {
          createdAt: true,
          description: true,
          establishedDate: true,
          id: true,
          industry: true,
          name: true,
          numberOfEmployees: true,
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
