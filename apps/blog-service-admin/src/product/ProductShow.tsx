import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="inventoryStatus" source="inventoryStatus" />
        <TextField label="price" source="price" />
        <TextField label="productName" source="productName" />
        <TextField label="specifications" source="specifications" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Inventory"
          target="productId"
          label="Inventories"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="incomingDate" source="incomingDate" />
            <TextField label="inventoryCount" source="inventoryCount" />
            <TextField label="outgoingDate" source="outgoingDate" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="warehouseLocation" source="warehouseLocation" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
