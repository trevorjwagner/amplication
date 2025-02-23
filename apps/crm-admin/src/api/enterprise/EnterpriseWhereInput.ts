import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EnterpriseWhereInput = {
  description?: StringNullableFilter;
  establishedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  industry?: "Option1";
  name?: StringNullableFilter;
  numberOfEmployees?: IntNullableFilter;
};
