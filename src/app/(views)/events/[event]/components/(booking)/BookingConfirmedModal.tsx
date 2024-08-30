import { Modal, QRCode } from "antd";
import React from "react";
import { BookingConfirmedModalPropsType } from "../../types";

import checkGreen from "../../../../../../../public/checkGreen.svg";
import download from "../../../../../../../public/download.svg";
import Image from "next/image";
import { dmSans } from "@/app/fonts";

export default function BookingConfirmedModal({
  isModalOpen,
  handleCancel,
}: BookingConfirmedModalPropsType) {
  return (
    <Modal
      title={
        <div className="flex items-center gap-[18px]">
          <Image src={checkGreen} alt="" width={40} height={40} />
          <p className={dmSans.className + " text-[25px]"}>
            Your booking is confirmed!
          </p>
        </div>
      }
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      width={800}
    >
      <div className="grid grid-cols-5">
        <div className="col-span-3 px-6 py-[30px]">
          <p className={dmSans.className}>#10258666259</p>
          <h3
            className={
              dmSans.className +
              " font-bold text-[32px] text-[#2D2C3C] mt-3 mb-8"
            }
          >
            Lakeside Camping at Pawna 2023
          </h3>
          <div className="flex flex-col gap-6">
            <div>
              <p className={dmSans.className + " mb-1 font-bold text-lg"}>
                2 Tickets sent to
              </p>
              <p className={dmSans.className + " text-lg"}>Twesr@Twesr.com</p>
            </div>
            <div>
              <p className={dmSans.className + " mb-1 font-bold text-lg"}>
                DATE
              </p>
              <p className={dmSans.className + " text-lg"}>Twesr@Twesr.com</p>
            </div>
            <div>
              <p className={dmSans.className + " mb-1 font-bold text-lg"}>
                Location
              </p>
              <p className={dmSans.className + " text-lg"}>Twesr@Twesr.com</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center bg-[#F1F1F1]">
          <QRCode value="egeg" size={250} />
          <button className="flex items-center gap-2 px-[18px] py-2 border-2 w-fit rounded-[33px] mt-6">
            <Image src={download} alt="" width={20} height={20} />
            <p className={dmSans.className + " text-lg  "}>DOWNLOAD PDF</p>
          </button>
        </div>
      </div>
    </Modal>
  );
}
