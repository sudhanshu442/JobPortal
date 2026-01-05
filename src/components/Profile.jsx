import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {  Contact, Mail, Pen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialogue from './UpdateProfileDialogue'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const isResume=true;
const Profile = () => {
  useGetAppliedJobs();
  const [open,setOpen]=useState(false);
  const { user } = useSelector(store => store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740" alt="profile" />
            </Avatar>
            <div className="">
              <h1 className="font-medium text-xl">{user?.name}</h1>
              <p className="text-sm">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={()=> setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phone}</span>
          </div>

        </div>
        <div className="my-5">
          <div className="flex items-center gap-4">
          {
            user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item,index)=><Badge key={index}>{item}</Badge>): <span>No Skills</span>
          }
        </div>

        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume? <a href={user?.profile?.resume}  target="_blank" rel="noopener noreferrer" className='text-blue-500 cursor-pointer w-full'>{user?.profile?.resumeOriginalName}</a>: <span>NA</span>
          }
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          <AppliedJobTable />
        </div>
        <UpdateProfileDialogue  className="bg-color-red" open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile