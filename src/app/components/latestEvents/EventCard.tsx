"use client";
import { dmSans } from "@/app/fonts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import priceIcon from "../../../../public/price.svg";
// import interestIcon from "../../../../public/interest.svg";
// import wishListIcon from "../../../../public/wishlistIcon.svg";
import fallBackImage from "../../../../public/hero-bg.jpg";
import { useRouter } from "next/navigation";
import { Event } from "@/app/types";
import dayjs from "dayjs";
import { createClient } from "@/utils/supabase/client";
import EventTime from "./EventTime";

export default function EventCard({ event }: { event: Event }) {
  const router = useRouter();
  const [soldTickets, setSoldTickets] = useState<number>(0);
  useEffect(() => {
    fetchSoldTickets();
  }, []);

  const fetchSoldTickets = async () => {
    const supabase = createClient();

    const { data } = await supabase.rpc("sold_tickets_count_of_event");
  };

  return (
    <div
      className=" rounded-[10px] overflow-hidden border border-[#F6F6F6] cursor-pointer"
      onClick={() => router.push(`/events/${event.id}`)}
    >
      <div className=" w-full h-[254px] relative">
        <Image
          alt=""
          src={event?.eventImage ? event.eventImage : fallBackImage}
          fill
        />
        {event?.event_categories?.name && (
          <div className="absolute bottom-0 left-0 text-[#2D2C3C] text-[18px] bg-[#FFE047] px-[10px] py-[5px] rounded-tr-[6px]">
            {event.event_categories?.name}
          </div>
        )}
        {/* <div className="absolute top-[14px] right-[14px]">
          <Image alt="" src={wishListIcon} height={48} width={48} />
        </div> */}
      </div>
      <div className="p-4">
        <div className="flex gap-5">
          <div>
            <h4
              className={
                dmSans.className +
                " text-[24px] leading-[32px] font-bold text-center text-[#3772FF]"
              }
            >
              {dayjs(event?.date)?.format("MMM")}
            </h4>
            <h4
              className={
                dmSans.className +
                " text-[24px] leading-[32px] font-bold whitespace-nowrap text-center text-[#2D2C3C]"
              }
            >
              {event?.endDate
                ? `${dayjs(event?.date).format("DD")} - ${dayjs(
                    event?.endDate
                  ).format("DD")}`
                : dayjs(event?.date).format("DD")}
            </h4>
          </div>
          <div className="flex flex-col gap-[10px] text-[#5A5A5A]">
            <h4
              className={
                dmSans.className +
                " text-[24px] leading-[32px] font-bold text-[#2D2C3C]"
              }
            >
              {event?.name}
            </h4>
            <p>{event?.description}</p>
            <EventTime event={event} />
            <div className="flex gap-[9px]">
              <div className="flex items-center gap-[7px]">
                <Image height={21} width={21} alt="" src={priceIcon} />{" "}
                <p>
                  {event?.isFree
                    ? "Free"
                    : event?.venues?.zone_ticket_category[0]?.price}
                </p>
              </div>

              <span>&bull;</span>

              <p>25 Sold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
