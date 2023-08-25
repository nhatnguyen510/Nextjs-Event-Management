import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
} from "react-admin";

import {
  CardContent,
  Box,
  Divider,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface EventListCreateProps {
  open: boolean;
  onClose: () => void;
}

export const EventListCreate: React.FC<EventListCreateProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Tạo sự kiện</DialogTitle>
      <DialogContent
        sx={{
          padding: 0,
        }}
      >
        <SimpleForm sx={{}}>
          <CardContent
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box ml={2} flex="1" maxWidth={796}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextInput
                    source="title"
                    fullWidth
                    variant="outlined"
                    label="Tiêu đề"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextInput
                    source="description"
                    fullWidth
                    variant="outlined"
                    label="Mô tả"
                  />
                </Grid>

                <Grid item xs={6}>
                  <DateInput
                    source="date"
                    fullWidth
                    variant="outlined"
                    label="Ngày bắt đầu"
                  />
                </Grid>
                <Grid item xs={6}>
                  <DateInput
                    source="endDate"
                    fullWidth
                    variant="outlined"
                    label="Ngày kết thúc"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextInput
                    source="location"
                    fullWidth
                    variant="outlined"
                    label="Địa điểm"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextInput
                    source="organizer"
                    fullWidth
                    variant="outlined"
                    label="Đơn vị tổ chức"
                  />
                </Grid>

                <Grid item xs={12}>
                  <ImageInput
                    source="image"
                    fullWidth
                    variant="outlined"
                    label="Hình ảnh"
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </SimpleForm>
      </DialogContent>
    </Dialog>
  );
};
