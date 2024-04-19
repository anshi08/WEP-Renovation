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
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import './GalleryModal.css'

const Images = [
    {
        "images": [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12],
        "titles": ['FOOD COURT', 'FOOD COURT', 'FOOD COURT', 'PLAZA', 'PLAZA: BIRDSEYE VIEW',
            'QUEEN ST ENTRANCE', 'QUEEN ST ENTRANCE INTERIOR', 'PLAZA RESTAURANT OPPORTUNITY',
            'PLAZA RESTAURANT OPPORTUNITY', 'GROUND FLOOR RETAIL', 'GROUND FLOOR RETAIL', 'GROUND FLOOR RETAIL']
    }
]


const GalleryModal = ({ ImageId, setShowComponent, showComponent }) => {

    const selectedImage = Images[0]; // Assuming there's only one item in the Images array
    const [currentIndex, setCurrentIndex] = useState(selectedImage.images.findIndex(img => img === ImageId));

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedImage.images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + selectedImage.images.length) % selectedImage.images.length);
    };

    const handleClose = () => {
        setShowComponent(false)
    };

    const image = selectedImage.images[currentIndex];
    const title = selectedImage.titles[currentIndex];

    return (
        <>
            <div style={{ backgroundColor: 'black', padding: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '2rem' }}>
                    <CloseIcon onClick={handleClose} className='ArrowStyle2' />
                </div>
                <div className='flex justify-center'>
                    <img
                        src={image}
                        alt={title}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '70%', // Adjust as needed
                            marginBottom: '10px',
                            width: '70%', // Adjust as needed
                            height: '70%', // Adjust as needed
                        }}
                    />
                </div>
                    <div className="titleTextImage">{title}</div>
                <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }}>
                    <WestIcon onClick={handlePrev} style={{
                        cursor: 'pointer', color: 'rgb(128,128,128)',
                        fontSize: '40px'
                    }} />
                </div>
                <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px' }}>
                    <EastIcon onClick={handleNext} style={{
                        cursor: 'pointer', color: 'rgb(128,128,128)',
                        fontSize: '40px'
                    }} />
                </div>
            </div>
        </>
    )
}

export default GalleryModal



