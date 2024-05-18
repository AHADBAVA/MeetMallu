import React from 'react'

const Chat = () => {
  return (
    <div className='flex flex-col bg-gray-300 h-svh p-10'>
      <div className='bg-white rounded-lg w-[180px] text-center p-2 mb-5 h-[60px]'>
      <h1 className='font-[500] text-3xl mb-5 text-orange-500'>Meet<span className='text-green-500'>Mallu</span></h1>
      </div>
      <div className='flex justify-between items-center flex-row'>

        {/* Our screen  */}
        <div className='w-[700px] rounded-lg h-[450px] bg-red-300'>
          <img className='w-[100%] rounded-lg h-[100%]' src="/Screenshot 2024-05-18 232716.png" alt="" />
        </div>
        {/* Opposite screen  */}
        <div className='w-[700px] rounded-lg h-[450px] bg-red-300'>
          <img className='w-[100%] rounded-lg h-[100%]' src="/Screenshot 2024-05-18 232724.png" alt="" />
        </div>
      </div>

      {/* controlls section  */}
      <div className='p-2'>
        <select name="" id="" className='mr-5 w-[150px] outline-0 rounded-lg h-[40px]'>
          <option value="">Kollam</option>
          <option value="">TVM</option>
          <option value="">Alappuzha</option>
          <option value="">Malapuram</option>
          <option value="">Kozhikode</option>
          <option value="">Kottayam</option>
          <option value="">Idukki</option>
        </select>
      <button className='bg-blue-500 text-[20px] text-white rounded-lg mt-2 w-[100px] h-[40px]'>Next</button>
      </div>

    </div>
  )
}

export default Chat
