"use client";

import React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import { EventListRow } from "@/app/components/EventListRow";
import { EventListCreate } from "@/app/components/EventListCreate";
import fakeEvents from "@/../fake-events.json";
import fakeDataProvider from "ra-data-fakerest";
import EventIcon from "@mui/icons-material/Event";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AdminLayout from "@/app/components/AdminLayout";
import Dashboard from "@/app/components/Dashboard";
import AgencyListRow from "@/app/components/AgencyListRow";
import { AgencyListCreate } from "@/app/components/AgencyListCreate";
import { AgencyShow } from "@/app/components/AgencyShow";
import { EventShow } from "@/app/components/EventShow";

const dataProvider = fakeDataProvider(fakeEvents);

interface AdminProps {}

const AdminDashboard: React.FC<AdminProps> = (props) => {
  if (typeof document === "undefined") {
    return null;
  }

  return (
    <>
      <Admin
        dataProvider={dataProvider}
        layout={AdminLayout}
        dashboard={Dashboard}
      >
        <Resource
          name="events"
          list={EventListRow}
          edit={EditGuesser}
          create={EventListCreate}
          show={EventShow}
          icon={EventIcon}
        />
        <Resource
          name="agencies"
          list={AgencyListRow}
          edit={EditGuesser}
          create={AgencyListCreate}
          show={AgencyShow}
          icon={PersonOutlineIcon}
        />
      </Admin>
    </>
  );
};

export default AdminDashboard;
