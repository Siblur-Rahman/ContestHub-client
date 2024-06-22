import { useEffect, useState } from "react";
import usePaymentHistroy from "../hook/usePaymentHistroy";
import { Link } from "react-router-dom";


const Contest = ({contest}) => {
    const [paymentItem, setPamentItem]= useState([]);
    const [paymentHistroy] = usePaymentHistroy()
  
    {
        useEffect(()=>{
                setPamentItem(paymentHistroy.filter((item) => item.contestId==contest._id))
        })
      }
    return (
        <div
        data-aos="fade-up"
          key={contest?._id}
          className="card w-full rounded-lg shadow-xl"
        >
          <h2 className="text-xl font-semibold text-center pt-4">
            {contest?.contestName}
          </h2>
          <figure className="m-4">
            <div className="h-44 w-[500px] rounded-xl bg-base-300">
              <img
                className="h-44 rounded-xl mx-auto"
                src={contest?.image}
                alt={contest?.name}
              />
            </div>
          </figure>
          <h2 className="text-xl font-semibold text-center pt-4">
            {contest?.contestName}
          </h2>
          <div className="card-body p-4">
            <p>
              Category: {contest?.contestType} <br />
              Attempted count: {paymentItem.length} <br />
              Description: {contest?.contestDescription.slice(0, 20)}...{" "}
              <br />
            </p>

            <div className="card-actions flex justify-end grid-cols-3">
              <Link to={`/contest/${contest?._id}`}>
                <button className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
    );
};

export default Contest;