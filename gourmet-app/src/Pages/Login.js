import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  Input,
  Button,
  colors,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./CSS/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginValues = {
    email: "",
    password: "",
  };

  const signupValues = {
    name: "",
    email: "",
    password: "",
    phone_number: "",
  };
  const [lvalue, setLValue] = useState(loginValues);
  const [svalue, setSValue] = useState(signupValues);
  console.log(lvalue);
  console.log(svalue);

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("signup");
    const res = await fetch("/profile/signup", {
      meathod: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: svalue.name,
        email: svalue.email,
        password: svalue.password,
        phone_number: svalue.phone_number,
      }),
    });

    const data = await res.json();
    if (res.status === 404 || !data) {
      window.alert("Invalid Registration, Please try again");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful!");
      console.log("Registration Successful");
      navigate("/login");
    }
  };

  return (
    <div className="main">
      <div className="image">Gourmet.</div>
      <div className="form-container">
        <div className="login-form">
          <form id="form1">
            <h1>Login</h1>
            <div className="input-container">
              <TextField
                sx={{ m: 1, width: "25ch" }}
                className="input"
                id="outlined-basic"
                label="Email"
                variant="standard"
                value={lvalue.email}
                onChange={(e) =>
                  setLValue({ ...lvalue, email: e.target.value })
                }
              />
              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={lvalue.password}
                  onChange={(e) =>
                    setLValue({ ...lvalue, password: e.target.value })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                variant="outlined"
                sx={{
                  color: "#f50000",
                  borderColor: "#f50000",
                  margin: "30px",
                }}
                className="btn"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="signup-form">
          <form id="form2">
            <h1>Sign Up</h1>
            <div className="input-container">
              <TextField
                sx={{ m: 1, width: "25ch" }}
                className="input"
                id="standard-basic"
                label="Name"
                variant="standard"
                value={svalue.name}
                onChange={(e) => setSValue({ ...svalue, name: e.target.value })}
              />
              <TextField
                sx={{ m: 1, width: "25ch" }}
                className="input"
                id="standard-basic"
                label="Email"
                variant="standard"
                value={svalue.email}
                onChange={(e) =>
                  setSValue({ ...svalue, email: e.target.value })
                }
              />
              <TextField
                sx={{ m: 1, width: "25ch" }}
                className="input"
                id="standard-basic"
                label="Phone No."
                variant="standard"
                value={svalue.number}
                onChange={(e) =>
                  setSValue({ ...svalue, number: e.target.value })
                }
              />
              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={svalue.password}
                  onChange={(e) =>
                    setSValue({ ...svalue, password: e.target.value })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                variant="outlined"
                className="btn"
                onClick={handleSignUp}
                sx={{
                  color: "#f50000",
                  borderColor: "#f50000",
                  margin: "30px",
                }}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
