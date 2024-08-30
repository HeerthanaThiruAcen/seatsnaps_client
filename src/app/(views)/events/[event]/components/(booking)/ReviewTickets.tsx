import { dmSans } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import ticketWhite from "../../../../../../../public/ticket-white.svg";

export default function ReviewTickets() {
  return (
    <>
      <div className="my-[60px]">
        <div className="border border-[#A9A9A980] border-t-[4px] border-t-[#4872C6]  px-5 py-3  ">
          <p className="font-semibold text-2xl text-[#4872C6] mb-3">
            Standard Ticket
          </p>
          <div className="flex items-end justify-between font-semibold">
            <div>
              <p className=" text-[#2D2C3C] mb-2">Andrea Gomes</p>
              <p className=" text-[#2D2C3C]">andreagomes@example.com</p>
            </div>
            <div className="py-1 px-4 text-xl bg-[#4872C6] text-white">
              LKR 1200
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mb-6 mt-6  font-semibold ">
        <div className="flex flex-col item-center gap-4 justify-center">
          <p className={dmSans.className + " text-right  text-[#5A5A5A]"}>
            Sub Total:
          </p>
          <p className={dmSans.className + " text-right  text-[#5A5A5A]"}>
            Tax:
          </p>
          <p
            className={dmSans.className + " text-right text-lg text-[#5A5A5A]"}
          >
            Order Total:
          </p>
        </div>
        <div className="flex flex-col item-center gap-4 justify-center">
          <p className={dmSans.className + " text-left  text-[#5A5A5A]"}>
            LKR 200.00
          </p>
          <p className={dmSans.className + " text-left  text-[#5A5A5A]"}>
            LKR 200.00
          </p>
          <p className={dmSans.className + " text-left text-lg text-[#5A5A5A]"}>
            LKR 1200
          </p>
        </div>
      </div>

      <button
        className={
          dmSans.className +
          " bg-[#3772FF] text-white rounded-[8px] px-7 py-4 text-sm   font-bold w-full flex items-center justify-center gap-3"
        }
      >
        <Image src={ticketWhite} alt="" height={18} width={18} />
        <p>Proceed</p>
      </button>
    </>
  );
}
