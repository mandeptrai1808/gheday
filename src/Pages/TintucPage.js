import React from "react";
import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";

export default function TintucPage() {
  return (
    <div>
      <HeaderMenu />
      <div className="">
        <div className="flex py-4 px-40 justify-center bg-slate-200">
          <p className="mx-5 text-yellow-500 hover:scale-110 duration-100 cursor-pointer">
            Tin tức tổng hợp
          </p>
          <p className="mx-5 hover:scale-110 duration-100 cursor-pointer">
            Khuyến Mãi
          </p>
          <p className="mx-5 hover:scale-110 duration-100 cursor-pointer">
            Giải thưởng
          </p>
        </div>
        <div className="px-40 pb-20">
          <div className="flex items-center h-fit">
            <p className="text-4xl w-80"> Tin tức nổi bật </p>
            <div className="w-full h-1 mt-10 bg-slate-600 mb-10"></div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-20">
            <div
              className="bg-red-300 w-full shadow-lg hover:scale-105 cursor-pointer duration-100 h-96 col-span-2 relative"
              style={{
                backgroundImage: `url(https://zalo-article-photo.zadn.vn/59c6337d0936e068b927#235298784)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full  py-2 px-5 h-1/3 bg-black text-white absolute bottom-0 bg-opacity-50">
                <p className="text-3xl">Gheday đồng hành cùng bạn!</p>
                <p className="defaultFont">
                  Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản, nhanh
                  chóng và tiện lợi, giúp bạn tập trung hoàn toàn vào việc tận
                  hưởng mỗi khoảnh khắc trên chặng đường của mình.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 col-span-2">
              <div
                className="bg-red-500 relative hover:scale-105 duration-100 cursor-pointer shadow-xl"
                style={{
                  backgroundImage: `url(https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/10/21/1107813/1558319247_Haugiang_.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 px-5 h-1/2">
                  <p className="text-lg">Tiêu đề</p>
                  <p className="defaultFont text-sm">
                    Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản
                  </p>
                </div>
              </div>

              <div className="bg-red-500 relative hover:scale-105 duration-100 cursor-pointer shadow-xl"
              style={{
                  backgroundImage: `url(https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/10/21/1107813/1558319247_Haugiang_.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}>
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 px-5 h-1/2">
                        <p className="text-lg">Tiêu đề</p>
                        <p className="defaultFont text-sm">Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản</p>
                    </div>

                </div>

              <div
                className="bg-red-500 relative hover:scale-105 duration-100 cursor-pointer shadow-xl"
                style={{
                  backgroundImage: `url(https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/10/21/1107813/1558319247_Haugiang_.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 px-5 h-1/2">
                  <p className="text-lg">Tiêu đề</p>
                  <p className="defaultFont text-sm">
                    Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản
                  </p>
                </div>
              </div>
              <div
                className="bg-red-500 relative hover:scale-105 duration-100 cursor-pointer shadow-xl"
                style={{
                  backgroundImage: `url(https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/10/21/1107813/1558319247_Haugiang_.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 px-5 h-1/2">
                  <p className="text-lg">Tiêu đề</p>
                  <p className="defaultFont text-sm">
                    Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center h-fit">
            <p className="text-4xl w-80"> Tin tức mới nhất </p>
            <div className="w-full h-1 mt-10 bg-slate-600 mb-10"></div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div
              className="bg-red-300 w-full shadow-lg hover:scale-105 cursor-pointer duration-100 h-96 col-span-2 relative"
              style={{
                backgroundImage: `url(https://btnmt.1cdn.vn/2019/03/04/h1_2.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full  py-2 px-5 h-1/3 bg-black text-white absolute bottom-0 bg-opacity-50">
                <p className="text-3xl">Gheday đồng hành cùng bạn!</p>
                <p className="defaultFont">
                  Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản, nhanh
                  chóng và tiện lợi, giúp bạn tập trung hoàn toàn vào việc tận
                  hưởng mỗi khoảnh khắc trên chặng đường của mình.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 col-span-2">
              <div
                className="bg-red-500 relative hover:scale-105 duration-100 cursor-pointer shadow-xl"
                style={{
                  backgroundImage: `url(https://bcp.cdnchinhphu.vn/Uploaded/tranthitiep/2021_02_23/cho%20noi.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 px-5 h-1/2">
                  <p className="text-lg">Tiêu đề</p>
                  <p className="defaultFont text-sm">
                    Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản
                  </p>
                </div>
              </div>

              <div className="bg-red-500 relative hover:scale-105 duration-100 cursor-pointer shadow-xl"
              style={{
                  backgroundImage: `url(https://datchinrongtravel.com/uploads/post/img_1710830430469_o_1hpan1a827k2ohsnqe1ljk1p40n.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}>
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 px-5 h-1/2">
                        <p className="text-lg">Tiêu đề</p>
                        <p className="defaultFont text-sm">Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản</p>
                    </div>

                </div>

              <div
                className="bg-red-500 relative hover:scale-105 duration-100 cursor-pointer shadow-xl"
                style={{
                  backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/6/62/M%E1%BB%99t_c%E1%BA%A3nh_%E1%BB%9F_ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 px-5 h-1/2">
                  <p className="text-lg">Tiêu đề</p>
                  <p className="defaultFont text-sm">
                    Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản
                  </p>
                </div>
              </div>
              <div
                className="bg-red-500 relative hover:scale-105 duration-100 cursor-pointer shadow-xl"
                style={{
                  backgroundImage: `url(https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/10/21/1107813/1558319247_Haugiang_.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 px-5 h-1/2">
                  <p className="text-lg">Tiêu đề</p>
                  <p className="defaultFont text-sm">
                    Chúng tôi cam kết mang đến trải nghiệm đặt vé đơn giản
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
