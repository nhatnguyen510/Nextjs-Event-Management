"use client";

import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  ReferenceManyField,
  EditButton,
  ImageField,
  ReferenceManyCount,
} from "react-admin";

interface AgencyListRowProps {
  agencies?: any;
}

const AgencyListRow: React.FC<AgencyListRowProps> = ({ agencies }) => {
  return (
    <List title="agencies" perPage={10} pagination={false} {...agencies}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="address" />
        <TextField source="city" />
        <TextField source="country" />
        <ImageField source="logo" />
        <TextField source="phone" />
        <EmailField source="email" />
        <TextField source="website" />
        <ReferenceManyCount label="events" reference="events" target="agency" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default AgencyListRow;
