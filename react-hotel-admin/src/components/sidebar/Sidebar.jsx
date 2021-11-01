import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, ArrowLeft, ViewCarousel } from '@material-ui/icons';

export default function Sidebar() {
    const [activeMenuItem, setActiveMenuItem] = useState("home");
    const [panelMinimize, setPanelMinimize] = useState(true);

    return (
        <div className={`sidebar ${panelMinimize ? 'panel-minimized' : ''}`}>
            <div className="sidebarWrapper">
                <div className="sidebar-minimize-button" onClick={() => { setPanelMinimize(!panelMinimize) }}>
                    <ArrowLeft />
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DASHBOARD</h3>
                    <ul className="sidebarList">
                        <Link to="/banner">
                            <li className={`sidebarListItem ${activeMenuItem === "home" ? "active" : ""}`} onClick={() => setActiveMenuItem("home")}>
                                <ViewCarousel /> <div className="sidebar-item-text">Banner</div>
                            </li>
                        </Link>
                        <Link to="/analitics">
                            <li className={`sidebarListItem ${activeMenuItem === "analitics" ? "active" : ""}`} onClick={() => setActiveMenuItem("analitics")}>
                                <Timeline /> <div className="sidebar-item-text">Analitics</div>
                            </li>
                        </Link>
                        <Link to="/sales">
                            <li className={`sidebarListItem ${activeMenuItem === "sales" ? "active" : ""}`} onClick={() => setActiveMenuItem("sales")}>
                                <TrendingUp /> <div className="sidebar-item-text">Sales</div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
