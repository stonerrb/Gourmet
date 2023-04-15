
import React, { useState } from 'react';
import { TextField, FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, Input, Button, colors } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const loginValues = {
        email: '',
        password: '',
    };

    const signupValues = {
        name: '',
        email: '',
        number: '',
        password: '',
    };
    const [lvalue, setLValue] = useState(loginValues);
    const [svalue, setSValue] = useState(signupValues);
  return (
    <div className="login-form">
                    <form id="form1">
                        <h1>Login</h1>
                        <div className="input-container">
                        <TextField sx={{ m: 1, width: '25ch' }} className="input" id="outlined-basic" label="Email" variant="standard" value={lvalue.email} onChange={(e) => setLValue({...lvalue, email: e.target.value})}/>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={lvalue.password}
                                    onChange={(e) => setLValue({...lvalue, password: e.target.value})}

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
                            <Button variant="outlined" sx={{color:'#f50000' ,borderColor:'#f50000',margin:'30px'}}className="btn">Login</Button>
                        </div>
                    </form> 
                   </div>
  )
}