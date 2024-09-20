import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contractDetails" multiline source="contractDetails" />
        <TextInput label="customer" source="customer" />
        <DateTimeInput label="validityPeriod" source="validityPeriod" />
      </SimpleForm>
    </Create>
  );
};
