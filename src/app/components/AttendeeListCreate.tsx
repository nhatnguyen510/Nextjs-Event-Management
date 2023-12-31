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
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface AttendeeListCreateProps {
  open: boolean;
  onClose: () => void;
}

export const AttendeeListCreate: React.FC<AttendeeListCreateProps> = ({
  open,
  onClose,
}) => {
  return (
    // <Create>
    //   <SimpleForm>
    //     <CardContent>
    //       <Box ml={2} flex="1" maxWidth={796}>
    //         <Grid container spacing={2}>
    //           <Grid item xs={6}>
    //             <TextInput source="title" fullWidth />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextInput source="description" fullWidth />
    //           </Grid>
    //           <Divider sx={{ mb: 2, width: "100%" }} />
    //           <Grid item xs={4}>
    //             <DateInput source="date" fullWidth />
    //           </Grid>
    //           <Grid item xs={4}>
    //             <TextInput source="location" fullWidth />
    //           </Grid>
    //           <Grid item xs={4}>
    //             <TextInput source="organizer" fullWidth />
    //           </Grid>
    //           <Divider sx={{ mb: 2, width: "100%" }} />
    //           <Grid item xs={6}>
    //             <ImageInput source="image" fullWidth />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextInput source="QRCodeLink" fullWidth />
    //           </Grid>
    //           <Divider sx={{ mb: 2, width: "100%" }} />
    //         </Grid>
    //       </Box>
    //     </CardContent>
    //   </SimpleForm>
    // </Create>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Thêm người tham dự</DialogTitle>
      <DialogContent>
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
                <Grid item xs={12}>
                  <TextInput
                    source="name"
                    fullWidth
                    variant="outlined"
                    label="Họ và tên"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    source="email"
                    fullWidth
                    variant="outlined"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    source="phone"
                    fullWidth
                    variant="outlined"
                    label="Số điện thoại"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextInput
                    source="agency"
                    fullWidth
                    variant="outlined"
                    label="Đơn vị"
                  />
                </Grid>

                <Grid item xs={12}>
                  <ImageInput
                    source="avatar"
                    fullWidth
                    variant="outlined"
                    label="Ảnh đại diện"
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
