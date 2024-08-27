import EventCard from "@/app/components/latestEvents/EventCard";
import { dmSans } from "@/app/fonts";
import React from "react";

export default function OtherEvents() {
  return (
    <div className="container">
      <h3
        className={
          dmSans.className +
          " font-bold text-2xl leading-[48px] text-[#23262F] mb-6"
        }
      >
        Other events you may like
      </h3>
      <div className="grid grid-cols-3 gap-5 mb-20">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
