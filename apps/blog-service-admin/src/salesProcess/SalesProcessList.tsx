import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SalesProcessList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SalesProcesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="followUp" source="followUp" />
        <TextField label="ID" source="id" />
        <TextField label="salesStage" source="salesStage" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
