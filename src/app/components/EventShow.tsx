import React from "react";

import {
  Show,
  TextField,
  ReferenceManyField,
  Datagrid,
  useGetRecordId,
  useGetList,
  EmailField,
  ImageField,
  SimpleShowLayout,
  ExportButton,
  TopToolbar,
  EditButton,
} from "react-admin";

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
            <TextField source="name" label="Tên" />
            <EmailField source="email" label="Email" />
            <TextField source="phone" label="SĐT" />
            <TextField source="agency" label="Đơn vị" />
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
      <ImageField source="image" />
      <TextField source="date" label="Ngày bắt đầu" />
      <TextField source="endDate" label="Ngày kết thúc" />
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
