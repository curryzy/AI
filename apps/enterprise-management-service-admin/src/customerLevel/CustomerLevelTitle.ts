import { CustomerLevel as TCustomerLevel } from "../api/customerLevel/CustomerLevel";

export const CUSTOMERLEVEL_TITLE_FIELD = "level";

export const CustomerLevelTitle = (record: TCustomerLevel): string => {
  return record.level?.toString() || String(record.id);
};
