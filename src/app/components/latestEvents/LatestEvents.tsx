"use client";
import { dmSans } from "@/app/fonts";
import React, { useState } from "react";
import EventCard from "./EventCard";
import Image from "next/image";

import rightArrow from "../../../../public/rightArrow.svg";
import { Event } from "@/app/types";
import { createClient } from "@/utils/supabase/client";
import { Empty } from "antd";
import { useRouter } from "next/navigation";

export default function LatestEvents({
  allEvents,
}: {
  allEvents: Event[] | null;
}) {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>(allEvents ?? []);
  const [selectedType, setSelectedType] = useState<string>("");

  const fetchEvent = async (type: string) => {
    const supabase = createClient();

    if (type === "free") {
      const { data: eventsResponse } = await supabase
        .from("events")
        .select(
          "*,event_categories(name),eventOrganizations(name),venues(name,zone_ticket_category(name,price))"
        )
        .eq("isActive", true)
        .eq("isFree", true)
        .limit(6);
      if (eventsResponse) {
        setEvents(eventsResponse || []);
        setSelectedType(type);
      }
    } else if (type === "today") {
      const { data: eventsResponse } = await supabase
        .from("events")
        .select(
          "*,event_categories(name),eventOrganizations(name),venues(name,zone_ticket_category(name,price))"
        )
        .eq("isActive", true)
        .eq("date", new Date().toISOString())
        .limit(6);
      if (eventsResponse) {
        setEvents(eventsResponse || []);
        setSelectedType(type);
      }
    } else if (type === "tomorrow") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      const { data: eventsResponse } = await supabase
        .from("events")
        .select(
          "*,event_categories(name),eventOrganizations(name),venues(name,zone_ticket_category(name,price))"
        )
        .eq("isActive", true)
        .eq("date", tomorrow.toISOString())
        .limit(6);
      if (eventsResponse) {
        setEvents(eventsResponse || []);
        setSelectedType(type);
      }
    } else if (type === "weekend") {
      const today = new Date();
      const saturday = new Date();
      const sunday = new Date();
      saturday.setDate(today.getDate() + ((6 - today.getDay()) % 7));
      sunday.setDate(today.getDate() + ((7 - today.getDay()) % 7));
      const { data: eventsResponse } = await supabase
        .from("events")
        .select(
          "*,event_categories(name),eventOrganizations(name),venues(name,zone_ticket_category(name,price))"
        )
        .eq("isActive", true)
        .gte("date", saturday.toISOString())
        .lte("date", sunday.toISOString())
        .limit(6);
      if (eventsResponse) {
        setEvents(eventsResponse || []);
        setSelectedType(type);
      }
    } else {
      const { data: eventsResponse } = await supabase
        .from("events")
        .select(
          "*,event_categories(name),eventOrganizations(name),venues(name,zone_ticket_category(name,price))"
        )
        .eq("isActive", true)

        .limit(6);
      if (eventsResponse) {
        setEvents(eventsResponse || []);
        setSelectedType(type);
      }
    }
  };

  const chips = [
    { name: "All", type: "" },
    { name: "Today", type: "today" },
    { name: "Tomorrow", type: "tomorrow" },
    { name: "This Weekend", type: "weekend" },
    { name: "Free", type: "free" },
  ];

  return (
    <div className="pt-[70px]">
      <div className="container">
        <h3
          className={dmSans.className + " text-[40px] leading-[48px] font-bold"}
        >
          Latest Events
        </h3>
        <div className="my-[30px] flex items-center gap-[20px]">
          {chips.map((chip, index) => (
            <div
              onClick={() => fetchEvent(chip.type)}
              key={index}
              className={
                dmSans.className +
                " text-[20px] font-semibold px-6 py-2 rounded-[50px] border-[#6F6F6F] border cursor-pointer " +
                (selectedType === chip.type
                  ? " text-white bg-[#3772FF]"
                  : "text-[#6F6F6F]")
              }
            >
              {chip.name}
            </div>
          ))}
        </div>

        {events?.length > 0 ? (
          <div className="grid grid-cols-3 gap-5">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <Empty description="No events found" />
        )}
        {events?.length > 0 && (
          <button
            onClick={() =>
              selectedType
                ? router.push(`/events?type=${selectedType}`)
                : router.push(`/events`)
            }
            className={
              dmSans.className +
              " bg-[#3772FF] text-white rounded-[8px] px-7 py-4 text-sm mx-auto block mt-[30px]"
            }
          >
            <div className="flex">
              <p>View all</p>
              <Image
                src={rightArrow}
                alt=""
                className="ml-2"
                height={16}
                width={16}
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
