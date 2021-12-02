import { InputLabel, OutlinedInput } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import MyButton from "../../components/MyButton";
import "./login.css";

const axios = require('axios');

function Login({setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const history = useHistory();
    const [tokenResponse, setTokenResponse] = useState(null);

    const login = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, { email, password })
            .then(function (response) {
                setModalOpen(true);
                setTokenResponse(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleModalClose = () => {
        setModalOpen(false);
        setToken(tokenResponse);
        history.push("/hotels");
    }

    return (
        <div className="login-wrapper">

            <h1 className="login-header">Login</h1>

            <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput id="component-outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="component-outlined">Password</InputLabel>
                <OutlinedInput id="component-outlined" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
            </FormControl>

            <div className="login-button">
                <MyButton onClick={login}>Login</MyButton>
            </div>

            <div>
                <Dialog
                    open={modalOpen}
                    onClose={handleModalClose}
                >
                    <DialogContent>
                        <div className="login-modal">
                            Login successfuly
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <MyButton onClick={handleModalClose}>Continue</MyButton>
                    </DialogActions>
                </Dialog>
            </div>

        </div>
    )
}

export default Login;
