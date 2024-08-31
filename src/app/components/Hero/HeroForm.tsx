"use client";
import { Button, DatePicker, Form, Input, Select } from "antd";
import React from "react";
import searchLine from "../../../../public/search.svg";
import Image from "next/image";
import { EventLocationsType } from "@/app/types";
import { useRouter } from "next/navigation";

export default function HeroForm({
  locations,
}: {
  locations: EventLocationsType[];
}) {
  const router = useRouter();

  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    router.push(
      `/events?searchWord=${values.event}&date=${values.date}&location=${values.location}`
    );
  };

  return (
    <div className="w-[846px]  bg-white rounded-[20px] px-[29px] pt-[36px] pb-4">
      <Form
        layout="vertical"
        className="flex items-center gap-[14px]"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="event"
          label={<div className="text-xs font-bold text-[#B1B5C3]">EVENT</div>}
          className="w-[220px]"
        >
          <Input placeholder="Search Event..." size="large" />
        </Form.Item>
        <Form.Item
          name="date"
          label={<div className="text-xs font-bold text-[#B1B5C3]">DATE</div>}
          className="w-[220px]"
        >
          <DatePicker className="w-full" size="large" />
        </Form.Item>
        <Form.Item
          name="location"
          label={
            <div className="text-xs font-bold text-[#B1B5C3]">LOCATION</div>
          }
          className="w-[220px]"
        >
          <Select
            placeholder="Select Location"
            size="large"
            options={locations}
            fieldNames={{ label: "city", value: "id" }}
          ></Select>
        </Form.Item>
        <Form.Item label=" ">
          <button
            className="w-[86px] h-[48px] rounded-[64px] flex items-center justify-center bg-[#3B71FE]"
            type="submit"
          >
            <Image src={searchLine} alt="" height={18} width={18} />
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
