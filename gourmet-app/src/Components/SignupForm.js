import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
  Input,
  Button,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { theme } from "./Theme";

export default function SignupForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signupValues = {
    name: "",
    email: "",
    phone_number: "",
    password: "",
  };
  const [svalue, setSValue] = useState(signupValues);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { name, email, password, phone_number } = svalue;

    console.log("signup");
    const res = await fetch("/profile/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone_number,
      }),
    });

    const data = await res.json();
    if (res.status === 404 || !data) {
      window.alert("Sign Up Failed , Please try again");
      console.log("Sign Up err");
    } else {
      console.log("User Signed Up");
      localStorage.setItem("auth", "authenticated");
      navigate("/auth-success");
    }
  };

  return (
    <div className="signup-form">
      <ThemeProvider theme={theme}>
        <form id="form2">
          <Typography variant="h3" color={"secondary"} sx={{ mt: "12px" }}>
            Sign Up
          </Typography>
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
              onChange={(e) => setSValue({ ...svalue, email: e.target.value })}
            />
            <TextField
              sx={{ m: 1, width: "25ch" }}
              className="input"
              id="standard-basic"
              label="Phone No."
              variant="standard"
              value={svalue.phone_number}
              onChange={(e) =>
                setSValue({ ...svalue, phone_number: e.target.value })
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
              onClick={handleSignUp}
              className="btn"
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
      </ThemeProvider>
    </div>
  );
}
