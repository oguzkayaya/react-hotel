import React from 'react'
import "./topbar.css"

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">admin-logo</span>
                </div>
                <div className="topRight">right</div>
            </div>
        </div>
    )
}
