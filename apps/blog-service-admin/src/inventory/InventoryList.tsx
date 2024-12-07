import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const InventoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Inventories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="incomingDate" source="incomingDate" />
        <TextField label="inventoryCount" source="inventoryCount" />
        <TextField label="outgoingDate" source="outgoingDate" />
        <ReferenceField label="product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="warehouseLocation" source="warehouseLocation" />{" "}
      </Datagrid>
    </List>
  );
};
