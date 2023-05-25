import { DELETE_SPACE } from '@/apollo/query';
import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useState, useRef } from 'react';

const ListingCard = ({ list }: { list: any }) => {

  const [deleteSpace, { loading }] = useLazyQuery(DELETE_SPACE, {
    variables: { spaceId: list._id },
    onCompleted: (data) => {
      console.log(data)
      window.location.reload();
    }
  })


  return (
    <div className='lg:flex my-2'>
      <img src={list.image[0]} className='lg:w-72 w-full h-32 rounded-xl' alt="" />
      <div className='my-auto lg:w-80 lg:ml-4 sm:my-2'>
        <p className='font-bold'>{list.name}</p>
        <p className='text-sm my-3'>{list.location}</p>
        <div className='flex my-auto'>
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star1.png" className='w-4 h-4' alt="" />
          <p className='text-xs ml-1'>4.0 Ratings </p>
        </div>
      </div>
      {/* <div className='bg-[#D8D1E9] p-3 rounded-md lg:mx-4 sm:my-3 lg:w-80'>
        <p className='my-1'>Description</p>
        <p className='text-sm'>{list.description}</p>
      </div> */}
      <div className='lg:w-20 flex justify-between text-sm'>
        <button className='border border-primaryColor lg:mx-2 text-primaryColor px-4 p-3 h-12 rounded-md my-auto'>Edit</button>
        <button onClick={() => deleteSpace()} className='bg-red-500 lg:mx-2 text-white p-3 px-4 h-12 rounded-md my-auto'> {loading ? "Deleting..." : "Delete"}</button>
      </div>


    </div>
  );
};

export default ListingCard;