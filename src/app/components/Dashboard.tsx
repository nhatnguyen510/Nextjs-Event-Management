import React from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import ListOfEvents from "@/../fake-events.json";
import EventCard from "./EventCard";
import EventIcon from "@mui/icons-material/Event";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import useEventTypes from "../../../lib/hooks/useEventTypes";
import useEncodedURL from "../../../lib/hooks/useEncodedURL";
import BarChart from "./BarChart";

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

  // Prepare event counts by month
  const eventCountsByMonth: Record<
    string,
    { ongoing: number; upcoming: number; past: number }
  > = {};

  [...ongoingEvents, ...upcomingEvents, ...pastEvents].forEach((event) => {
    const eventDate = new Date(event.date);
    const monthYear = `${eventDate.getMonth() + 1}-${eventDate.getFullYear()}`;

    if (!eventCountsByMonth[monthYear]) {
      eventCountsByMonth[monthYear] = { ongoing: 0, upcoming: 0, past: 0 };
    }

    if (ongoingEvents.includes(event)) {
      eventCountsByMonth[monthYear].ongoing++;
    } else if (upcomingEvents.includes(event)) {
      eventCountsByMonth[monthYear].upcoming++;
    } else if (pastEvents.includes(event)) {
      eventCountsByMonth[monthYear].past++;
    }
  });

  console.log({ eventCountsByMonth });

  return (
    <>
      <Box mt={2} sx={{}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          Chào mừng bạn đến với trang quản trị của chúng tôi. Bạn có thể thêm,
          sửa, xóa các sự kiện, đơn vị, người dùng, ...
        </Typography>
      </Box>
      <Grid
        container
        mt={4}
        spacing={2}
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "1rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <Grid item xs={12} md={4}>
          <EventCard
            title="SẮP DIỄN RA"
            color="#FFF4DE"
            icon={<EventIcon />}
            iconBgColor="#FF947A"
            numberOfEvents={upcomingEvents.length}
            link={upcomingEventsURL}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <EventCard
            title="ĐANG DIỄN RA"
            color="#DCFCE7"
            icon={<EventAvailableIcon />}
            iconBgColor="#3CD856"
            numberOfEvents={ongoingEvents.length}
            link={ongoingEventsURL}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <EventCard
            title="ĐÃ KẾT THÚC"
            color="#FFE2E5"
            icon={<EventBusyIcon />}
            iconBgColor="#FA5A7D"
            numberOfEvents={pastEvents.length}
            link={pastEventsURL}
          />
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4, mb: 2 }} />
      <BarChart
        title="Thống kê số lượng sự kiện theo tháng"
        eventCountsByMonth={eventCountsByMonth}
      />
    </>
  );
};

export default Dashboard;
