import React from "react";
import {
  TopToolbar,
  CreateButton,
  ExportButton,
  SortButton,
} from "react-admin";

export const EventListActions: React.FC = ({}) => {
  return (
    <>
      <TopToolbar>
        <SortButton fields={["date", "endDate", "attendees.length"]} />
        <CreateButton />
        <ExportButton />
      </TopToolbar>
    </>
  );
};
