import React from "react";
import { dmSans } from "../fonts";

export default function Newsletter() {
  return (
    <div className="pt-[60px] pb-[60px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-[120px] items-center">
          <div>
            <h3
              className={
                dmSans.className +
                " text-[40px] font-bold leading-[52px] text-[#23262F]"
              }
            >
              Subscribe to our Newsletter
            </h3>
            <p className={dmSans.className + " text-[24px] mt-[6px]"}>
              Receive our weekly newsletter & updates with new events from your
              favourite organizers & venues.
            </p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-4 rounded-l-[10px] border border-[#3772FF]  focus:outline-none text-[20px]"
            />
            <button
              className={
                dmSans.className +
                " text-white bg-[#3772FF] rounded-r-[10px] text-[24px] px-[34px] py-[24px]"
              }
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
