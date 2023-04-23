import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/");
    } else {
      navigate("/auth-success");
    }
  }, [navigate]);

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
