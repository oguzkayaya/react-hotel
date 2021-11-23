import { InputLabel, OutlinedInput } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import "./hotels.css";

const axios = require('axios');


function Hotels({ setCurrentHotel }) {
    const [newHotelOpen, setNewHotelOpen] = useState(false);
    const [newHotelName, setNewHotelName] = useState("");
    const [hotelList, setHotelList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/hotels/`, {
            headers: { "auth-token": localStorage.getItem("token") }
        }).then((response) => {
            setHotelList(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }, [])

    const saveHotel = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/hotels/`, { hotelName: newHotelName }, {
            headers: { "auth-token": localStorage.getItem("token") }
        }).then((response) => {
            setHotelList((hotelList) => [...hotelList, { _id: response.data.savedHotel._id, name: response.data.savedHotel.name }])
            setNewHotelName("");
            setNewHotelOpen(false);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleModalClose = () => {
        setNewHotelOpen(false);
    }

    const setCurrentHotelUpdateStore = (hotel) => {
        setCurrentHotel(hotel);
        localStorage.setItem("currentHotel", JSON.stringify(hotel));
        history.push("/");
    }

    return (
        <div className="hotels-page">
            <div className="hotels-container">
                {hotelList.length === 0 ? "No Hotel" : hotelList.map((hotel) => (
                    <a href="#" className="hotel-item" key={hotel._id} onClick={() => setCurrentHotelUpdateStore(hotel)}>
                        {hotel.name}
                    </a>
                ))}
            </div>
            <div className="new-hotel-button">
                <Button onClick={() => setNewHotelOpen(true)}>New Hotel</Button>
            </div>
            <div>
                <Dialog
                    open={newHotelOpen}
                    onClose={handleModalClose}
                >
                    <DialogContent>
                        <div className="new-hotel-modal">
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="component-outlined">New Hotel Name</InputLabel>
                                <OutlinedInput id="component-outlined" value={newHotelName} onChange={(e) => setNewHotelName(e.target.value)} label="New Hotel Name" />
                            </FormControl>
                            <Button onClick={saveHotel}>Save</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>


    )
}

export default Hotels
