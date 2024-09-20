import { CustomerInfoUpdateManyWithoutCustomerLevelsInput } from "./CustomerInfoUpdateManyWithoutCustomerLevelsInput";

export type CustomerLevelUpdateInput = {
  customerInfos?: CustomerInfoUpdateManyWithoutCustomerLevelsInput;
  description?: string | null;
  level?: string | null;
  potentialValue?: number | null;
  transactionHistory?: string | null;
};
