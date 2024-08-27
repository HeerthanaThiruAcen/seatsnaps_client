import { dmSans } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import priceIcon from "../../../../public/price.svg";
import interestIcon from "../../../../public/interest.svg";
import wishListIcon from "../../../../public/wishListIcon.svg";
export default function EventCard() {
  return (
    <div className=" rounded-[10px] overflow-hidden border border-[#F6F6F6]">
      <div className=" w-full h-[254px] relative">
        <Image alt="" src="/hero-bg.jpg" fill />
        <div className="absolute bottom-0 left-0 text-[#2D2C3C] text-[18px] bg-[#FFE047] px-[10px] py-[5px] rounded-tr-[6px]">
          Travel & Adventure
        </div>
        <div className="absolute top-[14px] right-[14px]">
          <Image alt="" src={wishListIcon} height={48} width={48} />
        </div>
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
              NOV
            </h4>
            <h4
              className={
                dmSans.className +
                " text-[24px] leading-[32px] font-bold whitespace-nowrap text-center text-[#2D2C3C]"
              }
            >
              25 - 26
            </h4>
          </div>
          <div className="flex flex-col gap-[10px] text-[#5A5A5A]">
            <h4
              className={
                dmSans.className +
                " text-[24px] leading-[32px] font-bold text-[#2D2C3C]"
              }
            >
              Lakeside Camping at Pawna
            </h4>
            <p>Adventure Geek - Explore the Unexplored, Mumbai</p>
            <p>8:30 AM - 7:30 PM</p>
            <div className="flex gap-[9px]">
              <div className="flex items-center gap-[7px]">
                <Image height={21} width={21} alt="" src={priceIcon} />{" "}
                <p>LKR 1,400</p>
              </div>

              <span>&bull;</span>

              <div className="flex items-center gap-[7px]">
                <Image height={21} width={21} alt="" src={interestIcon} />{" "}
                <p>Interested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
