import EventCard from "@/app/components/latestEvents/EventCard";
import { dmSans } from "@/app/fonts";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function OtherEvents() {
  const supabase = createClient();

  const { data: eventsResponse } = await supabase
    .from("events")
    .select("*")
    .eq("isActive", true)
    .limit(3);

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
        {eventsResponse?.map((item) => (
          <div key={item.id}>
            <EventCard event={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
