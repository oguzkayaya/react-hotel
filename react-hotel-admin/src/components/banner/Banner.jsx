import React, { useState } from 'react'
import { CKEditor } from 'ckeditor4-react';
import "./banner.css"


export default function Banner() {
    const [header, setHeader] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    return (
        <div className="banner-row">
            <div className="banner-header">
                <CKEditor
                    initData={<p>Hello from CKEditor 4!</p>}
                    onBlur={({ editor }) => {
                        setHeader(editor.getData());
                    }}
                />
            </div>
            <div className="banner-description">
                <CKEditor
                    initData={<p>Hello from CKEditor 4!</p>}
                    onBlur={({ editor }) => {
                        setDescription(editor.getData());
                    }}
                />
            </div>
            <div className="banner-image">
                <CKEditor
                    initData={<p>Hello from CKEditor 4!</p>}
                    onBlur={({ editor }) => {
                        setImage(editor.getData());
                    }}
                />
            </div>
        </div>
    )
}
