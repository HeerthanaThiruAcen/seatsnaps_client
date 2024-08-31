import React from "react";
import HeroForm from "./HeroForm";
import Image from "next/image";
import heroImg from "../../../../public/hero-bg.jpg";
import { dmSans } from "@/app/fonts";
import { createClient } from "@/utils/supabase/server";

export default async function Hero() {
  const supabase = createClient();
  const { data: locations } = await supabase
    .from("event_locations")
    .select("*");

  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="container">
        <h1
          className={
            dmSans.className +
            "  mt-40 text-[64px] font-bold mx-auto max-w-[720px] text-center text-white leading-tight tracking-tight"
          }
        >
          Easy booking with <br /> free cancellation option
        </h1>
        <p className=" mt-4 max-w-[558px] mx-auto text-center text-white mb-[44px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <div className="mx-auto w-fit">
          <HeroForm locations={locations || []} />
        </div>
      </div>
      <Image
        src={heroImg}
        fill
        alt=""
        className="z-[-1] object-cover filter brightness-50"
      />
    </div>
  );
}
