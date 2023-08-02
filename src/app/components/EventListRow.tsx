"use client";

import React from "react";
import PropTypes from "prop-types";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  ReferenceManyField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  ImageInput,
  ImageField,
} from "react-admin";

interface EventListRowProps {
  events?: any;
}

export const EventListRow: React.FC<EventListRowProps> = ({ events }) => {
  return (
    <List title="Events" perPage={10} pagination={false} {...events}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <DateField source="date" />
        <TextField source="location" />
        <TextField source="organizer" />
        <ImageField source="image" />
        <TextField source="QRCodeLink" />
        <ReferenceManyField
          label="Attendees"
          reference="attendees"
          target="events"
        >
          <Datagrid>
            <TextField source="name" />
          </Datagrid>
        </ReferenceManyField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

EventListRow.propTypes = {
  events: PropTypes.object,
};
