import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrash } from 'react-icons/fa';

const MyCreatedContest = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const [contests, setContests] = useState([])

  useEffect(() => {
    getData()
  }, [user])

  const getData = async () => {
    const { data } = await axiosSecure(`/contests/${user?.email}`)
    setContests(data)
  }

  const handleDelete = async id => {
    try {
      const { data } = await axiosSecure.delete(`/contest/${id}`)
      console.log(data)
      toast.success('Delete Successful')

      //refresh ui
      getData()
    } catch (err) {
      console.log(err.message)
      toast.error(err.message)
    }
  }
  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>My added contests</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {contests.length} contest
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Contest Name</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Status</span>
                    </th>

                    {/* <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                        <span>Price</span>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                        <span>Prize Money</span>
                    </th> */}

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Description
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {contests.map(contest => (
                    <tr key={contest._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {contest.contest_name}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(contest.deadline).toLocaleDateString()}
                      </td>
                      <td className='py-4 text-gray-500  whitespace-nowrap bg-yellow-300 rounded-xl text-center text-3xl font-semibold'>
                        {contest.status}
                      </td>

                      {/* <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        ${contest.contest_price}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        ${contest.prize_money}
                      </td> */}
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                            className={`px-3 py-1 ${
                              contest.category === 'Web Development' &&
                              'text-blue-500 bg-blue-100/60'
                            } ${
                              contest.category === 'Graphics Design' &&
                              'text-emerald-500 bg-emerald-100/60'
                            } ${
                              contest.category === 'Digital Marketing' &&
                              'text-pink-500 bg-pink-100/60'
                            } text-xs  rounded-full`}
                          >
                            {contest.category}
                          </p>
                        </div>
                      </td>
                      <td
                        title={contest.description}
                        className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                      >
                        {contest.description.substring(0, 18)}...
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <button
                            onClick={() => handleDelete(contest._id)}
                            className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                          >
                           <FaTrash></FaTrash>
                          </button>

                          <Link
                            to={`/dashboard/update/${contest._id}`}
                            className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                          >
                            Edit
                          </Link>
                          <Link
                            to={`/detailsContest/${contest._id}`}
                            className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                          >
                            details
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyCreatedContest;
