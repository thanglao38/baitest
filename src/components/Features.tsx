import {
  HeartPulse,
  BatteryCharging,
  Smartphone,
  Waves,
  ShieldCheck,
  Dumbbell,
} from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Theo dõi sức khỏe",
    description:
      "Theo dõi nhịp tim, SpO₂, giấc ngủ và mức độ căng thẳng theo thời gian thực với độ chính xác cao.",
  },
  {
    icon: BatteryCharging,
    title: "Pin lên đến 14 ngày",
    description:
      "Dung lượng pin lớn giúp bạn sử dụng liên tục hơn hai tuần chỉ với một lần sạc.",
  },
  {
    icon: Smartphone,
    title: "Kết nối thông minh",
    description:
      "Nhận cuộc gọi, tin nhắn, thông báo Facebook, Zalo và nhiều ứng dụng khác ngay trên cổ tay.",
  },
  {
    icon: Waves,
    title: "Chuẩn chống nước IP68",
    description:
      "An tâm khi đi mưa, rửa tay hoặc luyện tập với khả năng chống nước bền bỉ.",
  },
  {
    icon: Dumbbell,
    title: "Hơn 100 chế độ luyện tập",
    description:
      "Theo dõi chính xác các chỉ số khi chạy bộ, đạp xe, bơi lội, gym và nhiều môn thể thao khác.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành chính hãng",
    description:
      "Chính sách bảo hành 24 tháng cùng đội ngũ hỗ trợ kỹ thuật chuyên nghiệp.",
  },
];

export default function Features() {
  return (
    <section
      id="tinh-nang"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            TÍNH NĂNG NỔI BẬT
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
            Mọi tính năng bạn cần
            <br />
            trong một chiếc đồng hồ
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            Smart Watch mang đến trải nghiệm theo dõi sức khỏe, kết nối và
            luyện tập toàn diện với thiết kế sang trọng cùng công nghệ hiện đại.
          </p>

        </div>

        {/* Feature Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-gray-100
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-blue-100
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    transition-all
                    duration-300
                    group-hover:bg-blue-600
                    group-hover:rotate-6
                  "
                >
                  <Icon
                    size={32}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-500">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center text-blue-600 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Tìm hiểu thêm
                  <span className="ml-2 transition group-hover:translate-x-2">
                    →
                  </span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}