import React from 'react'
import HeaderMenu from '../Components/HeaderMenu'
import Footer from '../Components/Footer'
import { ArrowRightOutlined } from '@ant-design/icons'

export default function VecuatoiPage() {
  return (
    <div>
        <HeaderMenu/>
        <div className='px-20 py-10'>
            <div className='grid grid-cols-4 gap-10'>
              <div className='col-span-3'>
            <h1 className='text-3xl'>Vé của tôi</h1>
              <div className=' w-full grid rounded-xl my-5 bg-green-100 grid-cols-4 gap-4 shadow-sm cursor-pointer hover:scale-105 duration-100 border-2 border-solid'>
                    <div className='w-full col-span-3 flex p-10   items-center rounded-lg justify-between text-center'>
                        <div className='text-2xl'>
                            <p>Bến Ninh Kiều</p>
                            <p>5h30</p>
                        </div>
                        <div className='defaultFont'>
                            <p>1 giờ </p>
                            <ArrowRightOutlined className='text-3xl text-green-500'/>
                            <p>chi tiết </p>
                        </div>
                        <div className='text-2xl'>
                            <p>Chợ Cái Răng</p>
                            <p>6h30</p>
                        </div>
                    </div>
                <div className='col-span-1 w-fit p-5'>
                    <img alt='qr-code' src='https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg'/>
                </div>
                </div>
                <div className=' w-full grid rounded-xl my-5 bg-green-100 grid-cols-4 gap-4 shadow-sm cursor-pointer hover:scale-105 duration-100 border-2 border-solid'>
                    <div className='w-full col-span-3 flex p-10   items-center rounded-lg justify-between text-center'>
                        <div className='text-2xl'>
                            <p>Bến Ninh Kiều</p>
                            <p>5h30</p>
                        </div>
                        <div className='defaultFont'>
                            <p>1 giờ </p>
                            <ArrowRightOutlined className='text-3xl text-green-500'/>
                            <p>chi tiết </p>
                        </div>
                        <div className='text-2xl'>
                            <p>Chợ Cái Răng</p>
                            <p>6h30</p>
                        </div>
                    </div>
                <div className='col-span-1 w-fit p-5'>
                    <img alt='qr-code' src='https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg'/>
                </div>
                </div>
                <div className=' w-full grid rounded-xl my-5 bg-green-100 grid-cols-4 gap-4 shadow-sm cursor-pointer hover:scale-105 duration-100 border-2 border-solid'>
                    <div className='w-full col-span-3 flex p-10   items-center rounded-lg justify-between text-center'>
                        <div className='text-2xl'>
                            <p>Bến Ninh Kiều</p>
                            <p>5h30</p>
                        </div>
                        <div className='defaultFont'>
                            <p>1 giờ </p>
                            <ArrowRightOutlined className='text-3xl text-green-500'/>
                            <p>chi tiết </p>
                        </div>
                        <div className='text-2xl'>
                            <p>Chợ Cái Răng</p>
                            <p>6h30</p>
                        </div>
                    </div>
                <div className='col-span-1 w-fit p-5'>
                    <img alt='qr-code' src='https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg'/>
                </div>
                </div>
                <div className=' w-full grid rounded-xl my-5 bg-green-100 grid-cols-4 gap-4 shadow-sm cursor-pointer hover:scale-105 duration-100 border-2 border-solid'>
                    <div className='w-full col-span-3 flex p-10   items-center rounded-lg justify-between text-center'>
                        <div className='text-2xl'>
                            <p>Bến Ninh Kiều</p>
                            <p>5h30</p>
                        </div>
                        <div className='defaultFont'>
                            <p>1 giờ </p>
                            <ArrowRightOutlined className='text-3xl text-green-500'/>
                            <p>chi tiết </p>
                        </div>
                        <div className='text-2xl'>
                            <p>Chợ Cái Răng</p>
                            <p>6h30</p>
                        </div>
                    </div>
                <div className='col-span-1 w-fit p-5'>
                    <img alt='qr-code' src='https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg'/>
                </div>
                </div>
              </div>

              <div className='col-span-1'>
                <h1 className='text-3xl'>Thanh toán</h1>
                <div className='w-full mt-5 p-5 bg-red-100 rounded-lg'>
                    <p>Chi tiết đơn giá:</p>
                    <div className='flex my-3 justify-between defaultFont'>
                        <p>Vé đi Chợ nổi</p>
                        <p>150.000đ</p>

                    </div>
                    <div className='flex my-3 justify-between defaultFont'>
                        <p>Vé đi Sông Hậu</p>
                        <p>100.000đ</p>

                    </div>
                    <div className='flex my-3 justify-between defaultFont'>
                        <p>Vé đi Cái Răng</p>
                        <p>150.000đ</p>

                    </div>
                    <div className='flex my-3 justify-between defaultFont'>
                        <p>Vé đi bến Ninh Kiều</p>
                        <p>100.000đ</p>

                    </div>
                    <div className='flex my-3 justify-between defaultFont'>
                        <p>Vé đi bến Chợ nổi</p>
                        <p>150.000đ</p>

                    </div>
                    <div className='h-1 w-full bg-green-500'></div>
                    <div className='flex my-3 justify-between'>
                        <p>Tổng: </p>
                        <p>800.000đ</p>

                    </div>

                    <div className='text-center p-2 cursor-pointer hover:scale-105 duration-100 bg-green-400 text-white rounded-sm'>
                        <p>Thanh toán</p>
                    </div>
                </div>
              </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}
