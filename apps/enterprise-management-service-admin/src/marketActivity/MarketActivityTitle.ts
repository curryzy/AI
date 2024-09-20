import { MarketActivity as TMarketActivity } from "../api/marketActivity/MarketActivity";

export const MARKETACTIVITY_TITLE_FIELD = "activityName";

export const MarketActivityTitle = (record: TMarketActivity): string => {
  return record.activityName?.toString() || String(record.id);
};
