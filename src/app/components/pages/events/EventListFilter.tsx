import React, { useMemo, useState } from "react";
import { useGetList } from "react-admin";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  OutlinedInput,
  Chip,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import useEventTypes from "@/../lib/hooks/useEventTypes";
import { Status } from "../../Status";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import filterDate from "@/../lib/hooks/useFilterDate";
import { Event } from "@/../lib/types/types";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import { eventTypesStore } from "@/../lib/zustand/EventTypesStore";
import useEncodedURL from "@/../lib/hooks/useEncodedURL";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const choices = [
  {
    id: "upcoming",
    name: "Sắp diễn ra",
  },
  {
    id: "ongoing",
    name: "Đang diễn ra",
  },
  {
    id: "past",
    name: "Đã kết thúc",
  },
];

function getStyles(event: string, events: readonly string[], theme: Theme) {
  return {
    fontWeight:
      events.indexOf(event) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const EventListAsideFilter: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useGetList("events");
  const theme = useTheme();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const eventTypes = eventTypesStore((state) => state.eventTypes);
  const setEventTypes = eventTypesStore((state) => state.setEventTypes);

  const [searchedEvents, setSearchedEvents] = useState<Event[]>([]);
  const { upcomingEvents, ongoingEvents, pastEvents } = useEventTypes(
    data as Event[]
  );

  const eventTypesData = useMemo(() => {
    // this is the event result if users choose event type
    const result = [];
    if (eventTypes?.includes("upcoming") && upcomingEvents) {
      result.push(...upcomingEvents);
    }
    if (eventTypes?.includes("ongoing") && ongoingEvents) {
      result.push(...ongoingEvents);
    }
    if (eventTypes?.includes("past") && pastEvents) {
      result.push(...pastEvents);
    }

    return result;
  }, [eventTypes, upcomingEvents, ongoingEvents, pastEvents]);

  const filterDateEvents = useMemo(() => {
    if (startDate && endDate) {
      return filterDate(startDate, endDate, data as any);
    } else {
      return [];
    }
  }, [startDate, endDate, data]);

  const result = useMemo(() => {
    const result1 = [...searchedEvents];
    const result2 = [...eventTypesData];
    const result3 = [...filterDateEvents];

    console.log({ result1, result2, result3 });

    if (result1.length > 0 && result2.length > 0 && result3.length > 0) {
      return _.intersection(result1, result2, result3);
    } else if (result1.length > 0 && result2.length > 0) {
      return _.intersection(result1, result2);
    } else if (result1.length > 0 && result3.length > 0) {
      return _.intersection(result1, result3);
    } else if (result2.length > 0 && result3.length > 0) {
      return _.intersection(result2, result3);
    } else if (result1.length > 0) {
      return result1;
    } else if (result2.length > 0) {
      return result2;
    } else if (result3.length > 0) {
      return result3;
    } else {
      return data;
    }
  }, [searchedEvents, eventTypesData, filterDateEvents]);

  const encodedURL = useEncodedURL(
    result?.map((event: Event) => event.id) as string[]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const searchedEvents = _.filter(data, (event) => {
      return event.title.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedEvents(searchedEvents);
  };

  const handleEventTypesChange = (
    event: SelectChangeEvent<typeof eventTypes>
  ) => {
    const {
      target: { value },
    } = event;
    setEventTypes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      navigate(`/events${encodedURL}`);
    }
  };

  console.log({ eventTypes });

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        sx={{
          height: "40px",
        }}
      >
        <FormControl sx={{ width: 400, backgroundColor: "#FFF" }}>
          <OutlinedInput
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tìm kiếm"
            inputProps={{ "aria-label": "Tìm kiếm" }}
            startAdornment={<SearchIcon />}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </FormControl>

        <FormControl sx={{ width: 400, backgroundColor: "#FFF" }}>
          <Select
            multiple
            displayEmpty
            value={eventTypes}
            onChange={handleEventTypesChange}
            input={<OutlinedInput />}
            renderValue={(selected: any) => {
              if (selected.length == 0) {
                return (
                  <Typography
                    sx={{
                      opacity: 0.6,
                    }}
                  >
                    Chọn trạng thái
                  </Typography>
                );
              }

              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value: any) => {
                    console.log({ value });

                    return (
                      <Chip
                        key={value}
                        label={
                          choices.find((choice) => choice.id === value)?.name
                        }
                        icon={<Status status={value} />}
                      />
                    );
                  })}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {choices.map((choice) => (
              <MenuItem
                key={choice.id}
                value={choice.id}
                style={getStyles(choice.id, eventTypes, theme)}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "8em",
                  }}
                >
                  <Typography fontSize={14}>{choice.name}</Typography>
                  <Status status={choice.id} />
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            key="start_date"
            label={<span style={{ opacity: 0.6 }}>Ngày bắt đầu</span>}
            value={startDate}
            onChange={handleStartDateChange}
            inputFormat="dd/MM/yyyy"
            renderInput={(params) => (
              <TextField
                variant="outlined"
                {...params}
                sx={{
                  width: "150px",
                }}
              />
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            key="end_date"
            label={<span style={{ opacity: 0.6 }}>Ngày kết thúc</span>}
            value={endDate}
            onChange={handleEndDateChange}
            inputFormat="dd/MM/yyyy"
            renderInput={(params) => (
              <TextField
                variant="outlined"
                {...params}
                sx={{
                  width: "150px",
                }}
              />
            )}
          />
        </LocalizationProvider>
        <Box
          key="filter"
          component={Link}
          to={encodedURL}
          sx={{
            height: "100%",
            marginTop: "8px",
            marginBottom: "4px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              height: "100%",
            }}
          >
            Tìm kiếm
          </Button>
        </Box>
        {/* 
          sx={{
            height: "40px",
            width: "100px",
            padding: 0,
            "& .MuiButton-root": {
              height: "100%",
              borderRadius: "5px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "14px",
            },
            "& .MuiListItemButton-root": {
              padding: 0,
              height: "100%",
            },
            "& .RaFilterListItem-listItemButton": {
              backgroundColor: "#fff",
            },
            "& .RaFilterListItem-listItemButton:hover": {
              backgroundColor: "none",
            },
            "& .MuiListItemSecondaryAction-root": {
              display: "none",
            },
          }}
        */}
      </Box>
    </Box>
  );
};
