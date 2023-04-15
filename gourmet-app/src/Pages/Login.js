import React, { useState } from 'react';
import { TextField, FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, Input, Button, colors } from "@mui/material";
import { motion } from "framer-motion";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./CSS/Login.css";
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';

function Login() {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleSwitchForm = () => {
        setShowLoginForm(!showLoginForm);
    }

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className='main'>
            <div className='image'>Gourmet.</div>
            <motion.div
                className="form-container"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.3, ease: "easeIn" }}
            >
                {showLoginForm ? <LoginForm /> : <SignupForm />}
                <Button sx={{position:'absolute' ,bottom:'20vh'}} onClick={handleSwitchForm}>
                    {showLoginForm ? "Don't have an account? Sign up" : "Already have an account? Log in"}
                </Button>
            </motion.div>
        </div>
    );
}

export default Login;
