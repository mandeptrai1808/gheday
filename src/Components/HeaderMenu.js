import React from 'react'
import { CalendarOutlined, HomeOutlined, InboxOutlined, NotificationOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, NavLink } from "react-router-dom";
export default function HeaderMenu() {
  return (
    <div className='w-full menu px-10 h-20 bg-pBrown bg-opacity-100   text-yellow-500 flex justify-between items-center '>
        <div className='text-4xl '>
            GHEDAY
       </div>
       <div className='flex'>
       <NavLink  className='px-4 duration-100 flex items-center hover:text-yellow-200 hover:scale-110' to={"/"}>
            <HomeOutlined className='mr-1'/>
            Trang chủ
        </NavLink>
        <NavLink  className='px-4 duration-100 flex items-center hover:text-yellow-200 hover:scale-110' to={"/lichtrinh"}>
            <CalendarOutlined className='mr-1'/>
            Lịch trình
        </NavLink>
        <NavLink className='px-4 duration-100 flex items-center hover:text-yellow-200 hover:scale-110'  to={"/tintuc"}>
            <NotificationOutlined className='mr-1'/>    
            Tin tức
        </NavLink>
        <NavLink  className='px-4 duration-100 flex items-center hover:text-yellow-200 hover:scale-110' to={"/doitac"}>
            <TeamOutlined className='mr-1'/>
            Đối tác
        </NavLink>
        <NavLink  className='px-4 duration-100 flex items-center hover:text-yellow-200 hover:scale-110' to={"/vecuatoi"}>
            <InboxOutlined className='mr-1'/>
            Vé của tôi
        </NavLink>
        <div className='px-4 duration-100 flex items-center hover:text-yellow-200 hover:scale-110'  to={"/dangnhap"}>
            <UserOutlined/> 
            Nguyễn Văn A
        </div>
       </div>
    </div>
  )
}
