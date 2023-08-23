import { Event } from "../types/types";

export const useEventCountByMonth = (
  pastEvents: Event[],
  upcomingEvents: Event[],
  ongoingEvents: Event[]
) => {
  // Prepare event counts by month
  const eventCountsByMonth: Record<
    string,
    { ongoing: number; upcoming: number; past: number }
  > = {};

  [...pastEvents, ...ongoingEvents, ...upcomingEvents].forEach((event) => {
    const eventDate = new Date(event.date);
    const monthYear = `${eventDate.getMonth() + 1}-${eventDate.getFullYear()}`;

    if (!eventCountsByMonth[monthYear]) {
      eventCountsByMonth[monthYear] = { ongoing: 0, upcoming: 0, past: 0 };
    }

    if (ongoingEvents.includes(event)) {
      eventCountsByMonth[monthYear].ongoing++;
    } else if (upcomingEvents.includes(event)) {
      eventCountsByMonth[monthYear].upcoming++;
    } else if (pastEvents.includes(event)) {
      eventCountsByMonth[monthYear].past++;
    }
  });

  return eventCountsByMonth;
};
