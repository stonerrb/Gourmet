
import React from 'react';
import { TextField, FormControl, InputAdornment, InputLabel, IconButton, Input, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./CSS/Login.css";

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    return (
        <dic className='main'>
            <div className='image'>Gourmet.</div>
                <div className="form-container">  
                <div className="login-form">
                        <h1>Login</h1>
                        <div className="input-container">
                            <TextField sx={{ m: 1, width: '25ch' }} className="input" id="outlined-basic" label="Email" variant="standard" />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
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
                   </div>
                <div className="signup-form">
                    <form id="form2">
                        <h1>Sign Up</h1>
                        <div className="input-container">
                            <TextField sx={{ m: 1, width: '25ch' }} className="input" id="standard-basic" label="Name" variant="standard" />
                            <TextField sx={{ m: 1, width: '25ch' }} className="input" id="standard-basic" label="Email" variant="standard" />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
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
                            <Button variant="outlined" className="btn" sx={{color:'#f50000' ,borderColor:'#f50000',margin:'30px'}}>Sign Up</Button>
                        </div>
                    </form>
                </div>
                </div>
        </dic>
    );
}

export default Login;