import { InputLabel, OutlinedInput } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
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
                                if (banner._id === bannerValue._id) {
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
                <FormControl variant="outlined" fullWidth>
                    <OutlinedInput id="component-outlined" value={bannerValue.image} onChange={(e) => setBannerList(bannerList => {
                        return bannerList.map(banner => {
                            if (banner._id === bannerValue._id) {
                                banner.image = e.target.value;
                            }
                            return banner;
                        })
                    })} />
                </FormControl>
                <div className="banner-preview">
                    <img src={bannerValue.image} className="banner-img" />
                    <div className="banner-preview-text" dangerouslySetInnerHTML={{__html: bannerValue.text}}>
                    </div>
                </div>
            </div>
        </div>
    )
}
