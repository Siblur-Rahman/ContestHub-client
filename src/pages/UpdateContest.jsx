import {useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import useAuth from '../hooks/useAuth'

const UpdateContest = () => {
  const navigate = useNavigate()
  const contest = useLoaderData()
  const {
    _id,
    contest_name,
    deadline,
    category,
    image,
    contest_price,
    prize_money,
    task_submission,
    description} = contest || {};
  const { user } = useAuth()
  const [startDate, setStartDate] = useState(new Date(deadline) || new Date())
  const handleFormSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const contest_name = form.contest_name.value
    const email = form.email.value
    const deadline = startDate
    const category = form.category.value
    const image = form.image.value
    const contest_price = parseFloat(form.contest_price.value)
    const prize_money = parseFloat(form.prize_money.value)
    const task_submission = form.task_submission.value
    const description = form.description.value
    const contestData = {
      contest_name,
      deadline,
      category,
      image,
      contest_price,
      prize_money,
      task_submission,
      description,
      creator: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      }
    }
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/contest/${_id}`,
        contestData
      )
      console.log(data)
      toast.success('Contest added Successfully!')
      navigate('/my-created-contest')
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

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 '>
                Contest Name
              </label>
              <input
                id='contest_name'
                name='contest_name'
                type='text'
                defaultValue={contest_name}
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
                name='email'
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
                name='category'
                id='category'
                defaultValue={category}
                className='border p-2 rounded-md'
              >
                <option value='Image Design'>Image Design</option>
                <option value='Article Writing,'>Article Writing</option>
                <option value='Marketing Strategy,'>Marketing Strategy</option>
                <option value='Digital'>advertisement</option>
                <option value='Gaming Review'>Gaming Review</option>
                <option value='Book Review,'>Business Idea</option>
                <option value='Movie Review'>Movie Review</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700 '>
                Image URL
              </label>
              <input
                id='image'
                name='image'
                defaultValue={image}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 '>
                Task Submission
              </label>
              <input
                id='task_submission'
                name='task_submission'
                defaultValue={task_submission}
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
                name='contest_price'
                defaultValue={contest_price}
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
                name='prize_money'
                defaultValue={prize_money}
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
              name='description'
              defaultValue={description}
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

export default UpdateContest;
