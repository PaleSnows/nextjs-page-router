import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/events/event-lists";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center"> loading....</p>;
  }
  const filteredYear = filteredData[0];
  const filterMonth = filteredData[1];
console.log(filterMonth);
  const numYear = +filteredYear;
  const numMonth = +filterMonth;
  console.log(numYear);
  console.log(numMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) 
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values! </p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show all Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the choose filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show all Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <ResultsTitle date={date}>
      <EventList items={filteredEvents} />
    </ResultsTitle>
  );
};

export default FilteredEventsPage;
