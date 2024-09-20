import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerLevelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CustomerLevels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="level" source="level" />
        <TextField label="potentialValue" source="potentialValue" />
        <TextField label="transactionHistory" source="transactionHistory" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
