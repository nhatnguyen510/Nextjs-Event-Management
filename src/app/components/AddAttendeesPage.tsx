import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataProvider } from "react-admin";
import { Button, TextField, Container, Typography, Grid } from "@mui/material";

const AddAttendeePage = () => {
  const navigate = useNavigate();
  const dataProvider = useDataProvider();

  const [attendeeData, setAttendeeData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    logo: "",
    phone: "",
    email: "",
    website: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAttendeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddAttendee = async () => {
    try {
      // Make an API call to add the attendee data
      await dataProvider.create("attendees", { data: attendeeData });
      navigate("/attendees");
    } catch (error) {
      console.error("Error adding attendee:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Add Attendee
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            name="name"
            value={attendeeData.name}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="email"
            value={attendeeData.email}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone"
            name="phone"
            value={attendeeData.phone}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Address"
            name="address"
            value={attendeeData.address}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            name="city"
            value={attendeeData.city}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            name="country"
            value={attendeeData.country}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Logo"
            name="logo"
            value={attendeeData.logo}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Website"
            name="website"
            value={attendeeData.website}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddAttendee}
        sx={{ marginTop: 2 }}
      >
        Add Attendee
      </Button>
    </Container>
  );
};

export default AddAttendeePage;
