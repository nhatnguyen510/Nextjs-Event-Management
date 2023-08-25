"use client";

import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ImageField,
  ReferenceField,
  NumberField,
  EditButton,
} from "react-admin";
import { Button } from "@mui/material";
import { EventListAsideFilter } from "./EventListFilter";
import { Actions } from "./EventListActions";
import { EventListCreate } from "./EventListCreate";
import { createDialogStore } from "@/../lib/zustand/EventDialogStore";
import { useLocation, matchPath } from "react-router-dom";
import { useCurrentLocation } from "@/../lib/hooks/useCurrentLocation";

interface EventListRowProps {
  events?: any;
}

export const EventListRow: React.FC<EventListRowProps> = ({ events }) => {
  const { isDialogOpen, setIsDialogOpen } = createDialogStore();
  const currentLocation = useCurrentLocation();

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
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
            link={false}
          >
            <TextField source="name" />
          </ReferenceField>
          <ImageField source="image" label="Hình ảnh" />
          <NumberField
            source="numOfAttendees"
            label="Số lượng tham gia"
            sortByOrder="DESC"
          />
          <EditButton label="Sửa" />
        </Datagrid>
      </List>
      <EventListCreate
        open={currentLocation == "events" && isDialogOpen}
        onClose={handleClose}
      />
    </>
  );
};
