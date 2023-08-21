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
import { Actions } from "./EventListActions";
import { AgencyListAsideFilter } from "./AgencyListFilter";

interface AgencyListRowProps {
  agencies?: any;
}

const AgencyListRow: React.FC<AgencyListRowProps> = ({ agencies }) => {
  return (
    <List
      title="agencies"
      actions={<Actions />}
      aside={<AgencyListAsideFilter />}
      perPage={10}
      {...agencies}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" label="Tên" />
        <TextField source="address" label="Địa chỉ" />
        <TextField source="city" label="Công ty" />
        <TextField source="country" label="Quốc gia" />
        <ImageField source="logo" label="Logo" />
        <TextField source="phone" label="SĐT" />
        <EmailField source="email" label="Email" />
        <TextField source="website" label="Website" />
        <ReferenceManyCount label="events" reference="events" target="agency" />
        <EditButton label="Sửa" />
      </Datagrid>
    </List>
  );
};

export default AgencyListRow;
