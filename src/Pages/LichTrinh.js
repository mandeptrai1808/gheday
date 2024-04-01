import React from 'react'
import HeaderMenu from '../Components/HeaderMenu'
import { SearchOutlined, SwapOutlined } from '@ant-design/icons'
import Footer from '../Components/Footer'
import { Space, Table } from 'antd';
export default function LichTrinh() {
  const dataSource = [
    {
      'key': '1',
      'tuyenGhe': 'Tuyến 1',
      'loaiGhe': 'Ghế A',
      'quangDuong': '100 km',
    },
    {
      'key': '2',
      'tuyenGhe': 'Tuyến 2',
      'loaiGhe': 'Ghế B',
      'quangDuong': '150 km',
    },
    {
      'key': '3',
      'tuyenGhe': 'Tuyến 3',
      'loaiGhe': 'Ghế C',
      'quangDuong': '200 km',
    },
  ];
  
  const columns = [
    {
      title: 'Tuyến ghe',
      dataIndex: 'tuyenGhe',
      key: 'tuyenGhe',
    },
    {
      title: 'Loại ghe',
      dataIndex: 'loaiGhe',
      key: 'loaiGhe',
    },
    {
      title: 'Quãng đường',
      dataIndex: 'quangDuong',
      key: 'quangDuong',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button className='bg-pOrange py-2 cursor-pointer duration-150 hover:scale-110 px-5 rounded-full text-white shadow-lg'>Đặt vé</button>
        </Space>
      ),
    },
  ];
  
  return (
    <div>
        <HeaderMenu/>

        {/* Search lịch trình  */}
        <div className='flex items-center justify-center py-5'>
          <div className='flex items-center w-1/3 border-solid border-2 p-2 mx-2 rounded-full border-slate-400'>
          <SearchOutlined className='text-2xl mx-5 opacity-50'/>
          <input className='w-full' type='text' name='diemDi'  placeholder='Nhập điểm đi'/>
          </div>
          <div className='w-12 h-12 hover:scale-110 duration-100 hover:rotate-180 cursor-pointer flex justify-center items-center text-2xl bg-pOrange text-white rounded-full'>
          <SwapOutlined/>
          </div>
          <div className='flex items-center w-1/3 border-solid border-2 p-2 mx-2 rounded-full border-slate-400'>
          <SearchOutlined className='text-2xl mx-5 opacity-50'/>
          <input className='w-full' type='text' name='diemDi'  placeholder='Nhập điểm đến'/>
          </div>
        </div>

        {/* Bảng lịch trình  */}
        <div className='px-48'>
          <Table e dataSource={dataSource} columns={columns} />;
        </div>
    <Footer/>        
    </div>
  )
}
