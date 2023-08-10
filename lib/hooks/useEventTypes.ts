import { useEffect, useState } from "react";
import { Event } from "../types/Event";

const useEventTypes = (events: any) => {
  const [ongoingEvents, setOngoingEvents] = useState<Event[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const currentDate = new Date();

    const ongoing = events?.filter((event: any) => {
      const eventDate = new Date(event.date);
      return eventDate <= currentDate && currentDate <= new Date(event.endDate);
    });

    const upcoming = events?.filter((event: any) => {
      const eventDate = new Date(event.date);
      return eventDate > currentDate;
    });

    const past = events?.filter((event: any) => {
      const eventEndDate = new Date(event.endDate);
      return eventEndDate < currentDate;
    });

    setOngoingEvents(ongoing);
    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, [events]);

  return { ongoingEvents, upcomingEvents, pastEvents };
};

export default useEventTypes;
