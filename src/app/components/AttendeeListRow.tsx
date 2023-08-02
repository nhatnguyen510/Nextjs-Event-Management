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
} from "react-admin";

interface AttendeeListRowProps {
  attendees?: any;
}

const AttendeeListRow: React.FC<AttendeeListRowProps> = ({ attendees }) => {
  return (
    <List title="Attendees" perPage={10} pagination={false} {...attendees}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="agency" />

        <ReferenceManyField
          label="Events"
          reference="events"
          target="attendees"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="date" />
          </Datagrid>
        </ReferenceManyField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

AttendeeListRow.propTypes = {
  attendees: PropTypes.object,
};

export default AttendeeListRow;
