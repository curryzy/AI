import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { InventoryTitle } from "../inventory/InventoryTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="inventories" reference="Inventory">
          <SelectArrayInput
            optionText={InventoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="inventoryStatus" source="inventoryStatus" />
        <NumberInput label="price" source="price" />
        <TextInput label="productName" source="productName" />
        <TextInput label="specifications" source="specifications" />
      </SimpleForm>
    </Edit>
  );
};
