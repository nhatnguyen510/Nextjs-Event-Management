"use client";

import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  DataProvider,
} from "react-admin";
import { EventListRow } from "@/app/components/EventListRow";
import { EventListCreate } from "@/app/components/EventListCreate";
import fakeEvents from "@/../fake-events.json";
import fakeDataProvider from "ra-data-fakerest";
import AttendeeListRow from "@/app/components/AttendeeListRow";
import EventIcon from "@mui/icons-material/Event";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AdminLayout from "@/app/components/AdminLayout";
import dynamic from "next/dynamic";

const dataProvider = fakeDataProvider(fakeEvents);

interface AdminProps {}

const AdminDashboard: React.FC<AdminProps> = (props) => {
  if (typeof document === "undefined") {
    return null;
  }

  return (
    <>
      <Admin dataProvider={dataProvider} layout={AdminLayout}>
        <Resource
          name="events"
          list={EventListRow}
          edit={EditGuesser}
          create={EventListCreate}
          icon={EventIcon}
        />
        <Resource
          name="attendees"
          list={AttendeeListRow}
          edit={EditGuesser}
          icon={PersonOutlineIcon}
        />
      </Admin>
    </>
  );
};

export default AdminDashboard;
