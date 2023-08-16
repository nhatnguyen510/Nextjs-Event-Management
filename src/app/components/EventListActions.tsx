import React from "react";
import {
  TopToolbar,
  CreateButton,
  ExportButton,
  SortButton,
  FilterButton,
} from "react-admin";

export const Actions: React.FC = ({}) => {
  return (
    <>
      <TopToolbar>
        <CreateButton label="Thêm mới" />
        <ExportButton label="Xuất file" />
      </TopToolbar>
    </>
  );
};
