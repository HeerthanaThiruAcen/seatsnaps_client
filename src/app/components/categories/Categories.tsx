"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dmSans } from "@/app/fonts";
import React, { useRef } from "react";
import Slider from "react-slick";
import { EventCategory } from "@/app/types";
import categoryLeftArrow from "../../../../public/categoryLeftArrow.svg";
import categoryRightArrow from "../../../../public/categoryRightArrow.svg";
import eventCategoryIcon from "../../../../public/eventCategoryIcon.svg";
import Image from "next/image";

export default function Categories({
  categories,
}: {
  categories: EventCategory[];
}) {
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="pt-[70px] overflow-hidden">
      <div className="container">
        <h3
          className={
            dmSans.className +
            " text-[40px] leading-[48px] font-bold whitespace-nowrap mb-[30px]"
          }
        >
          Categories
        </h3>

        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {categories?.map((category) => (
              <div className="p-4" key={category.id}>
                <div
                  key={1}
                  className=" p-4 bg-[#FCFCFD] border-[#F4F5F6] border-[2px] rounded-[24px]"
                >
                  <p className="text-[#23262F]  w-fit  bg-[#E6E8EC] px-3 py-[6px] rounded-[32px] text-[12px] font-bold">
                    {category?.events?.length}
                  </p>
                  <div className="mt-[74px]">
                    <Image
                      src={eventCategoryIcon}
                      alt=""
                      height={32}
                      width={32}
                    />
                    <div className="mt-[44px] font-medium text-[#23262F] ">
                      {category.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div
            className="flex items-center justify-center gap-[10px]"
            style={{ textAlign: "center", marginTop: 30 }}
          >
            <button
              className="button h-10 w-10 rounded-full border-2 flex items-center justify-center hover:border-[#E6E8EC] border-transparent"
              onClick={previous}
            >
              <Image
                src={categoryLeftArrow}
                alt="categoryLeftArrow"
                height={24}
                width={24}
              />
            </button>
            <button
              className="button h-10 w-10 rounded-full border-2 flex items-center justify-center hover:border-[#E6E8EC] border-transparent"
              onClick={next}
            >
              <Image
                src={categoryRightArrow}
                alt="categoryLeftArrow"
                height={24}
                width={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
