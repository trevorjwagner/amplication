import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnterpriseServiceBase } from "./base/enterprise.service.base";

@Injectable()
export class EnterpriseService extends EnterpriseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
