import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-admin";
import { Link as RouterLink } from "react-router-dom";

interface EventCardProps {
  icon: any;
  numberOfEvents: number;
  title: string;
  color: string;
  iconBgColor: string;
  link: any;
}

const EventCard: React.FC<EventCardProps> = ({
  icon,
  numberOfEvents,
  title,
  color,
  iconBgColor,
  link,
}) => {
  return (
    <>
      <Link to={link} component={RouterLink} underline="none">
        <Card
          sx={{
            backgroundColor: color,
            color: "#000",
            padding: "4px",
            borderRadius: "1rem",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            cursor: "pointer",
            height: 240,
            maxWidth: 342,
          }}
        >
          <CardActionArea>
            <CardContent>
              <Grid
                container
                direction="column"
                justifyContent="center"
                gap={2}
              >
                <Avatar sx={{ bgcolor: iconBgColor }}>{icon}</Avatar>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  {title}
                </Typography>
              </Grid>
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
