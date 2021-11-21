import { ArrowLeft, Timeline, TrendingUp, ViewCarousel } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router';
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
    const [panelMinimize, setPanelMinimize] = useState(true);
    const [pathname, setPathname] = useState("");

    let location = useLocation();
    useEffect(() => {
        setPathname(location.pathname)
    }, [location])
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
                            <li className={`sidebarListItem ${matchPath(pathname, {path: "/banner", exact: true})  ? "active" : ""}`}>
                                <ViewCarousel /> <div className="sidebar-item-text">Banner</div>
                            </li>
                        </Link>
                        <Link to="/analitics">
                            <li className={`sidebarListItem ${matchPath(pathname, {path: "/analitics", exact: true}) ? "active" : ""}`}>
                                <Timeline /> <div className="sidebar-item-text">Analitics</div>
                            </li>
                        </Link>
                        <Link to="/sales">
                            <li className={`sidebarListItem ${matchPath(pathname, {path: "/sales", exact: true}) ? "active" : ""}`}>
                                <TrendingUp /> <div className="sidebar-item-text">Sales</div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
