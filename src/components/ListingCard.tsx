import { UPDATE_SPACE } from '@/apollo/mutations';
import { DELETE_SPACE } from '@/apollo/query';
import { useLazyQuery, useMutation } from '@apollo/client';
import { message } from 'antd';
import Router from 'next/router'
import React, { useState, useRef } from 'react';
import ListingModal from '@/components/ListingModal'

const ListingCard = ({ list }: { list: any }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [modal, setModal] = useState(false)


  const [editSpace, {error }] = useMutation(UPDATE_SPACE, {
    // variables: {
    //   input: {
    //     ac: ac,
    //     beds: beds,
    //     category: category,
    //     cleaningSupplies: cleaning,
    //     description: description,
    //     facilityType: type,
    //     image: previewImages,
    //     kidFriendly: kidFriendly,
    //     kitchen: kitchen,
    //     location: location,
    //     name: name,
    //     outdoorSpace: outdoor,
    //     parking: parking,
    //     petFriendly: petFriendly,
    //     policies: policy,
    //     pool: pool,
    //     restRoom: restroom,
    //     spaceId: space?._id,
    //     videoGames: games,
    //     wifi: wifi,
    //     workspace: workspace
    //   }
    // },
    onCompleted: (data) => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: 'Listing update successfully!',
      });
      Router.reload()
    },
    onError: (error) => {
      console.log(error.message)
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })

  const [deleteSpace, { loading }] = useLazyQuery(DELETE_SPACE, {
    variables: { spaceId: list._id },
    onCompleted: (data) => {
      console.log(data)
    }
  })


  const approveElseListing = (spaceId: string, value: boolean) => {
    editSpace({
      variables: {
        input: {
          spaceId: spaceId,
          approved: !value
        }
      }
    })

  }


  return (
    <div className='lg:flex my-2'>
      {contextHolder}
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
        <button className='border border-primaryColor lg:mx-2 text-primaryColor px-4 p-3 h-12 rounded-md my-auto' onClick={() => Router.push(`/listings/${list._id}`)} >View</button>
        <button className='border border-primaryColor lg:mx-2 text-primaryColor px-4 p-3 h-12 rounded-md my-auto' onClick={() => setModal(true)}>Edit</button>
        <button onClick={() => approveElseListing(list._id, list.approved)} className='border border-primaryColor lg:mx-2 text-primaryColor px-4 p-3 h-12 rounded-md my-auto'>{list.approved ? 'Unapprove': 'Approve'}</button>
        <button onClick={() => deleteSpace()} className='bg-red-500 lg:mx-2 text-white p-3 px-4 h-12 rounded-md my-auto'> {loading ? "Deleting..." : "Delete"}</button>
      </div>

      <ListingModal modal={modal} setModal={() => setModal(!modal)} space={list} />
    </div>
  );
};

export default ListingCard;