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

import { CustomerInfoTitle } from "../customerInfo/CustomerInfoTitle";

export const CustomerLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="customerInfos" reference="CustomerInfo">
          <SelectArrayInput
            optionText={CustomerInfoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="level" source="level" />
        <NumberInput step={1} label="potentialValue" source="potentialValue" />
        <TextInput
          label="transactionHistory"
          multiline
          source="transactionHistory"
        />
      </SimpleForm>
    </Edit>
  );
};
