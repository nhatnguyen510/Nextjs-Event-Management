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
import { createDialogStore } from "@/../lib/zustand/EventDialogStore";

export const Actions: React.FC = ({}) => {
  const setIsDialogOpen = createDialogStore((state) => state.setIsDialogOpen);
  return (
    <>
      <TopToolbar
        sx={{
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
          onClick={() => setIsDialogOpen(true)}
        >
          Thêm mới
        </Button>
        <ExportButton label="Xuất file" />
      </TopToolbar>
    </>
  );
};
