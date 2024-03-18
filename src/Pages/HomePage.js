import React from 'react'
import HeaderMenu from '../Components/HeaderMenu'
import SearchMain from '../Components/SearchMain'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <div className='relative'>
        <HeaderMenu className='shadow-lg z-100 relative'/>
        <div className='h-100 w-full relative z-0 '>
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
          <h1 className='text-4xl mt-10 pl-5'>Nội dung 1</h1>
        <div className='flex '>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 shadow-xl overflow-hidden hover:scale-110 duration-100 cursor-pointer rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 overflow-hidden hover:scale-110 duration-100 cursor-pointer shadow-xl rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 overflow-hidden hover:scale-110 duration-100 cursor-pointer shadow-xl rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
        </div>

        <h1 className='text-4xl mt-10 pl-5'>Nội dung 2</h1>
        <div className='flex '>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 overflow-hidden hover:scale-110 duration-100 cursor-pointer shadow-xl rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 overflow-hidden hover:scale-110 duration-100 cursor-pointer shadow-xl rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 overflow-hidden hover:scale-110 duration-100 cursor-pointer shadow-xl rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
        </div>

        <h1 className='text-4xl mt-10 pl-5'>Nội dung 3</h1>
        <div className='flex '>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 overflow-hidden hover:scale-110 duration-100 cursor-pointer shadow-xl rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 overflow-hidden hover:scale-110 duration-100 cursor-pointer shadow-xl rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
            <div className='w-1/3 m-5 h-48 order-solid grid grid-cols-5 border-2 overflow-hidden hover:scale-110 duration-100 cursor-pointer shadow-xl rounded-xl'>
                <div className='h-full col-span-2  bg-red-400'>
                    
                </div>
                <div className='col-span-3 w-full p-5'>
                    <h1 className='text-3xl'>Tiêu đề gì đó</h1>
                    <p>Nội dung gì đóNội dung gì đó 
                        Nội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đóNội dung gì đó</p>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
