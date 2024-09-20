import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SALEOPPORTUNITY_TITLE_FIELD } from "./SaleOpportunityTitle";
import { LEAD_TITLE_FIELD } from "../lead/LeadTitle";

export const SaleOpportunityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lead" source="lead.id" reference="Lead">
          <TextField source={LEAD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="progress" source="progress" />
        <TextField label="revenueForecast" source="revenueForecast" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Contract"
          target="saleOpportunityId"
          label="Contracts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
