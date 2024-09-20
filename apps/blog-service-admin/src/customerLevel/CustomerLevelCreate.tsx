import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CustomerInfoTitle } from "../customerInfo/CustomerInfoTitle";

export const CustomerLevelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
      </SimpleForm>
    </Create>
  );
};
