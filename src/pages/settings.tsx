import FrontLayout from '@/layout/FrontLayout';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PASSWORD, UPDATE_ADMIN } from '@/apollo/query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
  const [user, setUser] = useState<any>([])
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [address, setAddress] = useState(user.address)
  const [city, setCity] = useState(user.city)
  const [state, setState] = useState(user.state)

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [updateUser, { loading }] = useMutation(UPDATE_ADMIN, {
    variables: {
      firstName: firstName,
      lastName: lastName,
      editAdminInfoEmail2: email,
      phone: phone,
      address: address,
      city: city,
      state: state,
    },
    onCompleted: (data) => {
      console.log(data)
      toast.success('User Updated Successfully')
    },
    onError: (error) => {
      console.log(error)
      toast.error(error.message)
    }
  })

  const [updatePassword, { loading: passwordLoading }] = useMutation(UPDATE_PASSWORD, {
    variables: {
      oldPassword: password,
      newPassword: newPassword
    },
    onCompleted: (data) => {
      console.log(data)
      toast.success('Password Updated Successfully')
    }
  })
  return (
    <FrontLayout>
      <main className='mt-20 lg:w-[80%] p-6'>
        <h3 className='text-4xl font-bold'>Account Settings</h3>
        <div className='flex'>
          <div className='w-full'>
            <div className='flex flex-wrap justify-between'>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='First Name' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' className='border p-3 my-2 rounded-md w-full' />

              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder='State' className='border p-3 my-2 rounded-md w-[45%]' />

              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border p-3 my-2 rounded-md w-[45%]' />

              <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' className='border p-3 my-2 rounded-md w-[45%]' />
            </div>

            <p className='text-primaryColor float-right text-sm my-6 cursor-pointer' onClick={() => updatePassword()}> {passwordLoading ? "Loading..." : "Change Password"}</p>
            <div className='flex justify-between mt-16 w-full'>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Old Password' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password' className='border p-3 my-2 rounded-md w-[45%]' />
            </div>
          </div>
          <div className='w-[20%] text-center'>
            <img src="/images/team.png" className='w-32 h-32 mx-auto' alt="" />
            <button onClick={() => updateUser()} className='bg-primaryColor p-3 px-6 text-white mx-auto w-40 my-4 rounded-md'>{loading ? "Loading..." : "Update"}</button>
            <p className='cursor-pointer text-red-500'>Delete Account</p>
          </div>
        </div>
      </main>
      <ToastContainer />
    </FrontLayout>
  );
};

export default Settings;