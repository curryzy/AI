import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "warehouseLocation";

export const InventoryTitle = (record: TInventory): string => {
  return record.warehouseLocation?.toString() || String(record.id);
};
