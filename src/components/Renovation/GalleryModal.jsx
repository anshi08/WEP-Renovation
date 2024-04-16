import React, { useEffect, useState } from 'react'
import image1 from "../../assets/RenovationFoodCourt1.png"
import image2 from "../../assets/RenovationFoodCourt2.png"
import image3 from '../../assets/RenovationFoodCourt3.png'
import image4 from "../../assets/FoodCourt4.png"
import image5 from "../../assets/FoodCourt5.png"
import image6 from "../../assets/FoodCourt6.png"
import image7 from "../../assets/FoodCourt7.png"
import image8 from "../../assets/FoodCourt8.png"
import image9 from "../../assets/FoodCourt9.png"
import image10 from "../../assets/FoodCourt10.png"
import image11 from "../../assets/FoodCourt11.png"
import image12 from "../../assets/FoodCourt12.png"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './GalleryModal.css'

const Images = [
    {
        "id": 1,
        "images": [image1, image2, image3],
        "titles": ['FOOD COURT', 'FOOD COURT', 'FOOD COURT']
    },
    {
        "id": 2,
        "images": [image4, image5, image6],
        "titles": ['PLAZA', 'PLAZA: BIRDSEYE VIEW', 'QUEEN ST ENTRANCE']
    },
    {
        "id": 3,
        "images": [image7, image8, image9],
        "titles": ['QUEEN ST ENTRANCE INTERIOR', 'PLAZA RESTAURANT OPPORTUNITY', 'PLAZA RESTAURANT OPPORTUNITY']
        
    },
    {
        "id": 4,
        "images": [image10, image11, image12],
        "titles": ['GROUND FLOOR RETAIL', 'GROUND FLOOR RETAIL', 'GROUND FLOOR RETAIL']
    }
]

const GalleryModal = ({ ImageId, setShowComponent, showComponent }) => {
   
    const selectedImage = Images.find(image => image.id === ImageId);
    const [currentIndex, setCurrentIndex] = useState(selectedImage.images.findIndex(img => img === ImageId));

   

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
    };

    const handleClose = () => {
        setShowComponent(false)
    };

    return (
        <>
            <div style={{ backgroundColor: 'black', padding: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '2rem' }}>
                    <CloseIcon onClick={handleClose} className='ArrowStyle2' />
                </div>
                <div className='flex justify-center'>
                    {/* {Images.find(image => image.id == ImageId && */}
                    <img src={selectedImage.images[currentIndex]} alt={`Image ${currentIndex + 1}`}
                        style={{ maxWidth: '70%', marginBottom: '10px' }} />
                    {/* )} */}
                </div>
                <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }}>
                    <ArrowBackIosIcon onClick={handlePrev} style={{
                        cursor: 'pointer', color: 'rgb(128,128,128)',
                        fontSize: '40px'
                    }} />
                </div>
                <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px' }}>
                    <ArrowForwardIosIcon onClick={handleNext} style={{
                        cursor: 'pointer', color: 'rgb(128,128,128)',
                        fontSize: '40px'
                    }} />
                </div>
            </div>
        </>
    )
}

export default GalleryModal


