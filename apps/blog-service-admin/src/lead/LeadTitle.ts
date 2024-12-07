import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "customer";

export const LeadTitle = (record: TLead): string => {
  return record.customer?.toString() || String(record.id);
};
