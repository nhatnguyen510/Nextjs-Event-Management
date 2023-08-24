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
  Button,
} from "react-admin";
// import { Button } from "@mui/material";
import { createDialogStore } from "../../../../../lib/zustand/EventDialogStore";
import { AttendeeListCreate } from "../../AttendeeListCreate";

interface EventShowProps {}

export const EventShow: React.FC<EventShowProps> = (props) => {
  const recordId = useGetRecordId();

  const { data } = useGetList("attendees", {
    filter: { events: recordId },
  });

  console.log({ recordId });
  console.log({ data });

  const { isDialogOpen, setIsDialogOpen } = createDialogStore();

  return (
    <>
      <Show
        aside={<ShowAside />}
        actions={<ShowActions eventId={recordId as string} />}
        sx={{
          height: "90%",
          "& .RaShow-main": {
            flexDirection: "row-reverse",
            height: "90%",
          },

          "& .MuiPaper-root": {
            maxHeight: "800px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,.1)",
              outline: "1px solid slategrey",
            },
          },
        }}
      >
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
      <AttendeeListCreate
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
        }}
      />
    </>
  );
};

const ShowAside: React.FC = () => {
  return (
    <SimpleShowLayout sx={{ width: "100%", flexShrink: 0 }}>
      <ImageField
        source="image"
        sx={{
          "& .RaImageField-image": {
            width: "100%",
            height: "100%",
          },
        }}
        label="Ảnh"
      />
      <TextField
        source="date"
        label="Ngày bắt đầu"
        sx={{
          textAlign: "center",
        }}
      />
      <TextField
        source="endDate"
        label="Ngày kết thúc"
        sx={{
          textAlign: "center",
        }}
      />
    </SimpleShowLayout>
  );
};

interface ShowActionsProps {
  eventId: string;
}
const ShowActions: React.FC<ShowActionsProps> = ({ eventId }) => {
  const { setIsDialogOpen } = createDialogStore();

  return (
    <>
      <TopToolbar
        sx={{
          marginBottom: "1rem",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setIsDialogOpen(true);
          }}
          label="Thêm người tham gia"
        />
        <EditButton
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
          label="Sửa"
        />
        <ExportButton label="Xuất file" />
      </TopToolbar>
    </>
  );
};
