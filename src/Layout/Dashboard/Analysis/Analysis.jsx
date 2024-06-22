import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Analysis = () => {
  const { user } = useContext(AuthContext);
  const [dbuser, setDbuser] = useState();
  useEffect(() => {
    axios
      .get(` ${import.meta.env.VITE_API_URL}/user/${user?.uid}`)
      .then((res) => {
        setDbuser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [user?.uid]);

  const displayName = user?.displayName || dbuser?.displayName;
  const email = dbuser?.email || user?.email;
  return (
    <div>
      <h2 className="text-2xl font-bold lg:py-32">Wel come</h2>
      <p>Your Name : {displayName}</p>
      <p>Your Email : {email}</p>
    </div>
  );
};

export default Analysis;
