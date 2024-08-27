import { dmSans } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Tags from "./Tags";

export default function EventInfo() {
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
            Social Activities
          </p>
          <p>Saturday, 2 December 2023</p>
          <div>&bull;</div>
          <p>6:30 PM - 9:30 PM</p>
        </div>
        <h1
          className={
            dmSans.className +
            " font-bold text-[53px] leading-[69px] text-[#2D2C3C]"
          }
        >
          Lakeside Camping at Pawna 2023
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
              City Youth Movement
            </h4>
            <button
              className={
                dmSans.className +
                " bg-[#3772FF] text-white rounded-[8px] px-7 py-4 text-sm  block "
              }
            >
              <p>Create Events</p>
            </button>
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
          Get ready to kick off the Christmas season in Mumbai with SOUND OF
          CHRISTMAS - your favourite LIVE Christmas concert! City Youth Movement
          invites you to the 4th edition of our annual Christmas festivities -
          by the youth and for the youth! Feat. your favourite worship leaders,
          carols, quizzes and some exciting surprises! Bring your family and
          friends and sing along your favourite Christmas carols on the 2nd of
          December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra
          West. Book your tickets now!
        </p>
      </div>
      <Tags />
    </div>
  );
}
