import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  CardActionArea,
  Container,
} from "@mui/material";
import { Link } from "react-admin";
import { Link as RouterLink } from "react-router-dom";
import { eventTypesStore } from "../../../lib/zustand/EventTypesStore";

interface EventCardProps {
  id: string;
  icon: any;
  numberOfEvents: number;
  title: string;
  color: string;
  iconBgColor: string;
  link: any;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  icon,
  numberOfEvents,
  title,
  color,
  iconBgColor,
  link,
}) => {
  const setEventTypes = eventTypesStore((state) => state.setEventTypes);

  const handleClick = () => {
    console.log("clicked");
    setEventTypes([id]);
  };

  return (
    <>
      <Link to={`/events${link}`} component={RouterLink} underline="none">
        <Card
          sx={{
            backgroundColor: color,
            color: "#000",
            padding: "4px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            cursor: "pointer",
            height: {
              xs: "240px",
              xl: "300px",
            },
          }}
        >
          <CardActionArea
            sx={{
              height: "100%",
            }}
            onClick={handleClick}
          >
            <CardContent>
              <Container>
                <Avatar sx={{ bgcolor: iconBgColor }}>{icon}</Avatar>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    mt: 2,
                  }}
                >
                  {title}
                </Typography>
              </Container>
              <Typography
                variant="h2"
                mt={2}
                sx={{
                  fontSize: "56px",
                  textAlign: "right",
                }}
              >
                {numberOfEvents}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};

export default EventCard;
