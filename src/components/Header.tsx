"use client";

import Link from "next/link";
import { useState } from "react";
import DatHang from "./DatHang";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold text-blue-600"
          >
            BF Deals
          </Link>

          <nav className="hidden lg:flex gap-10 text-gray-700 font-medium">
            <a href="#">Trang chủ</a>

            <a href="#tinh-nang">Tính năng</a>

            <a href="#uu-dai">Ưu đãi</a>

            <a href="#thong-so">Thông số</a>

            <a href="#lien-he">Liên hệ</a>
          </nav>

          <button
            onClick={() => {
              
              setOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-semibold"
          >
            Mua ngay
          </button>
        </div>
      </header>

      <DatHang
        open={open}
        onClose={() => setOpen(false)}
        product="Smart Watch Pro"
      />
    </>
  );
}