"use client";

import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  ImageField,
  ReferenceField,
  NumberField,
} from "react-admin";

import { EventListAsideFilter } from "./EventListFilter";
import { Actions } from "./EventListActions";
interface EventListRowProps {
  events?: any;
}

export const EventListRow: React.FC<EventListRowProps> = ({ events }) => {
  return (
    <List
      title="Events"
      actions={<Actions />}
      aside={<EventListAsideFilter />}
      perPage={10}
      {...events}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="title" label="Tên sự kiện" />
        <TextField source="description" label="Mô tả" />
        <DateField source="date" locales="fr-FR" label="Ngày bắt đầu" />
        <DateField source="endDate" label="Ngày kết thúc" locales="fr-FR" />
        <TextField source="location" label="Địa điểm" />
        <ReferenceField
          source="agency"
          reference="agencies"
          label="Đơn vị tổ chức"
        >
          <TextField source="name" />
        </ReferenceField>
        <ImageField source="image" label="Hình ảnh" />
        <TextField source="QRCodeLink" label="Mã QR" />
        <NumberField
          source="numOfAttendees"
          label="Số lượng tham gia"
          sortByOrder="DESC"
        />
        <EditButton label="Sửa" />
      </Datagrid>
    </List>
  );
};
