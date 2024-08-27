import { dmSans } from "@/app/fonts";
import React from "react";

export default function Tags() {
  const tags = [
    { name: "Holiday Concert" },
    { name: "Music" },
    { name: "Concert" },
  ];
  return (
    <div>
      <h3
        className={
          dmSans.className + "  font-bold text-[24px] text-[#2D2C3C] mb-6"
        }
      >
        Tags
      </h3>
      <div className="flex gap-7">
        {tags?.map((tag, index) => (
          <p
            key={index}
            className={
              dmSans.className +
              " text-[18px] text-[#2D2C3C] bg-[#F8F7FA] py-3 px-7 w-fit rounded-[50px]"
            }
          >
            {tag.name}
          </p>
        ))}
      </div>
    </div>
  );
}
