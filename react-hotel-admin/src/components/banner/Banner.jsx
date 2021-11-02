import React, { useState } from 'react'
import { CKEditor } from 'ckeditor4-react';
import "./banner.css"


export default function Banner({value, setValue}) {

    return (
        <div className="banner-row">
            <div className="banner-header">
                <div>Banner Başlık</div>
                <CKEditor
                    initData={value.header}
                    onChange={({ editor }) => {
                        setValue(value => ({...value, header: editor.getData()}));
                    }}
                />
            </div>
            <div className="banner-description">
                <div>Banner İçerik</div>
                <CKEditor
                    initData={value.description}
                    onChange={({ editor }) => {
                        setValue(value => ({...value, description: editor.getData()}));
                    }}
                />
            </div>
            <div className="banner-image">
            <div>Banner Resim</div>
                <CKEditor
                    initData={value.image}
                    onChange={({ editor }) => {
                        setValue(value => ({...value, image: editor.getData()}));
                    }}
                />
            </div>
        </div>
    )
}
