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

export default function SignupForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signupValues = {
    name: "",
    email: "",
    number: "",
    password: "",
  };
  const [svalue, setSValue] = useState(signupValues);
  return (
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
            onChange={(e) => setSValue({ ...svalue, email: e.target.value })}
          />
          <TextField
            sx={{ m: 1, width: "25ch" }}
            className="input"
            id="standard-basic"
            label="Phone No."
            variant="standard"
            value={svalue.number}
            onChange={(e) => setSValue({ ...svalue, number: e.target.value })}
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
            sx={{ color: "#f50000", borderColor: "#f50000", margin: "30px" }}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
