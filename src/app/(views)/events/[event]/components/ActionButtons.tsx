"use client";
import { dmSans } from "@/app/fonts";
import Image from "next/image";
import React, { useState } from "react";
import shareIcon from "../../../../../../public/share.svg";
import BuyTicketModal from "./(booking)/BuyTicketModal";
import { Event } from "@/app/types";

export default function ActionButtons({ eventData }: { eventData: Event }) {
  const [isBuyTicketModalOpen, setIsBuyTicketModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handleSelectTicket = () => {};

  const handleAttendeeDetails = () => {};

  const handleReviewTickets = () => {};

  return (
    <div className="flex items-center gap-4 justify-end ">
      <button
        className={
          dmSans.className +
          " bg-[#3772FF] text-white rounded-[8px] px-7 py-4 text-sm  block "
        }
      >
        <Image src={shareIcon} alt="" height={24} width={15} />
      </button>
      <button
        className={
          dmSans.className +
          " border-[#3772FF]  border-[2px] text-[#3772FF] font-bold rounded-[8px] px-[26px] py-[14px] text-sm  block "
        }
      >
        <p>Watch Trailer</p>
      </button>
      <button
        onClick={() => setIsBuyTicketModalOpen(true)}
        className={
          dmSans.className +
          " bg-[#3772FF] text-white rounded-[8px] px-7 py-4 text-sm  block font-bold "
        }
      >
        <p>Buy Tickets</p>
      </button>
      <BuyTicketModal
        isModalOpen={isBuyTicketModalOpen}
        handleCancel={() => setIsBuyTicketModalOpen(false)}
        step={step}
        setStep={setStep}
        handleSelectTicket={handleSelectTicket}
      />
    </div>
  );
}
