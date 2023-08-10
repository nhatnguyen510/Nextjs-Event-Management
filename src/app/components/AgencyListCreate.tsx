import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
} from "react-admin";
import { CardContent, Box, Divider, Grid } from "@mui/material";

interface AgencyListCreateProps {}

export const AgencyListCreate: React.FC<AgencyListCreateProps> = ({}) => {
  return (
    <Create>
      <SimpleForm>
        <CardContent>
          <Box ml={2} flex="1" maxWidth={796}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextInput source="name" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextInput source="address" fullWidth />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
              <Grid item xs={4}>
                <TextInput source="city" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextInput source="country" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextInput source="phone" fullWidth />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
              <Grid item xs={6}>
                <TextInput source="email" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextInput source="website" fullWidth />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
            </Grid>
          </Box>
        </CardContent>
      </SimpleForm>
    </Create>
  );
};
