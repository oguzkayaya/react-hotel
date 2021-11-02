import React, { useState } from 'react';
import Banner from './Banner';
import Button from "../Button";


export default function BannerList() {
    const [banner, setBanner] = useState({
        header: "Banner Header",
        description: "Banner Desctiption",
        image: "Banner İmage",
    })

    function saveBanner() {
        console.log(banner);    
    }


    return (
        <div>
            {banner.header} , {banner.description}, {banner.image}
            <Banner value={banner} setValue={setBanner} />

            <div className="save-button">
                <Button onClick={saveBanner}>KAYDET</Button>
            </div>
        </div>
    )
}
