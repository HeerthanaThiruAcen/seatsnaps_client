"use client";
import { dmSans } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Tags from "./Tags";
import { Event } from "@/app/types";
import dayjs from "dayjs";

export default function EventInfo({ eventData }: { eventData: Event }) {
  console.log(eventData);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div
          className={
            dmSans.className +
            " flex items-center gap-8 font-medium text-[#929292] mb-4"
          }
        >
          <p className="text-[#3772FF] px-[10px] py-[5px] bg-[#3772FF33] rounded-[6px]">
            {eventData?.event_categories?.name}
          </p>
          <p>{dayjs(eventData?.date).format("dddd, D MMMM YYYY")}</p>
          <div>&bull;</div>
          <p>
            {eventData?.endTime
              ? `${dayjs(eventData?.startTime, "HH:mm:ss").format(
                  "h:mm A"
                )} - ${dayjs(eventData?.endTime, "HH:mm:ss").format("h:mm A")}`
              : dayjs(eventData?.startTime, "HH:mm:ss").format("h:mm A")}
          </p>
        </div>
        <h1
          className={
            dmSans.className +
            " font-bold text-[53px] leading-[69px] text-[#2D2C3C]"
          }
        >
          {eventData?.name}
        </h1>
        <p
          className={
            dmSans.className + "  text-[18px] font-bold text-[#4539B4] mt-4"
          }
        >
          + Add to Calendar
        </p>
      </div>
      <div>
        <h3
          className={
            dmSans.className + "  font-bold text-[24px] text-[#2D2C3C] mb-6"
          }
        >
          Hosted by
        </h3>
        <div className="flex items-center gap-5">
          <Image height={87} width={87} alt="" src="/host.svg" />
          <div>
            <h4
              className={
                dmSans.className + "  font-bold text-[18px] text-[#2D2C3C] mb-2"
              }
            >
              {eventData?.eventOrganizations?.name}
            </h4>
            {/* <button
              className={
                dmSans.className +
                " bg-[#3772FF] text-white rounded-[8px] px-7 py-4 text-sm  block "
              }
            >
              <p>Create Events</p>
            </button> */}
            <p>{eventData?.contactPhone}</p>
          </div>
        </div>
      </div>
      <div>
        <h3
          className={
            dmSans.className + "  font-bold text-[24px] text-[#2D2C3C] mb-6"
          }
        >
          Event Description
        </h3>
        <p className={dmSans.className + " text-[#5A5A5A]"}>
          {eventData?.description}
        </p>
      </div>
      <Tags />
    </div>
  );
}
