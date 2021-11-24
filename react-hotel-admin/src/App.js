import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route, Switch
} from "react-router-dom";
import "./app.css";
import PageContent from "./components/pageContent/PageContent";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";
import Hotels from "./pages/hotels/Hotels";
import Login from "./pages/login/Login";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [currentHotel, setCurrentHotel] = useState(JSON.parse(localStorage.getItem("currentHotel")));


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
			<TopBar token={token} deleteToken={deleteTokenUpdateStore} currentHotel={currentHotel} setCurrentHotel={setCurrentHotel}/>
			<Switch>
				<Route path="/login">
					<Login setToken={setTokenUpdateStore} />
				</Route>
				<Route path="/hotels">
					<Hotels setCurrentHotel={setCurrentHotel} />
				</Route>
				<Route path="/">
					{token && <div className="container">
						<Sidebar />
						<PageContent currentHotel={currentHotel} />
					</div>
					}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
