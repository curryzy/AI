import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SALEOPPORTUNITY_TITLE_FIELD } from "../saleOpportunity/SaleOpportunityTitle";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contractDetails" source="contractDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="saleOpportunity"
          source="saleopportunity.id"
          reference="SaleOpportunity"
        >
          <TextField source={SALEOPPORTUNITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validityPeriod" source="validityPeriod" />
      </SimpleShowLayout>
    </Show>
  );
};
