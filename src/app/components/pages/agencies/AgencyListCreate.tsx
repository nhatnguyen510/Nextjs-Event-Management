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
} from "@mui/material";

interface AgencyListCreateProps {
  open: boolean;
  onClose: () => void;
}

export const AgencyListCreate: React.FC<AgencyListCreateProps> = ({
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
    //             <TextInput source="name" fullWidth label="Họ tên" />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextInput source="address" fullWidth label="Địa chỉ" />
    //           </Grid>
    //           <Divider sx={{ mb: 2, width: "100%" }} />
    //           <Grid item xs={4}>
    //             <TextInput source="city" fullWidth label="Thành phố" />
    //           </Grid>
    //           <Grid item xs={4}>
    //             <TextInput source="country" fullWidth label="Quốc gia" />
    //           </Grid>
    //           <Grid item xs={4}>
    //             <TextInput source="phone" fullWidth label="SĐT" />
    //           </Grid>
    //           <Divider sx={{ mb: 2, width: "100%" }} />
    //           <Grid item xs={6}>
    //             <TextInput source="email" fullWidth label="Email" />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextInput source="website" fullWidth label="Website" />
    //           </Grid>
    //           <Divider sx={{ mb: 2, width: "100%" }} />
    //         </Grid>
    //       </Box>
    //     </CardContent>
    //   </SimpleForm>
    // </Create>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        Tạo Đơn Vị
      </DialogTitle>
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
                <Grid item xs={6}>
                  <TextInput
                    source="name"
                    variant="outlined"
                    fullWidth
                    label="Tên đơn vị"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextInput
                    source="address"
                    fullWidth
                    variant="outlined"
                    label="Địa chỉ"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextInput
                    source="city"
                    fullWidth
                    variant="outlined"
                    label="Thành phố"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextInput
                    source="country"
                    fullWidth
                    variant="outlined"
                    label="Quốc gia"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextInput
                    source="phone"
                    fullWidth
                    variant="outlined"
                    label="SĐT"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextInput
                    source="email"
                    fullWidth
                    variant="outlined"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    source="website"
                    fullWidth
                    variant="outlined"
                    label="Link website"
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
