import React from "react";

import {
  Show,
  TextField,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  Datagrid,
  useGetRecordId,
  useGetList,
  EmailField,
  ImageField,
  useRecordContext,
  DateField,
  ReferenceField,
  SimpleShowLayout,
  CreateButton,
  ExportButton,
  SortButton,
  TopToolbar,
  EditButton,
  ListButton,
} from "react-admin";

import { Box, Grid } from "@mui/material";
import { AttendeeListCreate } from "./AttendeeListCreate";

interface EventShowProps {}

export const EventShow: React.FC<EventShowProps> = (props) => {
  const recordId = useGetRecordId();

  const { data } = useGetList("attendees", {
    filter: { events: recordId },
  });

  console.log({ recordId });
  console.log({ data });
  return (
    <>
      {/* <Grid container spacing={2} mt={4} justifyContent="center"> */}
      <Show aside={<ShowAside />} actions={<ShowActions />}>
        <TextField source="title" variant="h5" component="div" m={2} />
        <ReferenceManyField label={false} reference="attendees" target="events">
          <Datagrid>
            <TextField source="id" />
            <ImageField
              source="avatar"
              sx={{
                "& img": {
                  maxWidth: 50,
                  maxHeight: 50,
                  objectFit: "contain",
                },
              }}
            />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="agency" />
          </Datagrid>
        </ReferenceManyField>
      </Show>
      {/* </Grid> */}
    </>
  );
};

const ShowAside: React.FC = () => {
  return (
    <SimpleShowLayout sx={{ minWidth: 200, flexShrink: 0 }}>
      {/* <DateField source="updated_at" showTime />
      <ReferenceField source="customer_id" reference="customers" link="show" />
      <ReferenceField source="product_id" reference="products" link="show" /> */}
      <ImageField source="image" label="" />
      <TextField source="date" label="Date" />
      <TextField source="endDate" label="End Date" />
    </SimpleShowLayout>
  );
};

const ShowActions: React.FC = ({}) => {
  return (
    <>
      <TopToolbar>
        <EditButton />
        <ExportButton />
      </TopToolbar>
    </>
  );
};
