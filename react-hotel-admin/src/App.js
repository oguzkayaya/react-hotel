import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import "./app.css"
import BannerList from "./components/banner/BannerList";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";

function App() {
	return (
		<div>
			<TopBar />
			<div className="container">
				<Router>
					<Sidebar />
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
				</Router>
			</div>
		</div>
	);
}

export default App;
