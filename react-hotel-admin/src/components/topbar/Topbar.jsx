import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./topbar.css"

export default function TopBar({token, deleteToken}) {
    const history = useHistory();

    const logout = () => {
        deleteToken();
        history.push("/");
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/">
                        <span className="logo">admin-logo</span>
                    </Link>
                </div>
                <div className="topRight">
                    {!token && (
                    <div>
                        <Link to="/login">
                            Sign in
                        </Link>
                    </div>
                    )}
                    {token && (
                        <div onClick={logout}>
                            Log out
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
