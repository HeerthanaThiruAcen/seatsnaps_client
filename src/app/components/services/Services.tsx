import { dmSans } from "@/app/fonts";
import React from "react";
import smile from "../../../../public/smile.svg";
import lightning from "../../../../public/lightning.svg";
import gift from "../../../../public/gift.svg";
import ServicesCard from "./ServicesCard";
const services = [
  {
    img: lightning,
    title: "24/7 customer service",
    description:
      "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.",
  },
  {
    img: gift,
    title: "Free cancellation",
    description:
      "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.",
  },
  {
    img: smile,
    title: "Zero cost for free events",
    description:
      "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.",
  },
];
export default function Services() {
  return (
    <div className="pt-[70px]">
      <div className="max-w-[1120px] mx-auto">
        <h3
          className={
            dmSans.className +
            " text-[40px] leading-[48px] text-center mb-[30px] font-bold"
          }
        >
          Services
        </h3>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index}>
              <ServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
