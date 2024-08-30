"use client";
import { dmSans } from "@/app/fonts";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import ticketWhite from "../../../../../../../public/ticket-white.svg";
import Image from "next/image";

export default function SelectTickets() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 mt-4">
        <p className="text-sm">Ticket Types</p>
        <p className="text-sm">Quantity</p>
      </div>
      <div className="border border-[#A9A9A980] border-l-[8px] border-l-[#1FAF38]  px-4 py-3 flex items-center justify-between ">
        <div className="font-semibold text-lg">Standard Ticket</div>
        <Space>
          <Button shape="circle" type="text" icon={<MinusCircleOutlined />} />

          <p>1</p>
          <Button shape="circle" type="text" icon={<PlusCircleOutlined />} />
        </Space>
      </div>
      <div className="flex item-center gap-6 justify-center font-semibold mb-6 mt-6">
        <p className={dmSans.className + " text-2xl text-[#2D2C3C]"}>
          Qty: <span className="text-[#287921]">1</span>
        </p>
        <p className={dmSans.className + " text-2xl text-[#2D2C3C]"}>
          Total: <span className="text-[#287921]">1200</span>
        </p>
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
    </div>
  );
}
