
import React from 'react';
import { TextField, FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton } from "@mui/material";
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
        <section id="back">
            <div className="login-container">
                <div className="login-form">
                    
                    <form id="form1">
                    <h1>Login</h1>
                        <div className="input-container">
                        <TextField className="input" id="outlined-basic" label="Email" variant="outlined" />
                        {/* <TextField className="input" id="outlined-basic" label="Password" variant="outlined" /> */}
                        <FormControl id="pass" sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                            
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={<InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        </div>
                    </form>
                </div>
                <div className="signup-form">
                    <form id="form2">
                        <h1>Sign Up</h1>
                        <div className="input-container">
                        <TextField className="input" id="outlined-basic" label="Name" variant="outlined" />
                        <TextField className="input" id="outlined-basic" label="Email" variant="outlined" />
                        <FormControl id="pass2" sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                            
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={<InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        </div>
                    </form>
            </div>
            </div>
        </section>
    );
}

export default Login;