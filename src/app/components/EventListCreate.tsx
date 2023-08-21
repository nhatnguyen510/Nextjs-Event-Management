import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
} from "react-admin";
import { CardContent, Box, Divider, Grid } from "@mui/material";

interface EventListCreateProps {}

export const EventListCreate: React.FC<EventListCreateProps> = ({}) => {
  return (
    <Create>
      <SimpleForm>
        <CardContent>
          <Box ml={2} flex="1" maxWidth={796}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextInput source="title" fullWidth label="Tiêu đề" />
              </Grid>
              <Grid item xs={6}>
                <TextInput source="description" fullWidth label="Mô tả" />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
              <Grid item xs={3}>
                <DateInput source="date" fullWidth label="Ngày bắt đầu" />
              </Grid>
              <Grid item xs={3}>
                <DateInput source="endDate" fullWidth label="Ngày kết thúc" />
              </Grid>
              <Grid item xs={3}>
                <TextInput source="location" fullWidth label="Địa điểm" />
              </Grid>
              <Grid item xs={3}>
                <TextInput
                  source="organizer"
                  fullWidth
                  label="Đơn vị tổ chức"
                />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
              <Grid item xs={6}>
                <ImageInput source="image" fullWidth label="Hình ảnh" />
              </Grid>
              <Grid item xs={6}>
                <TextInput source="QRCodeLink" fullWidth label="Link mã QR" />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
            </Grid>
          </Box>
        </CardContent>
      </SimpleForm>
    </Create>
  );
};
