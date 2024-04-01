import React from 'react'
import HeaderMenu from '../Components/HeaderMenu'
import SearchMain from '../Components/SearchMain'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <div className='relative'>
        <HeaderMenu className='shadow-lg fixed top-0 z-50'/>
        <div className='h-100 w-full relative z-1'>
        <div className='bg-slate-400 h-full w-full'
         style={{
            backgroundImage: `url(https://zalo-article-photo.zadn.vn/59c6337d0936e068b927#235298784)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
        </div>

          <div className='w-full h-full bg-black opacity-50 absolute top-0'>

          </div>
          <div className='absolute w-full h-full flex items-center justify-center top-0'>
                <div>
                <p className='mainText text-5xl mb-4 text-white text-center'>
                    Đi về miền Tây, Đã có Gheday
                </p>
                <div className="scale-125">
                <SearchMain/>
                </div>
                </div>
          </div>
        </div>

        <div className='px-20 pb-20'>
        <h1 className='text-4xl mt-10 pl-5 text-center'>Khuyến mãi nổi bật</h1>
        <div className='flex'>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://zalo-article-photo.zadn.vn/59c6337d0936e068b927#235298784)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Ưu đãi đặc biệt</h1>
                    <p className='defaultFont'>Giảm giá tour du lịch sông nước Cần Thơ</p>
                </div>
            </div>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://vietourist.com.vn/public/frontend/uploads/kceditor/images/cho-noi-mien-tay.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Combo khuyến mãi</h1>
                    <p className='defaultFont'>Du lịch sông nước và thưởng thức ẩm thực đặc sản miền Tây</p>
                </div>
            </div>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/6/6f/Pasar_terapung.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Khám phá vẻ đẹp miền Tây</h1>
                    <p className='defaultFont'>Giảm giá đặc biệt cho các gia đình</p>
                </div>
            </div>
        </div>

        <h1 className='text-4xl mt-10 pl-5 text-center'>Ghe phổ biến</h1>
        <div className='flex'>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://ghetau.vn/images/Ghetau/Taudulich/DL-16-09-2017-4.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Ghe 20 chổ</h1>
                    <p className='defaultFont'>Ghe sang trọng chất lương với 20 chổ ngồi</p>
                </div>
            </div>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://ghetau.vn/images/Ghetau/Taudulich/DL-16-09-2017-2.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Ghe 30 chổ</h1>
                    <p className='defaultFont'>Thoải mái hơn với 30 chổ ngồi</p>
                </div>
            </div>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://ghetau.vn/images/Dichvu/Muabanghetau/720_Thantau.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Ghe 45 chổ</h1>
                    <p className='defaultFont'>Thích hợp cho tour du lịch đông người</p>
                </div>
            </div>
        </div>

        <h1 className='text-4xl mt-10 pl-5 text-center'>Tin tức mới</h1>
        <div className='flex'>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://vcdn1-vnexpress.vnecdn.net/2023/11/02/DJI-0030-JPG-1698918991.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=tcj7tHMbfC94o6TInOsV0w)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Khám phá sông Hậu</h1>
                    <p className='defaultFont'>Du khách có cơ hội trải nghiệm vẻ đẹp</p>
                </div>
            </div>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://vcdn-vnexpress.vnecdn.net/2021/04/27/HINH-TREN-CAO-DIEM-SAT-LO-2020-6053-6687-1619495271.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Du lịch sông nước</h1>
                    <p className='defaultFont'>Các tour du ngoạn sông nước giúp du khách khám phá cuộc sống ven sông</p>
                </div>
            </div>
            <div className='w-1/3 mx-2 my-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer'>
                <div className='h-full col-span-2  bg-red-400' 
                 style={{
                    backgroundImage: `url(https://zalo-article-photo.zadn.vn/59c6337d0936e068b927#235298784)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Du lịch sinh thái</h1>
                    <p className='defaultFont'>Tìm hiểu về các khu bảo tồn thiên nhiên và các công trình du lịch sinh thái</p>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
