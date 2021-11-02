import React from 'react';
import Banner from './Banner';
import Button from "../Button";

export default function BannerList() {
    return (
        <div>
            <Banner />

            <div className="save-button">
                <Button>KAYDET</Button>
            </div>
        </div>
    )
}
