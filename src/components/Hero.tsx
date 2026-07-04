"use client";

import { useState } from "react";
import Image from "next/image";
import DatHang from "./DatHang";

const stats = [
  {
    value: "50K+",
    label: "Khách hàng",
  },
  {
    value: "4.9★",
    label: "Đánh giá",
  },
  {
    value: "14",
    label: "Ngày pin",
  },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-24">
        {/* Background Blur */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-100 blur-[120px]" />
          <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-100 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold tracking-wide text-blue-600">
                SMART WATCH 2026
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-gray-900 lg:text-7xl">
                Đồng hồ
                <span className="block text-blue-600">
                  Thông minh
                </span>
                dành cho cuộc sống hiện đại
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-gray-500">
                Thiết kế sang trọng với màn hình AMOLED sắc nét,
                theo dõi sức khỏe 24/7, pin lên đến 14 ngày,
                chống nước IP68 và hỗ trợ hơn 100 chế độ luyện tập.
              </p>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap gap-5">
                <button
                  onClick={() => setOpen(true)}
                  className="
                    rounded-full
                    bg-blue-600
                    px-8
                    py-4
                    text-lg
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

                <button
                  onClick={() => {
                    document
                      .getElementById("thong-so")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="
                    rounded-full
                    border-2
                    border-gray-300
                    bg-white
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-gray-700
                    transition-all
                    duration-300
                    hover:border-blue-600
                    hover:bg-blue-600
                    hover:text-white
                  "
                >
                  Xem thêm
                </button>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-3 gap-5">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-2xl
                      border
                      border-gray-100
                      bg-white
                      p-6
                      text-center
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                    "
                  >
                    <h2 className="text-4xl font-black text-gray-900">
                      {item.value}
                    </h2>

                    <p className="mt-2 text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-100 blur-[120px]" />

              <Image
                src="/images/watch-removebg-preview.png"
                alt="Smart Watch"
                width={620}
                height={620}
                priority
                className="
                  relative
                  z-10
                  transition-transform
                  duration-500
                  hover:scale-105
                  drop-shadow-[0_35px_50px_rgba(0,0,0,0.15)]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popup Đặt hàng */}
      <DatHang
        open={open}
        onClose={() => setOpen(false)}
        product="Smart Watch Pro 2026"
      />
    </>
  );
}