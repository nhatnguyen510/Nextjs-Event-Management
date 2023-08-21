import { Event } from "../types/Event";

const useFilterDate = (
  start: Date | null,
  end: Date | null,
  events: Event[]
) => {
  const filterDateEvents = events?.filter((event: Event) => {
    const eventStartDate = new Date(event.date);
    const eventEndDate = new Date(event.endDate);

    if (start && end) {
      return eventStartDate >= start && eventEndDate <= end;
    } else if (start) {
      return eventStartDate >= start;
    } else if (end) {
      return eventEndDate <= end;
    }
  });

  return filterDateEvents;
};

export default useFilterDate;
