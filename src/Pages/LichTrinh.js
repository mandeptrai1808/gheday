import React from 'react'
import HeaderMenu from '../Components/HeaderMenu'
import { SearchOutlined, SwapOutlined } from '@ant-design/icons'
import Footer from '../Components/Footer'
import { Space, Table } from 'antd';
export default function LichTrinh() {
  const dataSource = [
    {
      'key': '1',
      'name': 'Mike',
      'age': 32,
      'address': '10 Downing Street',
  },
  {
      'key': '2',
      'name': 'John',
      'age': 42,
      'address': '10 Downing Street',
  },
  {
      'key': '3',
      'name': 'Alice',
      'age': 25,
      'address': '221B Baker Street',
  },
  {
      'key': '4',
      'name': 'Emily',
      'age': 35,
      'address': '221B Baker Street',
  },
  {
      'key': '5',
      'name': 'David',
      'age': 28,
      'address': '7 Privet Drive',
  },
  {
      'key': '6',
      'name': 'Sarah',
      'age': 39,
      'address': '7 Privet Drive',
  },
  {
      'key': '7',
      'name': 'Daniel',
      'age': 45,
      'address': '4 Privet Drive',
  },
  {
      'key': '8',
      'name': 'Emma',
      'age': 27,
      'address': '4 Privet Drive',
  },
  {
      'key': '9',
      'name': 'Oliver',
      'age': 36,
      'address': '12 Grimmauld Place',
  },
  {
      'key': '10',
      'name': 'Sophia',
      'age': 31,
      'address': '12 Grimmauld Place',
  },
  {
      'key': '11',
      'name': 'James',
      'age': 38,
      'address': 'Number 4, Privet Drive',
  },
  {
      'key': '12',
      'name': 'Charlotte',
      'age': 29,
      'address': 'Number 4, Privet Drive',
  },
  {
      'key': '13',
      'name': 'William',
      'age': 41,
      'address': '12 Grimmauld Place',
  },
  {
      'key': '14',
      'name': 'Amelia',
      'age': 34,
      'address': '12 Grimmauld Place',
  },
  {
      'key': '15',
      'name': 'Benjamin',
      'age': 33,
      'address': '221B Baker Street',
  },
  {
      'key': '16',
      'name': 'Ava',
      'age': 30,
      'address': '221B Baker Street',
  },
  {
      'key': '17',
      'name': 'Michael',
      'age': 37,
      'address': '10 Downing Street',
  },
  {
      'key': '18',
      'name': 'Mia',
      'age': 26,
      'address': '10 Downing Street',
  },
  {
      'key': '19',
      'name': 'Ethan',
      'age': 43,
      'address': '4 Privet Drive',
  },
  {
      'key': '20',
      'name': 'Isabella',
      'age': 24,
      'address': '4 Privet Drive',
  },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
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
