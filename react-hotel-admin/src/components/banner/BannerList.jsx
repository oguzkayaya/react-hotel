import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import MyButton from "../MyButton";
import Banner from './Banner';
import CustomSnackBar from "../../components/snackbar/CustomSnackBar";

export default function BannerList() {
    const initialBanner = {
        _id: -1,
        text: "Banner Header",
        image: "Banner Image",
    };

    const [bannerList, setBannerList] = useState([]);
    const [newBannerCount, setNewBannerCount] = useState(-1);
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        fetchBannerList();
    }, []);

    function fetchBannerList() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/content/banner`, {
            params: {
                currentHotel: JSON.parse(localStorage.getItem("currentHotel"))._id
            },
            headers: { "auth-token": localStorage.getItem("token") }
        }).then((response) => {
            setBannerList(response.data.banners);
        }).catch(function (error) {
            console.log(error);
        });
    }

    function saveBanner() {
        axios.post(`${process.env.REACT_APP_API_URL}/api/content/banner`, {
            bannerList: bannerList,
            currentHotel: JSON.parse(localStorage.getItem("currentHotel"))._id
        }, {
            headers: { "auth-token": localStorage.getItem("token") }
        }).then((response) => {
            fetchBannerList();
            setSuccessMessage(true);
        }).catch(function (error) {
            setErrorMessage(true);
        });
    }

    function addNewBanner() {
        setBannerList(bannerList => [...bannerList, { ...initialBanner, _id: newBannerCount }]);
        setNewBannerCount(newBannerCount => newBannerCount - 1);
    }

    function deleteBanner(id) {
        axios.delete(`${process.env.REACT_APP_API_URL}/api/content/banner/${id}`, {
            headers: { "auth-token": localStorage.getItem("token") }
        }).then((response) => {
            setSuccessMessage(true);
            setBannerList(bannerList => bannerList.filter(banner => banner._id !== id));
        }).catch(function (error) {
            setErrorMessage(true);
        });
    }

    return (
        <div>
            {bannerList.map((b, index) => (
                <div key={b._id}>
                    <div className="banner-header">
                        <h3 className="banner-index">Banner {index + 1}</h3>
                        <div className="banner-remove" onClick={() => deleteBanner(b._id)}>Remove</div>
                    </div>
                    <Banner bannerValue={b} setBannerList={setBannerList} />
                </div>
            ))}
            <div className="new-banner-button">
                <MyButton primary onClick={addNewBanner}>+</MyButton>
            </div>
            <div className="save-button" >
                <MyButton onClick={saveBanner}>Save</MyButton>
            </div>
            <div>
                {successMessage &&
                    <CustomSnackBar message="Successful" status="success" setClose={setSuccessMessage} />
                }
                {errorMessage &&
                    <CustomSnackBar message="Some error occured" status="error" setClose={setErrorMessage} />
                }
            </div>

        </div>
    )
}
