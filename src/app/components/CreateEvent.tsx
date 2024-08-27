import React from "react";
import { dmSans } from "../fonts";
import createEvent from "../../../public/create-event.svg";
import Image from "next/image";

export default function CreateEvent() {
  return (
    <div className="py-[70px]">
      <div className="container">
        <div className=" bg-[#3772FF] rounded-[32px] text-white  py-14 ">
          <h3
            className={
              dmSans.className +
              " text-[40px] leading-[52px] font-bold text-center mb-[14px]"
            }
          >
            Create an event with Seatsnaps
          </h3>
          <p
            className={
              dmSans.className +
              " text-[24px] leading-[31px]  text-center max-w-[630px] mx-auto mb-6"
            }
          >
            Got a show, event, activity or a great experience? Partner with us &
            get listed on Seatsnaps
          </p>
          <button
            className={
              dmSans.className +
              " text-[#3772FF] bg-white rounded-[8px] px-7 py-4 text-sm mx-auto block"
            }
          >
            <div className="flex">
              <Image
                src={createEvent}
                alt=""
                className="mr-2"
                height={16}
                width={16}
              />
              <p>Create Event</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
