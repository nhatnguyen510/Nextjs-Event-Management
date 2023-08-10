import React from "react";
import {
  FilterList,
  FilterLiveSearch,
  FilterListItem,
  useGetList,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useEventTypes from "../../../lib/hooks/useEventTypes";
import { Status } from "./Status";

export const EventListAsideFilter: React.FC = () => {
  const { data } = useGetList("events");

  const { upcomingEvents, ongoingEvents, pastEvents } = useEventTypes(data);

  console.log({ upcomingEvents, ongoingEvents, pastEvents });

  return (
    <Box width="13em" minWidth="13em" order={-1} mr={2} mt={7}>
      <FilterLiveSearch
        sx={{
          display: "block",
          "& .MuiFilledInput-root": { width: "100%" },
        }}
        source="title"
        placeholder="Search by title"
      />
      <FilterList label="Events" icon={<AccessTimeIcon />}>
        <FilterListItem
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Ongoing <Status status="ongoing" />
            </Box>
          }
          value={{ id: ongoingEvents?.map((event: any) => event.id) }}
        />
        <FilterListItem
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Upcoming <Status status="upcoming" />
            </Box>
          }
          value={{ id: upcomingEvents?.map((event: any) => event.id) }}
        />
        <FilterListItem
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Past <Status status="past" />
            </Box>
          }
          value={{ id: pastEvents?.map((event: any) => event.id) }}
        />
      </FilterList>
    </Box>
  );
};
