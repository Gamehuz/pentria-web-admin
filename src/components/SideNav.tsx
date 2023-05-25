import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"

const SideNav = ({ toggle }: { toggle: boolean }) => {
  const router = useRouter()

  // useEffect(() => {
  //   console.log(user)
  // }, [])

  return (
    <div className={toggle ? 'lg:w-[20%] w-[80%] ' : ""}>
      {
        toggle && <div className='sm:absolute sm:z-10 bg-white'>
          <div className='lg:fixed lg:w-[20%]  h-screen shadow'>
            <div>
              <Link href={"/listing"}>
                <div className={router.pathname.includes("listing") ? "bg-primaryColor flex w-full mt-28 p-4 pl-10 text-white" : 'flex w-full p-4 pl-10 mt-28'}>
                  <div className={router.pathname.includes("listing") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                    <img src="/images/folder-open.png" className='w-6 h-6' alt="" />
                  </div>
                  <p className='my-auto font-bold ml-6'>Listing</p>
                </div>
              </Link>
              <Link href={"/vendors"}>
                <div className={router.pathname.includes("vendors") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
                  <div className={router.pathname.includes("vendors") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                    <img src="/images/user.png" className='w-6 h-6' alt="" />
                  </div>
                  <p className='my-auto font-bold ml-6'>Vendors</p>
                </div>
              </Link>
              <Link href={"/guests"}>
                <div className={router.pathname.includes("guests") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
                  <div className={router.pathname.includes("guests") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                    <img src="/images/user.png" className='w-6 h-6' alt="" />
                  </div>
                  <p className='my-auto font-bold ml-6'>Guests</p>
                </div>
              </Link>
              <Link href={"/tickets"}>
                <div className={router.pathname.includes("tickets") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
                  <div className={router.pathname.includes("tickets") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                    <img src="/images/book.png" className='w-6 h-6' alt="" />
                  </div>
                  <p className='my-auto font-bold ml-6'>Tickets</p>
                </div>
              </Link>
              {/* <Link href={"/payments"}>
                <div className={router.pathname.includes("payments") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
                  <div className={router.pathname.includes("payments") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                    <img src="/images/wallet.png" className='w-6 h-6' alt="" />
                  </div>
                  <p className='my-auto font-bold ml-6'>Payments</p>
                </div>
              </Link> */}
              <Link href={"/reports"}>
                <div className={router.pathname.includes("reports") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
                  <div className={router.pathname.includes("reports") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                    <img src="/images/book.png" className='w-6 h-6' alt="" />
                  </div>
                  <p className='my-auto font-bold ml-6'>Reports</p>
                </div>
              </Link>

              <Link href={"/vendor/settings"}>
                <div className={router.pathname.includes("settings") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
                  <div className={router.pathname.includes("settings") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                    <img src="/images/setting-4.png" className='w-6 h-6' alt="" />
                  </div>
                  <p className='my-auto font-bold ml-6'>Settings</p>
                </div>
              </Link>
            </div>

            <Link href={"/auth/login"}>
              <div className="flex w-full mt-32 p-4 pl-10 ">
                <div className="text-red-500">
                  <img src="/images/logout.png" className='w-6 h-6' alt="" />
                </div>
                <p className='my-auto font-bold ml-6'>Logout</p>
              </div>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default SideNav;