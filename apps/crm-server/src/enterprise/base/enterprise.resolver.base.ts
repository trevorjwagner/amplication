/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Enterprise } from "./Enterprise";
import { EnterpriseCountArgs } from "./EnterpriseCountArgs";
import { EnterpriseFindManyArgs } from "./EnterpriseFindManyArgs";
import { EnterpriseFindUniqueArgs } from "./EnterpriseFindUniqueArgs";
import { CreateEnterpriseArgs } from "./CreateEnterpriseArgs";
import { UpdateEnterpriseArgs } from "./UpdateEnterpriseArgs";
import { DeleteEnterpriseArgs } from "./DeleteEnterpriseArgs";
import { EnterpriseService } from "../enterprise.service";
@graphql.Resolver(() => Enterprise)
export class EnterpriseResolverBase {
  constructor(protected readonly service: EnterpriseService) {}

  async _enterprisesMeta(
    @graphql.Args() args: EnterpriseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Enterprise])
  async enterprises(
    @graphql.Args() args: EnterpriseFindManyArgs
  ): Promise<Enterprise[]> {
    return this.service.enterprises(args);
  }

  @graphql.Query(() => Enterprise, { nullable: true })
  async enterprise(
    @graphql.Args() args: EnterpriseFindUniqueArgs
  ): Promise<Enterprise | null> {
    const result = await this.service.enterprise(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Enterprise)
  async createEnterprise(
    @graphql.Args() args: CreateEnterpriseArgs
  ): Promise<Enterprise> {
    return await this.service.createEnterprise({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Enterprise)
  async updateEnterprise(
    @graphql.Args() args: UpdateEnterpriseArgs
  ): Promise<Enterprise | null> {
    try {
      return await this.service.updateEnterprise({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Enterprise)
  async deleteEnterprise(
    @graphql.Args() args: DeleteEnterpriseArgs
  ): Promise<Enterprise | null> {
    try {
      return await this.service.deleteEnterprise(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
