import axios from "axios";
import React, { useEffect, useState } from "react";
import Contest from "../../../Shard/Contest";
const TopContest = () => {
  const [contest, setContest] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/contestTop6`)
      .then((res) => {
        setContest(res.data);
      })
      .catch((error) => {
        console.error("Error fetching contest data:", error);
      });
  }, []);

  return (
    <div className="pt-16">
     
      <h4 data-aos="fade-right" className="text-2xl text-blue-500 text-center">Top #6 Contest</h4>
      <h2 data-aos="fade-left" className="text-5xl font-bold text-center">Top popular Contest </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {contest.map((contest) => <Contest contest={contest}></Contest>)}
      </div>
    </div>
  );
};

export default TopContest;
