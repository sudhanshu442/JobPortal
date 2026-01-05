import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useState } from 'react'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Portal } from "@radix-ui/react-portal"
import { JOB_API_END_POINT } from '@/Utils/constant'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import axios from 'axios'
const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    })
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company);
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value)
        setInput({ ...input, companyId: selectedCompany._id });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(false);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center m-screen py-5">
                <form onSubmit={submitHandler} className='p-8 max-w-4xl border-gray-200 shadow-lg rounded-md'>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="">
                            <Label>Title</Label>
                            <Input type="text" name="title" value={input.title} onChange={changeEventHandler} className="focus-visible:ring-offset-8 focus-visible:ring-8 my-1" />
                        </div>
                        <div className="">
                            <Label>Description</Label>
                            <Input type="text" name="description" value={input.description} onChange={changeEventHandler} className="focus-visible:ring-offset-8 focus-visible:ring-8 my-1" />
                        </div>
                        <div className="">
                            <Label>Requirements</Label>
                            <Input type="text" name="requirements" value={input.requirements} onChange={changeEventHandler} className="focus-visible:ring-offset-8 focus-visible:ring-8 my-1" />
                        </div>
                        <div className="">
                            <Label>Salary</Label>
                            <Input type="number" name="salary" value={input.Salary} onChange={changeEventHandler} className="focus-visible:ring-offset-8 focus-visible:ring-8 my-1" />
                        </div>
                        <div className="">
                            <Label>Location</Label>
                            <Input type="text" name="location" value={input.location} onChange={changeEventHandler} className="focus-visible:ring-offset-8 focus-visible:ring-8 my-1" />
                        </div>
                        <div className="">
                            <Label>Job Type</Label>
                            <Input type="text" name="jobType" value={input.jobType} onChange={changeEventHandler} className="focus-visible:ring-offset-8 focus-visible:ring-8 my-1" />
                        </div>
                        <div className="">
                            <Label>Experience</Label>
                            <Input type="text" name="experience" value={input.experience} onChange={changeEventHandler} className="focus-visible:ring-offset-8 focus-visible:ring-8 my-1" />
                        </div>
                        <div className="">
                            <Label>Position</Label>
                            <Input type="number" name="position" value={input.position} onChange={changeEventHandler} className="focus-visible:ring-offset-8 focus-visible:ring-8 my-1" />
                        </div>{
                            companies.length > 0 && (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a company" />
                                    </SelectTrigger>
                                    <Portal>
                                        <SelectContent className="z-[9999]" position="popper">
                                            <SelectGroup>
                                                {
                                                    companies.map((company) => {
                                                        return (
                                                            <SelectItem key={company?.name} value={company?.name?.toLowerCase()}>{company?.name}</SelectItem>
                                                        )
                                                    })
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Portal>
                                </Select>
                            )
                        }
                    </div>
                    &nbsp;
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Post New Job</button>
                    }
                    {
                        companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>* Please register a company first, before posting a jobs</p>
                    }
                </form>
            </div>
        </div>
    )
}

export default PostJob