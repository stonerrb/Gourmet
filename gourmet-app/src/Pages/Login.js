import React, { useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "./CSS/Login.css";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";
import { theme } from "../Components/Theme";
import { ThemeProvider } from "@mui/material";

function Login() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleSwitchForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="main">
      <ThemeProvider theme={theme}>
        <div className="login-bg">Gourmet.</div>
        <motion.div
          className="form-container"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          {showLoginForm ? <LoginForm /> : <SignupForm />}
          <Button
            sx={{ position: "absolute", bottom: "20vh" }}
            onClick={handleSwitchForm}
          >
            {showLoginForm
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in"}
          </Button>
        </motion.div>
      </ThemeProvider>
    </div>
  );
}

export default Login;
