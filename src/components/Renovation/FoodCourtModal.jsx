import React, { useEffect, useState } from 'react';
import img1 from "../../assets/Modal1.png";
import img2 from "../../assets/Modal2.png";
import img3 from "../../assets/Modal3.png";
import img4 from "../../assets/Modal4.png";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './FoodCourtModal.css'

const FoodCourtModal = ({ showComponent, setShowComponent }) => {

  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentIndex(randomIndex);
  }, [showComponent]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    setShowComponent(false)
  };

  return (
    <div style={{ backgroundColor: 'black', padding: '20px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '1rem', right: '2rem' }}>
        <CloseIcon onClick={handleClose} className='ArrowStyle1' />
      </div>
      <div className='flex justify-center'>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} 
        style={{ maxWidth: '70%', marginBottom: '10px' }} />
      </div>
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }}>
        <ArrowBackIosIcon onClick={handlePrev} style={{ cursor: 'pointer', color: 'rgb(128,128,128)',
        fontSize:'40px' }} />
      </div>
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px' }}>
        <ArrowForwardIosIcon onClick={handleNext} style={{ cursor: 'pointer', color: 'rgb(128,128,128)', 
        fontSize:'40px' }} />
      </div>
    </div>
  );
};

export default FoodCourtModal;
