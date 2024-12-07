import { CustomerInfo as TCustomerInfo } from "../api/customerInfo/CustomerInfo";

export const CUSTOMERINFO_TITLE_FIELD = "name";

export const CustomerInfoTitle = (record: TCustomerInfo): string => {
  return record.name?.toString() || String(record.id);
};
