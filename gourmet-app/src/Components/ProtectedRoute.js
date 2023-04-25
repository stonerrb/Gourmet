import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;

  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
    async function fetchData() {
      const response = await fetch("/profile/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      const data = await response.json();
      console.log(data);
      console.log(data.success);
      console.log(data.user);
      if (data.success === false) {
        navigate("/login");
      } else if (
        data.success === true &&
        localStorage.getItem("username") !== data.user
      ) {
        navigate("/login");
      }
    }
    fetchData();
  }, [navigate]);

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
