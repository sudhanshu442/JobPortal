import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'


const randomJobs = [
  {
    _id: '1',
    title: 'Frontend Developer',
    description: 'React developer needed',
    position: 'Frontend',
    jobType: 'Full Time',
    salary: '6-8 LPA',
    createdAt: new Date(),
    company: {
      name: 'Google',
      logo: 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-logo-vector-png-image_12256710.png',
    },
  },
  {
    _id: '2',
    title: 'Backend Developer',
    description: 'Node.js developer needed',
    position: 'Backend',
    jobType: 'Remote',
    salary: '8-10 LPA',
    createdAt: new Date(),
    company: {
      name: 'Amazon',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZoPxHxiJ8nsrZTejjkVOIWcBlJt1D0KhLQ&s',
    },
  },
  {
    _id: '3',
    title: 'Full Stack Developer',
    description: 'MERN stack role',
    position: 'Full Stack',
    jobType: 'Hybrid',
    salary: '10-12 LPA',
    createdAt: new Date(),
    company: {
      name: 'Microsoft',
      logo: 'https://i.pinimg.com/736x/47/81/21/478121a474c601779e6b45ceb06733f9.jpg',
    },
  },
]
const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="font-bold text-xl my-10">Search results ({randomJobs.length})</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        randomJobs.map((job) => {console.log(randomJobs)
                            return (
            <Job key={job._id} job={job} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse