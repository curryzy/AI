import { CustomerSegment as TCustomerSegment } from "../api/customerSegment/CustomerSegment";

export const CUSTOMERSEGMENT_TITLE_FIELD = "segmentName";

export const CustomerSegmentTitle = (record: TCustomerSegment): string => {
  return record.segmentName?.toString() || String(record.id);
};
