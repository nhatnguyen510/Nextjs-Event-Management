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
import { EventListActions } from "./EventListActions";
interface EventListRowProps {
  events?: any;
}

export const EventListRow: React.FC<EventListRowProps> = ({ events }) => {
  return (
    <List
      title="Events"
      actions={<EventListActions />}
      aside={<EventListAsideFilter />}
      perPage={10}
      {...events}
    >
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <DateField source="date" locales="fr-FR" />
        <DateField source="endDate" label="End date" locales="fr-FR" />
        <TextField source="location" />
        <ReferenceField source="agency" reference="agencies">
          <TextField source="name" />
        </ReferenceField>
        <ImageField source="image" />
        <TextField source="QRCodeLink" label="QR code link" />
        <NumberField
          source="numOfAttendees"
          label="Attendees"
          sortByOrder="DESC"
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};
