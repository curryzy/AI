import { CustomerInfoCreateNestedManyWithoutCustomerLevelsInput } from "./CustomerInfoCreateNestedManyWithoutCustomerLevelsInput";

export type CustomerLevelCreateInput = {
  customerInfos?: CustomerInfoCreateNestedManyWithoutCustomerLevelsInput;
  description?: string | null;
  level?: string | null;
};
