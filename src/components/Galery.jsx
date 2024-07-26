
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

export default function Galery() {
    const [images,setImages] = useState([
        {
            itemImageSrc: '/images/image-product-1.jpg',
            thumbnailImageSrc: '/images/image-product-1-thumbnail.jpg',
            alt: 'Image 1'
        },
        {
            itemImageSrc: '/images/image-product-2.jpg',
            thumbnailImageSrc: '/images/image-product-2-thumbnail.jpg',
            alt: 'Image 2'
        },
        {
            itemImageSrc: '/images/image-product-3.jpg',
            thumbnailImageSrc: '/images/image-product-3-thumbnail.jpg',
            alt: 'Image 3'
        },
        {
            itemImageSrc: '/images/image-product-4.jpg',
            thumbnailImageSrc: '/images/image-product-4-thumbnail.jpg',
            alt: 'Image 4'
        },
        
    ]);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];


    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block',borderRadius:'20px' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block', borderRadius:'20px',width:'90px' }} />;
    }

    return (
        <div className="card sm:w-[500px]"> 
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={4} circular style={{ maxWidth: '640px'  }}
                showItemNavigators  item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        