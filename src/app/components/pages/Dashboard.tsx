import React from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import ListOfEvents from "@/../fake-events.json";
import EventCard from "../EventCard";
import EventIcon from "@mui/icons-material/Event";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import useEventTypes from "../../../../lib/hooks/useEventTypes";
import useEncodedURL from "../../../../lib/hooks/useEncodedURL";
import BarChart from "../charts/BarChart";
import TopAgenciesChart from "../charts/TopAgenciesChart";
import { useEventCountByMonth } from "../../../../lib/hooks/useEventCountByMonth";

interface DashboardProps {}

const events = ListOfEvents.events;
const agencies = ListOfEvents.agencies;

const Dashboard: React.FC<DashboardProps> = (props) => {
  const { upcomingEvents, ongoingEvents, pastEvents } = useEventTypes(events);

  const upcomingEventsIds = upcomingEvents.map((event) => event.id);
  const ongoingEventsIds = ongoingEvents.map((event) => event.id);
  const pastEventsIds = pastEvents.map((event) => event.id);

  const upcomingEventsURL = useEncodedURL(upcomingEventsIds);
  const ongoingEventsURL = useEncodedURL(ongoingEventsIds);
  const pastEventsURL = useEncodedURL(pastEventsIds);

  const eventCountsByMonth = useEventCountByMonth(
    pastEvents,
    ongoingEvents,
    upcomingEvents
  );

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
          width: "100%",
          marginLeft: "0px",
          backgroundColor: "#FFF",
          borderRadius: "1rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <Grid item xs={12} md={4}>
          <EventCard
            id="upcoming"
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
            id="ongoing"
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
            id="past"
            title="ĐÃ KẾT THÚC"
            color="#FFE2E5"
            icon={<EventBusyIcon />}
            iconBgColor="#FA5A7D"
            numberOfEvents={pastEvents.length}
            link={pastEventsURL}
          />
        </Grid>
      </Grid>
      <Box
        mt={4}
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "1rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <BarChart
          title="Thống kê số lượng sự kiện theo tháng"
          eventCountsByMonth={eventCountsByMonth}
        />
      </Box>

      <Box
        mt={4}
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "1rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <TopAgenciesChart events={events} agencies={agencies} />
      </Box>
    </>
  );
};

export default Dashboard;
