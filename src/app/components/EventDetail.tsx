import React from "react";
import { Card } from "antd";

interface EventDetailProps {
  eventId: number;
}

export const EventDetail: React.FC<EventDetailProps> = ({ eventId }) => {
  // Fetch event details based on the eventId from an API or other data source
  const event = {
    id: eventId,
    title: "Event Title",
    description: "Event Description",
    date: "2023-07-12",
    organizer: "John Doe",
    location: "Event Location",
  };

  return (
    <Card title={event.title}>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Organizer: {event.organizer}</p>
      <p>Location: {event.location}</p>
    </Card>
  );
};
