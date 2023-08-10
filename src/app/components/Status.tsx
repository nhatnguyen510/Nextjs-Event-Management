import React from "react";
import { Box } from "@mui/material";

const getColorFromStatus = (status: string) =>
  status === "ongoing"
    ? "#3CD856"
    : status === "upcoming"
    ? "#FF947A"
    : status === "past"
    ? "#FA5A7D"
    : "#000";

export const Status = ({ status }: { status: string }) => (
  <Box
    marginLeft={0.5}
    width={10}
    height={10}
    display="inline-block"
    borderRadius="5px"
    bgcolor={getColorFromStatus(status)}
    component="span"
  />
);
