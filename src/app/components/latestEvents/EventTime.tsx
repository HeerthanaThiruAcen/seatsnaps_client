import React from "react";
import dayjs from "dayjs";

export default function EventTime({ event }: { event: any }) {
  return (
    <p>
      {event?.endTime
        ? `${dayjs(event?.startTime, "HH:mm:ss").format("h:mm A")} - ${dayjs(
            event?.endTime,
            "HH:mm:ss"
          ).format("h:mm A")}`
        : dayjs(event?.startTime, "HH:mm:ss").format("h:mm A")}
    </p>
  );
}
