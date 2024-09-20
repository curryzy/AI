import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SaleOpportunityTitle } from "../saleOpportunity/SaleOpportunityTitle";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contractDetails" multiline source="contractDetails" />
        <TextInput label="customer" source="customer" />
        <ReferenceInput
          source="saleOpportunity.id"
          reference="SaleOpportunity"
          label="saleOpportunity"
        >
          <SelectInput optionText={SaleOpportunityTitle} />
        </ReferenceInput>
        <DateTimeInput label="validityPeriod" source="validityPeriod" />
      </SimpleForm>
    </Create>
  );
};
