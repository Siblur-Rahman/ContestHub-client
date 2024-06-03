import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DetailsContest = () => {
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
    description} = contest;
  const { user } = useAuth()
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-1/2 rounded-lg shadow-2xl" />
                <div className="w-1/2">
                <h1 className="text-5xl font-bold">{contest_name}</h1>
                <p className="py-6">{description}</p>
                <div>
                    <b>Task Submission:</b>{task_submission}
                </div>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsContest;