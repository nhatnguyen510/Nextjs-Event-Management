import React, { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import ListOfEvents from "@/../fake-events.json";
import EventCard from "./EventCard";
import EventIcon from "@mui/icons-material/Event";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import useEventTypes from "../../../lib/hooks/useEventTypes";
import queryString from "query-string";
import useEncodedURL from "../../../lib/hooks/useEncodedURL";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const events = ListOfEvents.events;

  const { upcomingEvents, ongoingEvents, pastEvents } = useEventTypes(events);

  const upcomingEventsIds = upcomingEvents.map((event) => event.id);
  const ongoingEventsIds = ongoingEvents.map((event) => event.id);
  const pastEventsIds = pastEvents.map((event) => event.id);

  const upcomingEventsURL = useEncodedURL(upcomingEventsIds);
  const ongoingEventsURL = useEncodedURL(ongoingEventsIds);
  const pastEventsURL = useEncodedURL(pastEventsIds);

  return (
    <>
      <Grid container spacing={2} mt={4} justifyContent="right">
        <Grid item xs={12} md={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1" gutterBottom>
                Dashboard
              </Typography>
              <Typography variant="body1" gutterBottom>
                Welcome to the dashboard. Here you can see the statistics of
                your events.
              </Typography>
            </Grid>
            <Grid item mt={4} xs={12}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                direction="row"
                alignItems="center"
              >
                <Grid item xs={2} sm={4} md={4}>
                  <EventCard
                    title="Upcoming events"
                    color="#FFF4DE"
                    icon={<EventIcon />}
                    iconBgColor="#FF947A"
                    numberOfEvents={upcomingEvents.length}
                    link={upcomingEventsURL}
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <EventCard
                    title="Ongoing events"
                    color="#DCFCE7"
                    icon={<EventAvailableIcon />}
                    iconBgColor="#3CD856"
                    numberOfEvents={ongoingEvents.length}
                    link={ongoingEventsURL}
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <EventCard
                    title="Past events"
                    color="#FFE2E5"
                    icon={<EventBusyIcon />}
                    iconBgColor="#FA5A7D"
                    numberOfEvents={pastEvents.length}
                    link={pastEventsURL}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
