import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SaleOpportunityTitle } from "../saleOpportunity/SaleOpportunityTitle";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="customer" source="customer" />
        <TextInput label="leadSource" source="leadSource" />
        <ReferenceArrayInput
          source="saleOpportunities"
          reference="SaleOpportunity"
        >
          <SelectArrayInput
            optionText={SaleOpportunityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
