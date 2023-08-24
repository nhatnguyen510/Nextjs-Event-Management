"use client";

import React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import { EventListRow } from "@/app/components/pages/events/EventListRow";
import fakeEvents from "@/../fake-events.json";
import fakeDataProvider from "ra-data-fakerest";
import EventIcon from "@mui/icons-material/Event";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AdminLayout from "@/app/components/layout/AdminLayout";
import Dashboard from "@/app/components/pages/Dashboard";
import AgencyListRow from "@/app/components/pages/agencies/AgencyListRow";
import { AgencyShow } from "@/app/components/pages/agencies/AgencyShow";
import { EventShow } from "@/app/components/pages/events/EventShow";
import { EventEdit } from "@/app/components/pages/events/EventEdit";
import { AgencyEdit } from "@/app/components/pages/agencies/AgencyEdit";

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
          edit={EventEdit}
          show={EventShow}
          icon={EventIcon}
        />
        <Resource
          name="agencies"
          list={AgencyListRow}
          edit={AgencyEdit}
          show={AgencyShow}
          icon={PersonOutlineIcon}
        />
      </Admin>
    </>
  );
};

export default AdminDashboard;
