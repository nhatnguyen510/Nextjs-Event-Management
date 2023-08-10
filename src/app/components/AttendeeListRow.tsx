"use client";

import React from "react";
import PropTypes from "prop-types";
import { List, Datagrid, TextField, EmailField, EditButton } from "react-admin";

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
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default AttendeeListRow;
