import React, { useState } from "react";
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
    <Box
      width="100%"
      minWidth="13em"
      order={-1}
      mr={2}
      mt={2}
      flex={1}
      sx={{
        backgroundColor: "#FFF",
        borderRadius: "5px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      <FilterLiveSearch
        sx={{
          display: "block",
          "& .MuiFilledInput-root": { width: "100%" },
        }}
        source="title"
        placeholder="Search by title"
      />
      <FilterList
        label="Events"
        icon={<AccessTimeIcon />}
        sx={{
          display: "flex",
          justifyContent: "right",
          gap: "1em",
          alignItems: "center",
          "& .MuiList-root": {
            display: "flex",
          },
          "& .MuiBox-root": {
            mt: 0,
          },

          "& .Mui-selected": {
            backgroundColor: "rgba(25, 118, 210, 0.3) !important",
          },
        }}
      >
        <FilterListItem
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "8em",
              }}
            >
              <Typography fontSize={14}>Đang diễn ra</Typography>
              <Status status="ongoing" />
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
                width: "8em",
              }}
            >
              <Typography fontSize={14}>Sắp diễn ra</Typography>
              <Status status="upcoming" />
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
                width: "8em",
              }}
            >
              <Typography fontSize={14}>Đã kết thúc</Typography>
              <Status status="past" />
            </Box>
          }
          value={{ id: pastEvents?.map((event: any) => event.id) }}
        />
      </FilterList>
    </Box>
  );
};
