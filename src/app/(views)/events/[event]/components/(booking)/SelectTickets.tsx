"use client";
import { dmSans } from "@/app/fonts";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import ticketWhite from "../../../../../../../public/ticket-white.svg";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useParams } from "next/navigation";
import { ZoneTicketCategoryType } from "@/app/types";

export default function SelectTickets({
  handleSelectTicket,
  setStep,
}: {
  handleSelectTicket: () => void;
}) {
  const supabase = createClient();
  const params = useParams();
  const [tickets, setTickets] = useState<ZoneTicketCategoryType[]>([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const { data: tickets } = await supabase
      .from("events")
      .select("venues(zone_ticket_category(name,price))")
      .eq("id", params.event);
    setTickets(
      tickets
        ? tickets[0]?.venues?.zone_ticket_category.map((item) => ({
            ...item,
            count: 1,
          }))
        : []
    );
  };
  console.log("erg", tickets);

  const handleIncrease = () => {};

  const handleDecrease = (index: number) => {};

  const handleProceed = () => {
    setStep(2);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2 mt-4">
        <p className="text-sm">Ticket Types</p>
        <p className="text-sm">Quantity</p>
      </div>
      <div className="flex flex-col gap-2">
        {tickets?.map((item) => (
          <div className="border border-[#A9A9A980] border-l-[8px] border-l-[#1FAF38]  px-4 py-3 flex items-center justify-between ">
            <div className="font-semibold text-lg">{item.name}</div>
            <Space>
              <Button
                shape="circle"
                type="text"
                icon={<MinusCircleOutlined />}
              />

              <p>{item.count}</p>
              <Button
                shape="circle"
                type="text"
                icon={<PlusCircleOutlined />}
                onClick={() => handleIncrease()}
              />
            </Space>
          </div>
        ))}
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
        onClick={handleProceed}
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
