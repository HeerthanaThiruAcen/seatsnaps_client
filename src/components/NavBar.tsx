import React from "react";
import navLogo from "../../public/navLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { dmSans } from "@/app/fonts";
export default function NavBar() {
  return (
    <div className="border-b border-b-[#00000033]">
      <div className="container ">
        <div className="h-[96px] flex items-center justify-between">
          <Link href="/">
            <Image src={navLogo} alt="" height={49} />
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/events">Events</Link>
            <button
              className={
                dmSans.className +
                " bg-[#3772FF] text-white rounded-[8px] px-7 py-4 text-sm font-bold block "
              }
            >
              <p>Create Events</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
