import { Enterprise as TEnterprise } from "../api/enterprise/Enterprise";

export const ENTERPRISE_TITLE_FIELD = "name";

export const EnterpriseTitle = (record: TEnterprise): string => {
  return record.name?.toString() || String(record.id);
};
