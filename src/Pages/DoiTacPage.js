import React from "react";
import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";

export default function DoiTacPage() {
  return (
    <div>
      <HeaderMenu />
      <div className="px-20 py-10 text-center">
        <p className="text-3xl mb-10">Trở thành đối tác với Gheday!!!</p>
        <div className="defaultFont">
          <p>
            Cùng nhau chúng ta có thể làm nên điều kỳ diệu! Chúng tôi muốn mở
            cánh cửa hợp tác với các chủ ghe trên trang web Gheday.com để tạo ra
            những trải nghiệm du lịch độc đáo và không thể quên cho khách hàng
            của chúng tôi. 
            <br/>
            <br/>
            Với sự phát triển nhanh chóng của ngành công nghiệp
            du lịch, việc tìm kiếm các đối tác đáng tin cậy và chuyên nghiệp là
            một phần quan trọng để nâng cao trải nghiệm của khách hàng. Chúng
            tôi tin rằng sự hợp tác với Gheday.com sẽ mang lại những lợi ích to
            lớn cho cả hai bên. 
            <br/>
            <br/>
            
            Chúng tôi cam kết hỗ trợ và tạo điều kiện tốt
            nhất cho các chủ ghe trong việc quảng bá dịch vụ của họ và thu hút
            khách hàng mới thông qua nền tảng trực tuyến của chúng tôi. Bằng
            cách kết hợp các tài nguyên và kinh nghiệm của chúng tôi với sự độc
            đáo và chất lượng của dịch vụ của bạn, chúng ta có thể tạo ra những
            trải nghiệm du lịch tuyệt vời nhất cho khách hàng. 
            <br/>
            <br/>
            
            Hãy cùng nhau
            khám phá cơ hội và tiềm năng mà việc hợp tác với nhau mang lại.
            <br/>
            <br/>
          </p>
        </div>
        <a href="https://ghedaycompany.netlify.app/" className="inline-block w-96 mb-10 h-16 text-white text-2xl bg-red-500 rounded-xl cursor-pointer hover:bg-slate-800 duration-100">
            <p className="mt-4">
            Trở thành đối tác ngay

            </p>
        </a>
        <div
        className="w-full h-96"
        style={{
            backgroundImage: `url(https://btnmt.1cdn.vn/2019/03/04/h1_2.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >

        </div>
      </div>
      <Footer />
    </div>
  );
}
