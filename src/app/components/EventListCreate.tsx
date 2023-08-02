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
                <TextInput source="title" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextInput source="description" fullWidth />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
              <Grid item xs={4}>
                <DateInput source="date" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextInput source="location" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextInput source="organizer" fullWidth />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
              <Grid item xs={6}>
                <ImageInput source="image" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextInput source="QRCodeLink" fullWidth />
              </Grid>
              <Divider sx={{ mb: 2, width: "100%" }} />
            </Grid>
          </Box>
        </CardContent>
      </SimpleForm>
    </Create>
  );
};
