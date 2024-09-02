"use client";
import React, { useEffect, useState } from "react";
import calandar from "../../../../../../../public/calandar.svg";
import ticketWhite from "../../../../../../../public/ticket-white.svg";
import Image from "next/image";
import { Form, Input, InputNumber, Radio } from "antd";
import Link from "next/link";
import { dmSans } from "@/app/fonts";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";

export default function AttendeeDetails() {
  const pathname = usePathname();
  const [formItems, setFormItems] = useState<any>([]);
  useEffect(() => {
    fetchFormItems();
  }, []);

  const fetchFormItems = async () => {
    const supabase = createClient();
    let { data: registrationForm } = await supabase
      .from("registrationForm")
      .select("*")
      .eq("eventId", pathname.split("/")[2]);
    if (registrationForm) {
      setFormItems(registrationForm || []);
    }
  };
  console.log("erg", formItems);

  function toCamelCase(str: string) {
    return str
      .split(" ")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }

  return (
    <div className="mt-10 text-[#2D2C3C]">
      <div className="flex justify-between items-center ">
        <p className="font-semibold">Sound Of Christmas 2023</p>
        <div className="flex items-center gap-[10px]">
          <Image src={calandar} alt="" height={18} width={18} />
          <p className="font-semibold">Saturday, 2 December 2023</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 mb-2 text-sm">
        <p className="font-semibold">Standard Ticket: Ticket #1</p>
      </div>
      <Form layout="vertical">
        <div className="border border-[#A9A9A980] border-t-[2px] border-t-[#1FAF38]  px-4 py-[22px]  ">
          {formItems?.map((item: any, index: number) => (
            <Form.Item
              label={item.name}
              name={toCamelCase(item.name)}
              key={index}
            >
              {item.type === "Text" ? (
                <Input
                  placeholder={"Enter Attendee's " + item.name}
                  size="large"
                />
              ) : item.type === "Number" ? (
                <InputNumber size="large" style={{ width: "100%" }} />
              ) : item.type === "Select" ? (
                ""
              ) : (
                <Radio.Group>
                  {item.options?.split(",")?.map((item: any, index: number) => (
                    <Radio key={index} value={item}>
                      {item}
                    </Radio>
                  ))}
                </Radio.Group>
              )}
            </Form.Item>
          ))}
        </div>
      </Form>
      <p className="text-center mt-4">
        I accept the <Link href="/">Terms of Service</Link> and have read the{" "}
        <Link href="/">Privacy Policy</Link>
      </p>
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
        <p>Continue to checkout</p>
      </button>
    </div>
  );
}
