import { EnterpriseWhereInput } from "./EnterpriseWhereInput";
import { EnterpriseOrderByInput } from "./EnterpriseOrderByInput";

export type EnterpriseFindManyArgs = {
  where?: EnterpriseWhereInput;
  orderBy?: Array<EnterpriseOrderByInput>;
  skip?: number;
  take?: number;
};
