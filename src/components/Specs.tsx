import Image from "next/image";
import {
  BatteryCharging,
  Bluetooth,
  Cpu,
  ShieldCheck,
  Smartphone,
  Watch,
} from "lucide-react";

const left = [
  {
    icon: BatteryCharging,
    title: "Pin",
    value: "14 ngày",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth",
    value: "5.3",
  },
  {
    icon: Cpu,
    title: "Bộ xử lý",
    value: "Helio X2 AI",
  },
];

const right = [
  {
    icon: Smartphone,
    title: "Màn hình",
    value: '1.95" AMOLED',
  },
  {
    icon: ShieldCheck,
    title: "Chống nước",
    value: "IP68",
  },
  {
    icon: Watch,
    title: "Trọng lượng",
    value: "38g",
  },
];

function SpecCard({
  icon: Icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-gray-100
      bg-white
      p-7
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-100
      hover:shadow-xl
    "
    >
      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-blue-50
        transition
        group-hover:bg-blue-600
      "
      >
        <Icon
          size={28}
          className="text-blue-600 transition group-hover:text-white"
        />
      </div>

      <p className="mt-6 text-sm font-medium text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-gray-900">
        {value}
      </h3>
    </div>
  );
}

export default function Specs() {
  return (
    <section
      id="thong-so"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            THÔNG SỐ KỸ THUẬT
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
            Hiệu năng mạnh mẽ
            <br />
            Thiết kế dành cho tương lai
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            Smart Watch sở hữu phần cứng hiện đại, màn hình sắc nét,
            pin bền bỉ và khả năng kết nối nhanh giúp bạn luôn sẵn sàng
            trong mọi hoạt động.
          </p>

        </div>

        {/* Content */}

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_520px_1fr]">

          {/* Left */}

          <div className="space-y-6">

            {left.map((item) => (
              <SpecCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value}
              />
            ))}

          </div>

          {/* Center */}

          <div className="relative flex justify-center">

            {/* Glow */}

            <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-100 blur-[120px]" />

            <Image
              src="/images/watch-removebg-preview.png"
              alt="Smart Watch"
              width={430}
              height={430}
              className="
              relative
              z-10
              transition-all
              duration-500
              hover:scale-105
              drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)]
              "
            />

          </div>

          {/* Right */}

          <div className="space-y-6">

            {right.map((item) => (
              <SpecCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}