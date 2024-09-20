import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SaleOpportunityTitle } from "../saleOpportunity/SaleOpportunityTitle";

export const ContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
