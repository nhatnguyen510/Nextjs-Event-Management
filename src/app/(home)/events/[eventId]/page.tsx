import React from "react";

interface EventDetailProps {
  params: { eventId: string };
}

const EventDetail: React.FC<EventDetailProps> = ({ params: { eventId } }) => {
  return (
    <>
      <div className="min-h-screen">{`This is event ${eventId}`}</div>
    </>
  );
};

export default EventDetail;
