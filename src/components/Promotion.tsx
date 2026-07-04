"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import DatHang from "./DatHang";
export default function Promotion() {
  const target = new Date();
  const [open, setOpen] = useState(false);
  target.setDate(target.getDate() + 5);

  const calculate = () => {
    const difference = target.getTime() - new Date().getTime();

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdown = [
    { value: time.days, label: "Ngày" },
    { value: time.hours, label: "Giờ" },
    { value: time.minutes, label: "Phút" },
    { value: time.seconds, label: "Giây" },
  ];

  return (
    <section
      id="uu-dai"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] border border-gray-100 bg-gradient-to-r from-slate-50 via-white to-blue-50 shadow-xl">

          <div className="grid items-center gap-16 px-10 py-14 lg:grid-cols-2 lg:px-16">

            {/* Left */}

            <div>

              <span className="inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                🔥 ƯU ĐÃI CÓ GIỚI HẠN
              </span>

              <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">
                Giảm ngay
                <span className="block text-blue-600">
                  40%
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
                Sở hữu Smart Watch thế hệ mới với mức giá ưu đãi chỉ trong thời
                gian diễn ra chương trình. Số lượng sản phẩm có hạn.
              </p>

              {/* Countdown */}

              <div className="mt-10 grid grid-cols-4 gap-4">

                {countdown.map((item) => (

                  <div
                    key={item.label}
                    className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-5
                    text-center
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-lg
                    "
                  >
                    <h3 className="text-3xl font-black text-blue-600">
                      {String(item.value).padStart(2, "0")}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.label}
                    </p>

                  </div>

                ))}

              </div>

              {/* Price */}

              <div className="mt-12">

                <p className="text-lg text-gray-400 line-through">
                  4.990.000₫
                </p>

                <h3 className="mt-2 text-5xl font-black text-gray-900">
                  2.990.000₫
                </h3>

                <p className="mt-2 text-green-600 font-medium">
                  Tiết kiệm đến 2.000.000₫
                </p>

              </div>

              {/* Button */}

              <button
              onClick={() => setOpen(true)}
              className="
                mt-10
                rounded-full
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-xl
                hover:shadow-blue-300
              "
            >
              Mua ngay
            </button>

            </div>

            {/* Right */}

            <div className="relative flex justify-center">

              <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-100 blur-[120px]" />

              <Image
                src="/images/watch-removebg-preview.png"
                alt="Smart Watch"
                width={520}
                height={520}
                className="
                relative
                z-10
                transition-all
                duration-500
                hover:scale-105
                drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)]
                "
              />

            </div>

          </div>

        </div>

      </div>
      <DatHang
        open={open}
        onClose={() => setOpen(false)}
        product="Smart Watch Pro"
      />
    </section>
  );
}