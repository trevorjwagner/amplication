import * as graphql from "@nestjs/graphql";
import { EnterpriseResolverBase } from "./base/enterprise.resolver.base";
import { Enterprise } from "./base/Enterprise";
import { EnterpriseService } from "./enterprise.service";

@graphql.Resolver(() => Enterprise)
export class EnterpriseResolver extends EnterpriseResolverBase {
  constructor(protected readonly service: EnterpriseService) {
    super(service);
  }
}
