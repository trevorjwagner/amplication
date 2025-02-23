import { Module } from "@nestjs/common";
import { EnterpriseModuleBase } from "./base/enterprise.module.base";
import { EnterpriseService } from "./enterprise.service";
import { EnterpriseController } from "./enterprise.controller";
import { EnterpriseResolver } from "./enterprise.resolver";

@Module({
  imports: [EnterpriseModuleBase],
  controllers: [EnterpriseController],
  providers: [EnterpriseService, EnterpriseResolver],
  exports: [EnterpriseService],
})
export class EnterpriseModule {}
