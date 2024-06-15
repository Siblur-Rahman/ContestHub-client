import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from "react-hook-form"

import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useAuth from '../../../hooks/useAuth'
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddContest = () => {
  const { register, handleSubmit } = useForm()
const axiosPublic = useAxiosPublic();
const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [startDate, setStartDate] = useState(new Date())

  const onSubmit = async (data) => {
     // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data)
    
    // const form = data
    // const contest_name = form.contest_name
    // const email = user.email
    // const deadline = startDate
    // const category = form.category
    // const image =  res.data.data.display_url
                
    // const contest_price = parseFloat(form.contest_price)
    // const prize_money = parseFloat(form.prize_money)
    // const task_submission = form.task_submission
    // const description = form.description
    const contestData = {
      contest_name:data.contest_name,
      deadline:startDate,
      category:data.category,
      image:res.data.data.display_url,
      contest_price:parseFloat(data.contest_price),
      prize_money:parseFloat(data.prize_money),
      task_submission:data.task_submission,
      description:data.description,
      status:'pending',
      creator: {
        email:user.email,
        name: user?.displayName,
        photo: user?.photoURL,
      }
    }
    try {
      const { data } =  await axiosSecure.post(
        `${import.meta.env.VITE_API_URL}/contest`,
        contestData
      )
      toast.success('Contest added Successfully!')
      navigate('/mycreatedcontest')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Add a Contest
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 '>
                Contest Name
              </label>
              <input
                id='contest_name'
                // name='contest_name'
                {...register('contest_name')}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 '>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                // name='email'
                // {...register('email')}
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 '>
                Category
              </label>
              <select
                // name='category'
                {...register('category')}
                id='category'
                className='border p-2 rounded-md'
              >
                <option value='Image Design'>Image Design</option>
                <option value='Article Writing'>Article Writing</option>
                <option value='Marketing Strategy'>Marketing Strategy</option>
                {/* <option value='Digital'>advertisement</option> */}
                {/* <option value='Gaming Review'>Gaming Review</option>
                <option value='Book Review,'>Business Idea</option>
                <option value='Movie Review'>Movie Review</option> */}
              </select>
            </div>
            <div>
              <label className='text-gray-700 '>
                Upload Image
              </label>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
            </div>
            <div>
              <label className='text-gray-700 '>
                Task Submission
              </label>
              <input
                id='task_submission'
                name='task_submission'
                {...register('task_submission')}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 '>
                Contest Price
              </label>
              <input
                id='contest_price'
                // name='contest_price'
                {...register('contest_price')}
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

            <div>
              <label className='text-gray-700 '>
                Prize Money
              </label>
              <input
                id='prize_money'
                // name='prize_money'
                {...register('prize_money')}
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 '>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            //   name='description'
            {...register('description')}
              id='description'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddContest;
