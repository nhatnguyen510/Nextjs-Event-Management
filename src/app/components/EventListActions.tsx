import React from "react";
import {
  TopToolbar,
  CreateButton,
  ExportButton,
  SortButton,
  FilterButton,
} from "react-admin";
import { Button, Box } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Actions: React.FC = ({}) => {
  return (
    <>
      <TopToolbar
        sx={{
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <CreateButton
          label="Thêm mới"
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        />
        <ExportButton label="Xuất file" />
      </TopToolbar>
    </>
  );
};
