/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const ContestCard = ({ contest }) => {
  const {
    _id,
    contest_name,
    deadline,
    category,
    image,
    contest_price,
    prize_money,
    task_submission,
    description} = contest || {}
  return (
<div className='w-full px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all' >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: {new Date(deadline).toLocaleDateString()}
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {category}
        </span>
      </div>
      <div className='flex'>
            <img src={image} alt="" className='w-1/2' />
            <div className='w-1/2 pl-3'>
              <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                {contest_name}
              </h1>

              <p title={description} className='mt-2 text-sm text-gray-600 '>
                {description.substring(0, 70)}...
              </p>
              <p className='mt-2 text-sm font-bold text-gray-600 '>
                Price:{contest_price}
              </p>
              <p className='mt-2 text-sm font-bold text-gray-600 '>
                Prize Money:{prize_money}
              </p>
              <p className='mt-2 text-sm font-bold text-gray-600 '>
                {/* Bid Count: {bid_count&& bid_count} */}
              </p>
            <Link to={`/detailsContest/${_id}`} className='btn btn-success w-full text-center'>Details</Link>
            </div>
      </div>
    </div>
  )
}

export default ContestCard
