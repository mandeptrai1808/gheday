import React from "react";
import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";

export default function ProfilePage() {
  return (
    <div>
      <HeaderMenu />
      <div className="flex justify-center pt-10 pb-40">
      <div class="bg-white w-2/3  rounded-lg">
        <div class="px-4 py-5 sm:px-6 flex items-center">
            <div className="w-20 h-20 rounded-full bg-black mr-5"
             style={{
                backgroundImage: `url(https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >

            </div>
         <div>
         <h3 class="text-lg leading-6 font-medium text-gray-900">
            Nguyễn Văn Mặn
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Tôi có 1 niềm đam mê là đi ghe tàu sống nước!
          </p>
         </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Họ Tên</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Nguyễn Văn Mặn
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                man@gmail.com
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Số điện thoại:</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
               082 901 7516
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Địa chỉ</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Ninh Kiều
                <br />
                Cần Thơ
              </dd>
            </div>
            <div className="w-40 h-10 bg-red-500 flex items-center justify-center text-white">
              <p>Đăng xuất</p>
            </div>
          </dl>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
