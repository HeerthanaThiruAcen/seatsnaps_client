import { dmSans } from "@/app/fonts";
import React from "react";
import EventCard from "./EventCard";
import Image from "next/image";

import rightArrow from "../../../../public/rightArrow.svg";

export default function LatestEvents() {
  const chips = [
    { name: "All" },
    { name: "Today" },
    { name: "Tomorrow" },
    { name: "This Weekend" },
    { name: "Free" },
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
              key={index}
              className={
                dmSans.className +
                " text-[#6F6F6F] text-[20px] font-semibold px-6 py-2 rounded-[50px] border-[#6F6F6F] border"
              }
            >
              {chip.name}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-5">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <button
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
      </div>
    </div>
  );
}
