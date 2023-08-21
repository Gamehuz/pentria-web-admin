import FrontLayout from '@/layout/FrontLayout';
import React, { ReactNode, useEffect, useState } from 'react';
import { Metadata } from 'next'
import router, { useRouter } from "next/router"
import { useMutation, useQuery } from '@apollo/client';
import { SINGLE_SPACE } from '@/apollo/query';
import { Spin, message } from 'antd';
import Link from 'next/link';
import { calcAvgRating } from '@/util/helper';

function Listing() {
  const { query } = useRouter();
  const [space, setSpace] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [exploreList, setExploreList] = useState<any>([])
  const [messageApi, contextHolder] = message.useMessage();
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState(0)

  useQuery(SINGLE_SPACE, {
    variables: {
      spaceId: query.id
    },
    onCompleted: data => {
      console.log(data)
      setLoading(false)
      setSpace(data.space)
      setReview(calcAvgRating(data.space.reviews))

    }
  })


  return (
    <FrontLayout>
      {contextHolder}
      {
        loading ? (
          <div className='text-center p-32'>
            <Spin size="large" />
          </div>
        ) : <main className='lg:px-20 px-4 py-10 mt-20'>
          <h3 className='font-bold text-2xl my-4'>{space.name}</h3>
          <div className='lg:flex justify-between'>
            <div className='flex w-full'> <img src="/images/map-pin.png" className='mr-4 w-8 h-8 my-auto' alt="" /> <p className='my-auto text-lg'>{space.location}</p></div>
          </div>
          <div className='lg:flex my-3'>
            <div className='w-full'>
              <img src={space.image[0]} className='rounded-md object-cover w-full h-[400px] lg:h-[600px]' alt="" />
            </div>
            {
              space.image.length > 1 && <div className='lg:w-[30%] sm:mt-6'>
                <img src={space.image[1]} className='rounded-md lg:h-[48%] object-cover lg:ml-4 mb-6' alt="" />
                <img src={space.image[2]} className='rounded-md lg:h-[48%] object-cover lg:ml-4' alt="" />
              </div>
            }
          </div>
          <div className='lg:flex justify-between'>
            <div className='flex justify-between lg:w-[70%] sm:text-xs'>
              <div>
                <p>Facility Type</p>
                <p>{space.facilityType}</p>
              </div>
              <div>
                <p>Beds</p>
                <p>{space.beds}</p>
              </div>
              <div>
                <p>Pool</p>
                <p>{space.pool ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p>WiFi</p>
                <p>{space.wifi ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p>Parking</p>
                <p>{space.parking ? 'Yes' : 'No'}</p>
              </div>
            </div>
            <div>
              {space.reviews?.length === 0 ? "No Reviews" : <div className='flex w-full sm:my-2 justify-between'>
                <div className={review >= 1 ? 'text-primaryColor mx-1' : 'cursor-pointer mx-1'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className={review >= 2 ? 'text-primaryColor mx-1' : 'cursor-pointer mx-1'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className={review >= 3 ? 'text-primaryColor mx-1' : 'cursor-pointer mx-1'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className={review >= 4 ? 'text-primaryColor mx-1' : 'cursor-pointer mx-1'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className={review >= 5 ? 'text-primaryColor mx-1' : 'cursor-pointer mx-1'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <p className='ml-4'>{review}.0 Reviews</p>
              </div>}
            </div>
          </div>
          <div className='lg:flex justify-between text-[#150831]'>
            <div className='lg:w-[68%]'>
              <div className='my-4'>
                <h3 className='font-bold text-2xl'>Description</h3>
                <p>{space.description}</p>
              </div>
              <div className='my-4'>
                <h3 className='font-bold text-2xl'>Guidelines/Policy</h3>
                <p>{space.policies}</p>
              </div>
            </div>
            <div className='lg:w-[30%]'>
              <h3 className='font-bold mb-4 text-2xl'>Menu</h3>
              {
                space.activities.map((activity: {
                  duration: ReactNode;
                  name: ReactNode;
                  timeUnit: string;
                  _id: string,
                  currency: ReactNode;
                  price: ReactNode; image: string | undefined;
                }, index: React.Key | null | undefined,) => (
                  <div key={index} className='flex justify-between'>
                    <img className='w-[40%] h-32' src={activity.image} alt="" />
                    <div className='w-1/2 my-auto'>
                      <p className='text-[#D78D06] font-bold'>{activity.currency} {activity.price} / <span className='text-xs'>{activity.duration} {activity.timeUnit}</span></p>
                      <h4 className='font-bold my-2'>{activity.name}</h4>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='my-6 lg:relative'>
            <div>
              <iframe
                width="100%" height="400"
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=${space.location}&t=k&z=10&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
          <div>
            {exploreList.length > 0 && <div>
              <div className='flex'>
                <div className='w-8 border-t border-white h-1 my-auto'></div>
                <p className='text-primaryColor text-sm'>Similar Spaces</p>
              </div>
              <div className='flex justify-between'>
                <h4 className='text-xl my-1 font-bold text-white'>Spaces to Go</h4>
                <Link href={"/explore"}>
                  <div className='flex'>
                    <p className='text-white text-sm my-auto'>Explore All</p>
                    <img src="/images/Arrow.png" className='w-4 h-2 ml-3 my-auto' alt="" />
                  </div>
                </Link>
              </div>
            </div>}
          </div>
        </main >
      }

    </FrontLayout >
  )
}

export default Listing