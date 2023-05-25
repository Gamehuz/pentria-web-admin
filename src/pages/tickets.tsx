import { GET_ALL_TICKETS } from '@/apollo/query';
import FrontLayout from '@/layout/FrontLayout';
import { useQuery } from '@apollo/client';
import React, { ReactNode, useState } from 'react';

const Tickets = () => {
  const [lists, setLists] = useState<any>([])

  useQuery(GET_ALL_TICKETS, {
    onCompleted: data => {
      console.log(data);
      setLists(data.transactions)
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
          <table className='w-full'>
            <thead className='bg-gray-300'>
              <tr>
                <td className='p-2'>User</td>
                <td>Email</td>
                <td>Amount</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {lists.map((item: {
                currency: ReactNode; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; amount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined;
              }, index: React.Key | null | undefined) => (
                <tr key={index}>
                  <td className='p-2'>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.currency} {item.amount}</td>
                  <td><span className='text-green-500'>{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </FrontLayout>
  );
};

export default Tickets;