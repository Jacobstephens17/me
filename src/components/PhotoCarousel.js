import axios from 'axios'
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../App.css'

const PhotoCarousel = () => {
    const [galleryImages, setGalleryImages] = useState();

    const getImages = () => {

        axios 
            .get('https://api.unsplash.com/photos/random/?client_id=3CUtCSs0mCAULF3oD1B4jp4tb5MtBk3MOSsK-TZZ1_Q')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }


    return (
        <div>
        <AliceCarousel
        items={galleryImages}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
      />
      </div> 
    )
}

export default PhotoCarousel;