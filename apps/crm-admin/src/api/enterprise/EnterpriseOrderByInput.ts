import { SortOrder } from "../../util/SortOrder";

export type EnterpriseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  establishedDate?: SortOrder;
  id?: SortOrder;
  industry?: SortOrder;
  name?: SortOrder;
  numberOfEmployees?: SortOrder;
  updatedAt?: SortOrder;
};
