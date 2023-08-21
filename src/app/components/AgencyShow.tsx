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
          <Tab label="Đang diễn ra" count={ongoingEvents?.length}>
            {ongoingEvents?.length > 0 ? (
              <ReferenceManyField
                label={false}
                reference="events"
                target="agency"
              >
                <Datagrid rowClick="show">
                  <TextField source="id" />
                  <TextField source="title" label="Tên sự kiện" />
                  <TextField source="date" label="Ngày bắt đầu" />
                  <TextField source="endDate" label="Ngày kết thúc" />
                  <TextField
                    source="attendees.length"
                    label="Số lượng tham gia"
                  />
                </Datagrid>
              </ReferenceManyField>
            ) : (
              <p>Chưa có sự kiện nào đang diễn ra.</p>
            )}
          </Tab>

          <Tab label="Sắp diễn ra" count={upcomingEvents?.length}>
            {upcomingEvents?.length > 0 ? (
              <ReferenceManyField
                label={false}
                reference="events"
                target="agency"
              >
                <Datagrid rowClick="show">
                  <TextField source="id" />
                  <TextField source="title" label="Tên sự kiện" />
                  <TextField source="date" label="Ngày bắt đầu" />
                  <TextField source="endDate" label="Ngày kết thúc" />
                  <TextField
                    source="attendees.length"
                    label="Số lượng tham gia"
                  />
                </Datagrid>
              </ReferenceManyField>
            ) : (
              <p>Chưa có sự kiện nào sắp diễn ra.</p>
            )}
          </Tab>

          <Tab label="Đã kết thúc" count={pastEvents?.length}>
            {pastEvents?.length > 0 ? (
              <ReferenceManyField
                label={false}
                reference="events"
                target="agency"
              >
                <Datagrid rowClick="show">
                  <TextField source="id" />
                  <TextField source="title" label="Tên sự kiện" />
                  <TextField source="date" label="Ngày bắt đầu" />
                  <TextField source="endDate" label="Ngày kết thúc" />
                  <TextField
                    source="attendees.length"
                    label="Số lượng tham gia"
                  />
                </Datagrid>
              </ReferenceManyField>
            ) : (
              <p>Chưa có sự kiện nào kết thúc.</p>
            )}
          </Tab>
        </TabbedShowLayout>
      </Show>
    </>
  );
};
