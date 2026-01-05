import React, { useState } from 'react';
import Navbar from '../shared/Navbar'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/Input'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/Utils/constant';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { setLoading } from '@/redux/authSlice';
import { Button } from '../ui/button';
const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        file: "",
        role: "",
    });
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("email", input.email);
        formData.append("password", input.password);
        formData.append("phone", input.phone);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));

        }
    }
    return (
        <div>
            <Navbar />
            <div>
                <section class="bg-gray-50 dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                            Signup */}
                        </a>
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Signup to your account
                                </h1>
                                <form class="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                                    <div>
                                        <Label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</Label>
                                        <Input type="text"
                                            value={input.name}
                                            name="name"
                                            onChange={changeEventHandler}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" />
                                    </div>
                                    <div>
                                        <Label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</Label>
                                        <Input type="email" value={input.email} name="email"
                                            onChange={changeEventHandler}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <Label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</Label>
                                        <Input type="password"
                                            value={input.password}
                                            name="password"
                                            onChange={changeEventHandler}
                                            placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <Label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</Label>
                                        <Input type="tel"
                                            value={input.phone}
                                            name="phone"
                                            onChange={changeEventHandler}
                                            placeholder="+91" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <Label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile</Label>
                                        <Input accept="image/ " type="file" onChange={changeFileHandler} className="cursor-pointer" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <RadioGroup className="flex items-center gap-4 my-5">
                                        <div className="flex items-center gap-3">
                                            <Input type="radio" name="role" value="student" checked={input.role === 'student'} onChange={changeEventHandler} className="cursor-pointer" />
                                            <Label htmlFor="r1" class="block text-sm font-medium text-gray-900 dark:text-white">Student</Label>
                                        </div>
                                        <div className="flex items-center gap-3" >
                                            <Input type="radio" name="role" value="recruiter" checked={input.role === 'recruiter'} onChange={changeEventHandler} className="cursor-pointer" color="antiquewhite" />
                                            <Label htmlFor="r2" class="text-sm font-medium text-gray-900 dark:text-white">Recruiter</Label>
                                        </div>
                                    </RadioGroup>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <Input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <Checkbox id="terms" />
                                                <Label htmlFor="terms" class="text-gray-500 dark:text-gray-300">Remember me</Label>
                                            </div>
                                        </div>
                                        {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                                    </div>
                                    {
                                        loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> :
                                            <Button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</Button>
                                    }
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account ? <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Signup