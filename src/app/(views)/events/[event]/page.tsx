import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import back from "../../../../../public/back.svg";
import singleEvent from "../../../../../public/singleEvent.png";
import EventInfo from "./components/EventInfo";
import TicketInfo from "./components/TicketInfo";
import OtherEvents from "./components/OtherEvents";
import { createClient } from "@/utils/supabase/server";

export default async function page({ params }: { params: { event: string } }) {
  const supabase = createClient();
  const { data: eventResponse } = await supabase
    .from("events")
    .select(
      "*,event_categories(name),eventOrganizations(*),venues(name,zone_ticket_category(name,price))"
    )
    .eq("id", params.event);

  const eventData = eventResponse ? eventResponse[0] : null;
  console.log("erg", eventData);

  return (
    <div className="container">
      <Image src={back} alt="" height={32} width={32} className="py-6" />
      <Carousel autoplay className="mb-[34px]">
        <div className="relative h-[450px] rounded-[20px] overflow-hidden">
          <Image
            src={eventData?.eventImage ? eventData?.eventImage : singleEvent}
            alt=""
            fill
            priority
          />
        </div>
      </Carousel>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <EventInfo eventData={eventData} />
        </div>
        <div className="relative">
          <TicketInfo eventData={eventData} />
        </div>
      </div>
      <div className="my-8 border-b border-[#6F6F6F4D]"></div>
      <OtherEvents />
    </div>
  );
}
