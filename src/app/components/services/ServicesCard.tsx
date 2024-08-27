import Image from "next/image";
import React from "react";

export default function ServicesCard({
  service,
}: {
  service: { img: string; title: string; description: string };
}) {
  return (
    <div className="px-8 py-16 bg-[#FCFCFD]">
      <Image src={service.img} alt="" width={48} height={48} />
      <p className="font-medium mt-8 mb-4">{service.title}</p>
      <p className="text-sm text-[#777E90]">{service.description}</p>
    </div>
  );
}
