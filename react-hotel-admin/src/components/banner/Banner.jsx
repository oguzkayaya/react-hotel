import { CKEditor } from 'ckeditor4-react';
import React from 'react';
import "./banner.css";


export default function Banner({ bannerValue, setBannerList }) {
    return (
        <div className="banner-row">
            <div className="banner-text">
                <div>Banner Description</div>
                <CKEditor
                    initData={bannerValue.text}
                    onChange={({ editor }) => {
                        setBannerList(bannerList => {
                            return bannerList.map(banner => {
                                if(banner._id === bannerValue._id) {
                                    banner.text = editor.getData();
                                }
                                return banner;
                            })
                        });
                    }}
                />
            </div>
            <div className="banner-image">
                <div>Banner Image</div>
                <CKEditor
                    initData={bannerValue.image}
                    onChange={({ editor }) => {
                        setBannerList(bannerList => {
                            return bannerList.map(banner => {
                                if(banner._id === bannerValue._id) {
                                    banner.image = editor.getData();
                                }
                                return banner;
                            })
                        });
                    }}
                />
            </div>
        </div>
    )
}
