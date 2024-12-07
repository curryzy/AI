import { Quotation as TQuotation } from "../api/quotation/Quotation";

export const QUOTATION_TITLE_FIELD = "customer";

export const QuotationTitle = (record: TQuotation): string => {
  return record.customer?.toString() || String(record.id);
};
