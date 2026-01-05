import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'


const filterArray = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Hyderabad", "Banglore", "Mumbai", "Pune"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40-1 lakh", "1-2 lakh", "2-3 lakh", "3-4 lakh"]
  },

]
const FilterCard = () => {
  return (
    <div className='w-full rounded-md bg-white p-3'>
      <h1 className='font-bold text-lg'>FilterJobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {
          filterArray.map((data, index) => (
            <div className="">
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} />
                      <Label>{item}</Label>
                    </div>
                  )
                }

                )
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard