import { Event } from "../types/types";

const useEventTypes = (events: Event[]) => {
  const currentDate = new Date();

  const ongoingEvents = events
    ?.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate <= currentDate && currentDate <= new Date(event.endDate);
    })
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate.getTime() - bDate.getTime();
    });

  const upcomingEvents = events
    ?.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate > currentDate;
    })
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate.getTime() - bDate.getTime();
    });

  const pastEvents = events
    ?.filter((event) => {
      const eventEndDate = new Date(event.endDate);
      return eventEndDate < currentDate;
    })
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate.getTime() - bDate.getTime();
    });

  return { ongoingEvents, upcomingEvents, pastEvents };
};

export default useEventTypes;
