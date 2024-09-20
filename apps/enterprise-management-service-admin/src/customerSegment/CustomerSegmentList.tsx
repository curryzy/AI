import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerSegmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CustomerSegments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="criteria" source="criteria" />
        <TextField label="ID" source="id" />
        <TextField label="segmentName" source="segmentName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
