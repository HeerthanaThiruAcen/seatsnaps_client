"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dmSans } from "@/app/fonts";
import React, { useRef } from "react";
import Slider from "react-slick";

export default function Categories() {
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
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
          <Slider
            ref={(slider: React.RefObject<Slider>) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="p-4">
              <div
                key={1}
                className=" p-4 bg-[#FCFCFD] border-[#F4F5F6] border-[2px] rounded-[24px]"
              >
                <p className="text-[#23262F]  w-fit  bg-[#E6E8EC] px-3 py-[6px] rounded-[32px] text-[12px] font-bold">
                  128
                </p>
                <div className="mt-[74px]">
                  <div>fv</div>
                  <div className="mt-[44px] font-medium text-[#23262F] ">
                    Travel and Outdoor
                  </div>
                </div>
              </div>
            </div>
            <div key={2}>
              <h3>2</h3>
            </div>
            <div key={3}>
              <h3>3</h3>
            </div>
            <div key={4}>
              <h3>4</h3>
            </div>
            <div key={5}>
              <h3>5</h3>
            </div>
            <div key={6}>
              <h3>6</h3>
            </div>
          </Slider>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <button className="button" onClick={previous}>
              Previous
            </button>
            <button className="button" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
