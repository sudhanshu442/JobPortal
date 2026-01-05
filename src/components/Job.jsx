import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Badge } from './ui/badge'
import { Avatar, AvatarImage } from './ui/avatar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { setSavedJobs } from "@/redux/jobSlice";
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
const Job = ({job}) => {
  
   const navigate=useNavigate();
   const daysAgoFunction=(mongodbTime)=>{
     const createdAt=new Date(mongodbTime);
     const currentTime=new Date();
     const timeDifference=currentTime-createdAt;
     return Math.floor(timeDifference/(1000*24*60*60));

     }
      const [saved, setSaved] = useState(false);
      const dispatch = useDispatch();
  const { savedJobs=[] } = useSelector(store => store.job);
  const toggleBookmark = async () => {
    try {
      const res = await axios.post(
      "http://localhost:8000/api/v1/job/bookmark/" + job._id, // ✅ Backend URL
        {},
        { withCredentials: true }
      );
          console.log("BOOKMARK RESPONSE:", res.data); // 🔥 ADD THIS

      if (res.data.success) {
        let updatedSavedJobs;

        if (res.data) {
          updatedSavedJobs = [...savedJobs, job];
        } else {
          updatedSavedJobs = savedJobs.filter(j => j._id !== job._id);
        }

        dispatch(setSavedJobs(updatedSavedJobs));
        toast.success(res.data.message);
      }
    } catch (error) {
          console.log("BOOKMARK ERROR:", error); // 🔥 ADD THIS

      toast.error("Something went wrong");
    }
  };
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className="flex items-center justify-between">
      <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt)===0? "Today": `${daysAgoFunction(job?.createdAt)} days ago`}</p>
      {/* <Button className={`rounded-full transition ${saved ? "bg-purple-600 text-white" : "text-gray-600"}`} variant="outline" size="icon"> */}
        {/* <Bookmark fill={saved ? "white" : "none"} /> */}
      {/* </Button> */}
      <Button
  onClick={toggleBookmark}
  className={`rounded-full ${
    saved ? "bg-purple-600 text-white" : "text-gray-600"
  }`}
  variant="outline"
  size="icon"
>
  <Bookmark fill={saved ? "bg-purple" : "none"} />

</Button>
      </div>
      <div className="flex items-center gap-2 my-2">
      <Button className="p-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src={job?.company?.logo}/>
        </Avatar>
      </Button>
      <div className="">
        <h1 className='text-lg font-medium'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
            <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position}</Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">{job?.jobType}</Badge>
            <Badge className="text-[#7209b7] font-bold" variant="ghost">{job?.salary}</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
          <Button onClick={()=>navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
          <Button className="bg-[#7209b7] text-white">Save for Later...</Button>
        </div>
    </div>
  )
}

export default Job