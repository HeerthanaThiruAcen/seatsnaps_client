import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { dmSans } from "@/app/fonts";
export default function Footer() {
  return (
    <div className={dmSans.className + " bg-[#23262F] pt-[80px]"}>
      <div className="max-w-[1120px] mx-auto">
        <div className="flex justify-between items-center pb-8">
          <Image src={logo} alt="" width={81} height={23} />
          <div className="flex items-center gap-8 text-[#7B7B7B]">
            <Link href="/">Events</Link>
            <Link href="/">Movies</Link>
            <Link href="/">Our Theaters</Link>
            <Link href="/">Register Theaters</Link>
            <Link href="/">Create Events</Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto py-8 flex items-center gap-6 justify-center border-t border-[#353945]">
        <p className="text-xs text-[#777E90]">
          Copyright © 2023 Seatsnaps. All rights reserved
        </p>
        <Link href="/privacy-policy" className="text-[#777E90] text-xs">
          Privacy Policy
        </Link>
        <Link href="/terms-and-conditions" className="text-[#777E90] text-xs">
          Term of Use
        </Link>
      </div>
    </div>
  );
}
