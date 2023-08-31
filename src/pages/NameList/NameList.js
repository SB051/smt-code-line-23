import React, { useState, useEffect } from "react";

import bgSMT from "@assets/images/bgSMT.png";
import mobileBG from "@assets/images/mobileBG.png";

function NameList() {
  const [countdown, setCountdown] = useState("");
  const targetDate = new Date("2023-05-23T06:00:00+07:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown(
          `อีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที ค่อยมาดูนะจ้ะ 🤗`
        );
      } else {
        setCountdown("พี่ขี้เกียจทำหน้านี้อ่ะ ขอโทษละกัน😛");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        src={bgSMT}
        alt="BG"
        className="absolute hidden h-full w-full md:block"
      />
      <img
        src={mobileBG}
        alt="BG"
        className="absolute h-full w-full md:hidden"
      />
      <div className="absolute flex h-full w-full items-center justify-center px-8 text-center text-lg text-white md:text-4xl">
        <p>{countdown}</p>
      </div>
    </>
  );
}
export default NameList;
