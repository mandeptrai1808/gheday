import React, { useState } from 'react';

const HotelSearchComponent = () => {
  const [searchParams, setSearchParams] = useState({
    departureDate: '',
    departureTime: '',
    pickupPoint: '',
    numberOfPeople: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tìm kiếm với các thông số:', searchParams);
    // Thêm logic tìm kiếm ở đây
  };

  return (
    <div className='mx-auto p-4'>
      <form onSubmit={handleSubmit} className='flex gap-4 p-2 bg-pOrange  rounded-xl'>
        <input
          type='date'
          name='departureDate'
          value={searchParams.departureDate}
          onChange={handleInputChange}
          className='p-2 border border-gray-300 rounded'
          placeholder='Ngày đi'
        />
        <input
          type='time'
          name='departureTime'
          value={searchParams.departureTime}
          onChange={handleInputChange}
          className='p-2 border border-gray-300 rounded'
          placeholder='Thời gian đi'
        />
        <input
          type='text'
          name='pickupPoint'
          value={searchParams.pickupPoint}
          onChange={handleInputChange}
          className='p-2 border border-gray-300 rounded'
          placeholder='Điểm đón'
        />
        <input
          type='number'
          name='numberOfPeople'
          value={searchParams.numberOfPeople}
          onChange={handleInputChange}
          className='p-2 border border-gray-300 rounded'
          placeholder='Số người đi'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default HotelSearchComponent;
