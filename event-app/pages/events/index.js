import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-lists";
import EventsSearch from "../../components/events/events-serach";
import { useRouter } from "next/router";

const AllEventPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  function findEventHandlers(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  //
  return (
    <div>
      {/* we just point to findeventhandler rather than executing it */}
      <EventsSearch onSearch={findEventHandlers} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventPage;
