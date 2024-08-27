import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import back from "../../../../../public/back.svg";
import EventInfo from "./components/EventInfo";
import TicketInfo from "./components/TicketInfo";
import OtherEvents from "./components/OtherEvents";

export default function page() {
  return (
    <div className="container">
      <Image src={back} alt="" height={32} width={32} className="py-6" />
      <Carousel autoplay className="mb-[34px]">
        <div className="relative h-[450px] rounded-[20px] overflow-hidden">
          <Image src="/singleEvent.png" alt="" fill />
        </div>
      </Carousel>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <EventInfo />
        </div>
        <TicketInfo />
      </div>
      <div className="my-8 border-b border-[#6F6F6F4D]"></div>
      <OtherEvents />
    </div>
  );
}
