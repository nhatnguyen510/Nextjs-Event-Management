import {
  Show,
  TextField,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  Datagrid,
  useGetRecordId,
} from "react-admin";
import React from "react";
import { useGetList } from "react-admin";
import useEventTypes from "../../../lib/hooks/useEventTypes";

interface AgencyShowProps {}

export const AgencyShow: React.FC<AgencyShowProps> = (props) => {
  const recordId = useGetRecordId();

  const { data } = useGetList("events", {
    filter: { agency: recordId },
  });
  const { upcomingEvents, ongoingEvents, pastEvents } = useEventTypes(data);
  console.log({ recordId });
  console.log({ data });
  console.log({ upcomingEvents, ongoingEvents, pastEvents });
  return (
    <>
      <Show>
        <TextField source="name" variant="h5" component="div" m={2} />
        <TabbedShowLayout>
          <Tab label="Ongoing events" count={ongoingEvents.length}>
            {ongoingEvents.length > 0 ? (
              <ReferenceManyField
                label={false}
                reference="events"
                target="agency"
              >
                <Datagrid rowClick="show">
                  <TextField source="id" />
                  <TextField source="title" />
                  <TextField source="date" />
                  <TextField source="endDate" />
                  <TextField source="attendees.length" label="Attendees" />
                </Datagrid>
              </ReferenceManyField>
            ) : (
              <p>No ongoing events</p>
            )}
          </Tab>

          <Tab label="Upcoming events" count={upcomingEvents.length}>
            {upcomingEvents.length > 0 ? (
              <ReferenceManyField
                label={false}
                reference="events"
                target="agency"
              >
                <Datagrid rowClick="show">
                  <TextField source="id" />
                  <TextField source="title" />
                  <TextField source="date" />
                  <TextField source="endDate" />
                  <TextField source="attendees.length" label="Attendees" />
                </Datagrid>
              </ReferenceManyField>
            ) : (
              <p>No upcoming events</p>
            )}
          </Tab>

          <Tab label="Past events" count={pastEvents.length}>
            {pastEvents.length > 0 ? (
              <ReferenceManyField
                label={false}
                reference="events"
                target="agency"
              >
                <Datagrid rowClick="show">
                  <TextField source="id" />
                  <TextField source="title" />
                  <TextField source="date" />
                  <TextField source="endDate" />
                  <TextField source="attendees.length" label="Attendees" />
                </Datagrid>
              </ReferenceManyField>
            ) : (
              <p>No past events</p>
            )}
          </Tab>
        </TabbedShowLayout>
      </Show>
    </>
  );
};
