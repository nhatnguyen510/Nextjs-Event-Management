import React, { useState } from "react";
import { useGetList } from "react-admin";
import { Box, FormControl, OutlinedInput } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Event, Agency } from "@/../lib/types/types";
import _ from "lodash";
import useEncodedURL from "@/../lib/hooks/useEncodedURL";
import { useNavigate } from "react-router-dom";

export const AgencyListAsideFilter: React.FC = () => {
  const { data } = useGetList<Agency>("agencies");
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchedAgencies, setSearchedAgencies] = useState<Agency[]>([]);

  const encodedURL = useEncodedURL(searchedAgencies.map((event) => event.id));

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const result = _.filter(data, (agency) => {
      return (
        _.includes(_.lowerCase(agency.name), _.lowerCase(value)) ||
        _.includes(_.lowerCase(agency.address), _.lowerCase(value)) ||
        _.includes(_.lowerCase(agency.city), _.lowerCase(value)) ||
        _.includes(_.lowerCase(agency.country), _.lowerCase(value)) ||
        _.includes(_.lowerCase(agency.phone), _.lowerCase(value)) ||
        _.includes(_.lowerCase(agency.email), _.lowerCase(value)) ||
        _.includes(_.lowerCase(agency.website), _.lowerCase(value))
      );
    });
    setSearchedAgencies(result || data);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      navigate(`/agencies${encodedURL}`);
    }
  };

  console.log({ searchedAgencies, encodedURL });

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
          flex: 1,
        }}
      >
        <FormControl sx={{ width: "100%", backgroundColor: "#FFF" }}>
          <OutlinedInput
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tìm kiếm"
            inputProps={{ "aria-label": "Tìm kiếm" }}
            startAdornment={<SearchIcon />}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </FormControl>

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
