import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import "./app.css"
import BannerList from "./components/banner/BannerList";
import PageContent from "./components/pageContent/PageContent";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const setTokenUpdateStore = (token) => {
		setToken(token);
		localStorage.setItem("token", token);
	} 
	const deleteTokenUpdateStore = () => {
		setToken(null);
		localStorage.removeItem("token");
	}
	return (
		<Router>
			<TopBar token={token} deleteToken={deleteTokenUpdateStore} />
			<Switch>
				<Route path="/login">
					<Login setToken={setTokenUpdateStore} />
				</Route>
				<Route path="/">
					<div className="container">
						<Sidebar />
						<PageContent />
					</div>
				</Route>
			</Switch>
			
		</Router>
	);
}

export default App;
