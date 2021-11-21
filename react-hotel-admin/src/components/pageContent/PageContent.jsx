import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import BannerList from '../banner/BannerList';

export default function PageContent() {
    return (
        <div className="page-content">
            <Switch>
                <Route path="/banner">
                    <BannerList />
                </Route>
                <Route path="/analitics">
                    analitics
                </Route>
                <Route path="/sales">
                    sales
                </Route>
            </Switch>
        </div>
    )
}
