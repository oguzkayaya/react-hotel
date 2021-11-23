import React from 'react';
import { Link, useHistory } from "react-router-dom";
import "./topbar.css";

export default function TopBar({ token, deleteToken, currentHotel, setCurrentHotel }) {
    const history = useHistory();

    const logout = () => {
        deleteToken();
        history.push("/");
    }

    const goHotelSelect = () => {
        history.push("/hotels");
        setCurrentHotel(null);
        localStorage.removeItem("currentHotel");
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/">
                        <span className="logo">admin-logo</span>
                    </Link>
                </div>
                <div>
                    {!token ? (
                        <div>
                            <Link to="/login">
                                Sign in
                            </Link>
                        </div>
                    ) : (
                        <div className="topbar-right">
                            <div>
                                <a href="#" onClick={() => goHotelSelect()}>
                                    {currentHotel?.name}
                                </a>
                            </div>
                            <div className="logout-button" onClick={logout}>
                                Log out
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
