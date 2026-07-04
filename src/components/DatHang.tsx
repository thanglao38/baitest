"use client";

import { useState } from "react";
import { X, ShoppingCart } from "lucide-react";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";

interface DatHangProps {
  open: boolean;
  onClose: () => void;
  product: string;
}

export default function DatHang({
  open,
  onClose,
  product,
}: DatHangProps) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    quantity: 1,
    note: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    try {
      setLoading(true);

      await push(ref(db, "orders"), {
        product,
        name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address,
        quantity: form.quantity,
        note: form.note,
        createdAt: Date.now(),
      });

      

      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        quantity: 1,
        note: "",
      });

      onClose();
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Không thể gửi đơn hàng.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-5">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 hover:bg-gray-100"
        >
          <X size={22} />
        </button>

        {/* Tiêu đề */}
        <div className="mb-8 text-center">
          <ShoppingCart
            size={45}
            className="mx-auto text-blue-600"
          />

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Đặt hàng
          </h2>

          <p className="mt-2 text-slate-600">
            {product}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            name="address"
            placeholder="Địa chỉ giao hàng"
            value={form.address}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
          />

          <input
            type="number"
            min={1}
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
          />

          <textarea
            rows={4}
            name="note"
            placeholder="Ghi chú"
            value={form.note}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Đang gửi..." : "Đặt hàng"}
          </button>
        </form>
      </div>
    </div>
  );
}