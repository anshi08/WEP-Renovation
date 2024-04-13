import React, { useState } from 'react'
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
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Gallery.css"
import { motion } from 'framer-motion'

const GalleryImages = [
    {
        "id": 1,
        "image1": image1,
        "image2": image2,
        "image3": image3,
        "title1": 'FOOD COURT',
        "title2": 'FOOD COURT',
        "title3": 'FOOD COURT'
    },
    {
        "id": 2,
        "image1": image4,
        "image2": image5,
        "image3": image6,
        "title1": 'PLAZA',
        "title2": 'PLAZA: BIRDSEYE VIEW',
        "title3": 'QUEEN ST ENTRANCE'
    },
    {
        "id": 3,
        "image1": image7,
        "image2": image8,
        "image3": image9,
        "title1": 'QUEEN ST ENTRANCE INTERIOR',
        "title2": 'PLAZA RESTAURANT OPPORTUNITY',
        "title3": 'PLAZA RESTAURANT OPPORTUNITY'
    },
    {
        "id": 4,
        "image1": image10,
        "image2": image11,
        "image3": image12,
        "title1": 'GROUND FLOOR RETAIL',
        "title2": 'GROUND FLOOR RETAIL',
        "title3": 'GROUND FLOOR RETAIL'
    }
]

const Gallery = () => {

    const [selectedGalleryImage, setSelectedGalleryImage] = useState(GalleryImages[0])

    const handleNextContent = () => {
        const currentIndex = GalleryImages.findIndex((image) => image.id === selectedGalleryImage.id)
        const nextIndex = (currentIndex + 1) % GalleryImages.length;
        setSelectedGalleryImage(GalleryImages[nextIndex]);
    }

    const handlePrevContent = () => {
        const currentIndex = GalleryImages.findIndex(image => image.id === selectedGalleryImage.id);
        const prevIndex = (currentIndex - 1 + GalleryImages.length) % GalleryImages.length;
        setSelectedGalleryImage(GalleryImages[prevIndex]);
    };

    return (
        <>
            <div style={{ padding: '3rem' }}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                // style={{ padding: '3rem 0' }}

                >
                    <p className='gallery'>Gallery</p>
                </motion.div>
                {selectedGalleryImage &&
                    <>
                        <motion.div
                            key={selectedGalleryImage.id}
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1,
                                },
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1,
                                },
                            }}
                            viewport={{ once: true }}
                        >
                            <div class="row">
                                <div class="column">
                                    <img src={selectedGalleryImage.image1} alt="" style={{ width: "100%" }} />
                                    <p className='GalleryTitle'>{selectedGalleryImage.title1}</p>
                                </div>
                                <div class="column">
                                    <img src={selectedGalleryImage.image2} alt="" style={{ width: "100%" }} />
                                    <p className='GalleryTitle'>{selectedGalleryImage.title2}</p>
                                </div>
                                <div class="column">
                                    <img src={selectedGalleryImage.image3} alt="" style={{ width: "100%" }} />
                                    <p className='GalleryTitle'>{selectedGalleryImage.title3}</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className='flex justify-center' >
                            <div><WestIcon
                                onClick={handlePrevContent}
                                style={{ fontSize: '18px', color: 'rgb(123,124,125)', cursor: 'pointer' }} /></div>

                            <p className='pageNumber'>{selectedGalleryImage.id}/4</p>

                            <div><EastIcon
                                onClick={handleNextContent}
                                style={{ fontSize: '18px', color: 'rgb(123,124,125)', cursor: 'pointer' }} /></div>
                        </div>
                    </>
                }
            </div>


        </>
    )
}

export default Gallery