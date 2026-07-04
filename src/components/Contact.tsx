"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";

const contacts = [
  {
    icon: Phone,
    title: "Hotline",
    value: "1900 1234",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@smartwatch.vn",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    value: "123 Tân Thới Hiệp, Quận 12, TP. Hồ Chí Minh",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    value: "Thứ 2 - Chủ nhật\n08:00 - 21:00",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    try {
      setLoading(true);

      await push(ref(db, "contacts"), {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message,
        createdAt: Date.now(),
      });

     

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="lien-he"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-32 text-slate-900"
    >
      {/* Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="font-bold uppercase tracking-[0.25em] text-blue-600">
            Liên hệ
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Chúng tôi luôn
            <span className="text-blue-600">
              {" "}
              sẵn sàng hỗ trợ
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Đội ngũ tư vấn luôn sẵn sàng giải đáp mọi thắc mắc về sản phẩm,
            bảo hành và hỗ trợ kỹ thuật nhanh chóng.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-7">
            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                    <Icon
                      size={30}
                      className="text-blue-600 transition group-hover:text-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 whitespace-pre-line leading-7 text-slate-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-slate-900">
              Gửi tin nhắn
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Họ và tên"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Nội dung cần hỗ trợ..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Đang gửi..." : "Gửi liên hệ"}

                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-24 overflow-hidden rounded-[36px] border border-slate-200 shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Ho+Chi+Minh+City&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}