import { useLoaderData } from "react-router-dom";

const Home = () => {
  const contests = useLoaderData()
    return (
        <div>
            <h2>Home Page</h2>
            {
                contests.map((value, index, array) => <p>{value.contest_name}</p>)
            }
        </div>
    );
};

export default Home;