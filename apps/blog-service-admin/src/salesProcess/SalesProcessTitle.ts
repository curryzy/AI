import { SalesProcess as TSalesProcess } from "../api/salesProcess/SalesProcess";

export const SALESPROCESS_TITLE_FIELD = "customer";

export const SalesProcessTitle = (record: TSalesProcess): string => {
  return record.customer?.toString() || String(record.id);
};
