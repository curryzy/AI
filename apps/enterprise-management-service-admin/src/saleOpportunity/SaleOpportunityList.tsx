import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LEAD_TITLE_FIELD } from "../lead/LeadTitle";

export const SaleOpportunityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SaleOpportunities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lead" source="lead.id" reference="Lead">
          <TextField source={LEAD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="progress" source="progress" />
        <TextField label="revenueForecast" source="revenueForecast" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
