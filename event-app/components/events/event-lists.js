import React from "react";
import EventItem from "./event-items";
import classes from './event-lists.module.css'

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          date={event.date}
          image={event.image}
          title={event.title}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
