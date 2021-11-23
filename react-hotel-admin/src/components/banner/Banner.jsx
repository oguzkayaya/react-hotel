import { CKEditor } from 'ckeditor4-react';
import React from 'react';
import "./banner.css";


export default function Banner({ value, setValue }) {
    return (
        <div className="banner-row">
            <div className="banner-text">
                <div>Banner Description</div>
                <CKEditor
                    initData={value.text}
                    onChange={({ editor }) => {
                        setValue(value => ({ ...value, text: editor.getData() }));
                    }}
                />
            </div>
            <div className="banner-image">
                <div>Banner Image</div>
                <CKEditor
                    initData={value.image}
                    onChange={({ editor }) => {
                        setValue(value => ({ ...value, image: editor.getData() }));
                    }}
                />
            </div>
        </div>
    )
}
