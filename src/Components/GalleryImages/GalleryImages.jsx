import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import image1 from '../../assets/img7.jpg'
import image2 from '../../assets/img5.jpg'
import image3 from '../../assets/img6.jpg'

export const GalleryImages = () => {

    const images= [
        {
            original:image1
        },

        {
            original:image2
        },

        {
            original:image3
        }
    ]
  return (
    
    <div className='w-full h-auto  bg-slate-200 py-10'>
        <ImageGallery  items={images} />
    </div>
  )
}
