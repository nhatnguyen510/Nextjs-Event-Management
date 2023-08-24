import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
} from "react-admin";
import { CardContent, Box, Grid, Divider } from "@mui/material";

interface AgencyEditProps {}

export const AgencyEdit: React.FC<AgencyEditProps> = () => {
  return (
    <Edit>
      <SimpleForm>
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
              <Grid item xs={12}>
                <TextInput
                  source="website"
                  fullWidth
                  variant="outlined"
                  label="Link website"
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
            </Grid>
          </Box>
        </CardContent>
      </SimpleForm>
    </Edit>
  );
};
