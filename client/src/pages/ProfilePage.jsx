import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import {User,Mail} from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'
import InputField from '../components/ui/InputField'
import Button from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'

const ProfilePage = () => {

  const {user,updateUser,loading:authLoading}=useAuth();
  const [formData,setFormData]=useState({name:"",email:""})
  const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    if(user){
      setFormData({name:user.name,email:user.email});
    }
  },[user]);

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setIsLoading(true);
    try{
      const response=await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE,{
        name:formData.name,
      });
      updateUser(response.data);
      toast.success("Profile updated successfully");
    } catch(error){
      toast.error(error.response ?. data ?.message || "Failed to update profile");
    } finally{
      setIsLoading(false);
    }
  }

  if(authLoading){
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="relative w-16 h-20">
          <div className="absolute inset-0 bg-white border border-violet-400 rounded-sm shadow-md animate-[book-flip_1.2s_infinite]" />
          <div className="absolute inset-0 bg-violet-100 border border-violet-300 rounded-sm shadow-md translate-x-1 translate-y-1" />
        </div>

        <p className="mt-6 text-lg font-semibold tracking-wide text-violet-700 animate-pulse">
          Loading your eBook Editor...
        </p>

        <style>
          {`
          @keyframes book-flip {
            0%, 100% {
              transform: rotateY(0deg);
            }
            50% {
              transform: rotateY(180deg);
            }
          }
        `}
        </style>
      </div>
    );
  }

  return (
    <DashboardLayout activeMenu="profile">
      <div className='max-w-2xl mx-auto px-5'>
        <h1 className='text-xl md:text-2xl font-bold text-slate-900 mb-2 mt-10'>Profile</h1>
        <p className='text-sm text-slate-600 mb-8'>Manage your account details</p>
        <div className='bg-white border border-slate-200 roudned-xl shadow-sm p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <InputField
              label='Full Name'
              name="name"
              type="text"
              icon={User}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              label='Email'
              name="email"
              type="email"
              icon={Mail}
              value={formData.email}
              disabled
            />
            <div className='flex justify-end'>
              <Button type="submit" isLoading={isLoading}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ProfilePage