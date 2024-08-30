import { dmSans } from "@/app/fonts";
import React from "react";
import ticket from "../../../../../../public/price.svg";
import ticketGray from "../../../../../../public/ticket-gray.svg";
import dateIcon from "../../../../../../public/dateIcon.svg";
import timeIcon from "../../../../../../public/timeIcon.svg";
import locationIcon from "../../../../../../public/locationIcon.svg";
import Image from "next/image";
import ActionButtons from "./ActionButtons";

export default function TicketInfo() {
  return (
    <div className="flex flex-col gap-6 sticky top-0">
      <ActionButtons />
      <div>
        <h3
          className={
            dmSans.className + "  font-bold text-[24px] text-[#2D2C3C] mb-6"
          }
        >
          Ticket Information
        </h3>
        <div className="flex flex-col gap-6">
          <div className="px-3 py-4 border-[#DFDFDF] border rounded-[4px]">
            <div className="flex item-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Image src={ticket} alt="" height={14} width={14} />
                <p className={dmSans.className + " text-sm text-[#2D2C3C]"}>
                  Standard Ticket
                </p>
              </div>
              <p className={dmSans.className + " text-sm text-[#8B8B8B]"}>
                Sales end on Sep 20, 2024
              </p>
            </div>
            <div className="flex item-center justify-between">
              <p
                className={
                  dmSans.className + " text-[18px] font-bold text-[#2D2C3C]"
                }
              >
                LKR 800
              </p>
              <div className="flex items-center gap-2">
                <Image src={ticketGray} alt="" height={12} width={12} />
                <p className={dmSans.className + " text-sm text-[#8B8B8B]"}>
                  05 AVAILABLE
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 py-4 border-[#DFDFDF] border rounded-[4px]">
            <div className="flex item-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Image src={ticket} alt="" height={14} width={14} />
                <p className={dmSans.className + " text-sm text-[#2D2C3C]"}>
                  Special Ticket
                </p>
              </div>
              <p className={dmSans.className + " text-sm text-[#8B8B8B]"}>
                Sales end on Sep 20, 2024
              </p>
            </div>
            <div className="flex item-center justify-between">
              <p
                className={
                  dmSans.className + " text-[18px] font-bold text-[#2D2C3C]"
                }
              >
                LKR 1200
              </p>
              <div className="flex items-center gap-2">
                <Image src={ticketGray} alt="" height={12} width={12} />
                <p className={dmSans.className + " text-sm text-[#8B8B8B]"}>
                  05 AVAILABLE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3
          className={
            dmSans.className + "  font-bold text-[24px] text-[#2D2C3C] mb-6"
          }
        >
          Date Time and Location
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image src={dateIcon} alt="" height={56} width={56} />

            <p
              className={dmSans.className + " text-lg text-[#2D2C3C] font-bold"}
            >
              Saturday, 2 December 2023
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={timeIcon} alt="" height={56} width={56} />

            <p
              className={dmSans.className + " text-lg text-[#2D2C3C] font-bold"}
            >
              6:30 PM - 9:30 PM
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Image src={locationIcon} alt="" height={56} width={56} />

            <p
              className={dmSans.className + " text-lg text-[#2D2C3C] font-bold"}
            >
              Bal Gandharva Rang Mandir, Near Junction Of 24th & 32nd Road &
              Patwardhan Park,Off Linking Road, Bandra West., Mumbai, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
