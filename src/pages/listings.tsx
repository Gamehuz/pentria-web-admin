import { GET_ALL_SPACES } from '@/apollo/query';
import ListingCard from '@/components/ListingCard';
import FrontLayout from '@/layout/FrontLayout';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

const Listings = () => {
  const [lists, setLists] = useState([])

  useQuery(GET_ALL_SPACES, {
    onCompleted: (data) => {
      setLists(data.spaces)
    }
  })

  return (
    <FrontLayout>
      <main className='mt-20 lg:w-[80%] p-6'>
        <div className='lg:flex justify-end'>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </div>
        <div className='mt-6'>
          {lists.length >= 1 ? <div>
            {
              lists.map((list, i) => (
                <ListingCard list={list} key={i} />
              ))
            }
          </div> : <div className='text-center text-3xl mt-28'>
            There is no Listing
            Available</div>}
        </div>
      </main>
    </FrontLayout>
  );
};

export default Listings;