import React, { useEffect, useState } from 'react'
import Map1 from "../../assets/Map1.jpg"
import EyeSvg from "../../assets/image (6).svg";
import "./GroundFloorRetail.css"
import { motion } from 'framer-motion';
import ImagesGallery from './ImagesGallery';

const GroundFloorRetail = ({ GroundFloorRetailData }) => {

    const data = GroundFloorRetailData
    const[showComponent, setShowComponent] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const eyePositions = [
        { x: '37%', y: '14%',xSmall:'35%' },
        { x: '39%', y: '46%',xSmall:'36%' },
        { x: '57%', y: '44%',xSmall:'57%'},
        { x: '78%', y: '55%', xSmall:'81%' },
        { x: '73%', y: '82%',xSmall:'77%' },
    ];

    return (
        <>

        {!showComponent && 
            <div style={{ padding: '3rem' }}>
                <div style={{ marginLeft: '6%' }}>

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
                        <p className='GFR'>{data.text}</p>
                    </motion.div>
                </div>
                <div className='flex justify-center items-center mt-9' style={{ position: 'relative' }}>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            // y: 0,
                            transition: {
                                duration: 2,
                            },
                        }}
                        viewport={{ once: true }}
                    // style={{ padding: '3rem 0' }}

                    >
                        <img src={Map1} style={{ height: 'auto' }} />
                        {eyePositions.map((position, index) => (
                            <img
                                key={index}
                                src={EyeSvg}
                                alt={`Eye Icon`}
                                style={{
                                    position: 'absolute',
                                    top : position.y,
                                    left: windowWidth<=1280 ? position.xSmall :  position.x,
                                    width:windowWidth<=700 ? '20px' : '30px',
                                    cursor: 'pointer',
                                    zIndex: 1 
                                }}
                                onClick={() => setShowComponent(true)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        }
            {showComponent && <ImagesGallery showComponent={showComponent} setShowComponent={setShowComponent} />}
        </>
    )
}

export default GroundFloorRetail