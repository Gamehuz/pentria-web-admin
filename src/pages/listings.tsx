import { GET_ALL_SPACES } from '@/apollo/query';
import ListingCard from '@/components/ListingCard';
import FrontLayout from '@/layout/FrontLayout';
import { useLazyQuery, useMutation } from '@apollo/client';
import { message } from 'antd';
import { useEffect, useState } from 'react';

const Listings = () => {

  
  const [lists, setLists] = useState([])
  const [approved, setApproved] = useState(false)

  const [getSpaces] = useLazyQuery(GET_ALL_SPACES, {
      onCompleted: (data) => {
        setLists(data.spaces)
      }
    });

  const conditionSpaces = (value: boolean) => {
    setApproved(value)
    getSpaces({
      variables: {
        approved: value
      }
    })
  }

  useEffect(() => {
    if (!lists.length) {
      conditionSpaces(true)
    }
  }, [])


  return (
    <FrontLayout>
      <main className='mt-20 lg:w-[80%] p-6'>
        <div className='lg:flex justify-between'>
        <div className='flex justify-between h-12 w-60 bg-[#f1f1f1] rounded-xl'>
          <button onClick={() => conditionSpaces(true)} className={approved ? 'bg-primaryColor rounded-xl text-white px-4': 'px-4'}>Approved</button>
          <button onClick={() => conditionSpaces(false)} className={approved ? 'px-4' : 'bg-primaryColor rounded-xl text-white px-4'}>Unapproved</button>
        </div>
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