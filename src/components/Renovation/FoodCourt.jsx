import React, { useEffect, useState } from 'react'
import Map2 from "../../assets/Map2.jpg"
import EyeSvg from "../../assets/image (6).svg";
import "./FoodCourt.css"
import { Grid } from '@mui/material'
import bgWatermark from "../../assets/waterMarkReno.png"
import EastIcon from '@mui/icons-material/East';
import { motion } from 'framer-motion';
import FoodCourtModal from './FoodCourtModal';

const FoodCourt = ({ FoodCourtData }) => {

    const food_data = FoodCourtData
    const [showComponent, setShowComponent] = useState(false)
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
        { x: '16%', y: '9%' },
        { x: '16%', y: '22%' },
        { x: '10%', y: '44%' },
        { x: '41%', y: '44%' },
    ];

    return (
        <>
            {!showComponent &&
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
                            style={{ marginLeft: '6%' }}

                        >
                            <p className='FoodCourtText'>{food_data.text}</p>
                            <p className='FoodCourtText'>{food_data.text1}</p>
                        </motion.div>

                        {/* Map Image */}
                        <Grid container >
                            <Grid item xs={12} md={7} >
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
                                    className='mt-4'
                                    style={{ position: 'relative',marginLeft:'2rem' }}

                                >
                                    <img src={Map2} />
                                    {eyePositions.map((position, index) => (
                                        <img
                                            key={index}
                                            src={EyeSvg}
                                            alt={`Eye Icon`}
                                            style={{
                                                position: 'absolute',
                                                top: position.y,
                                                left: position.x,
                                                width: windowWidth <= 700 ? '20px' : '30px',
                                                cursor: 'pointer',
                                                zIndex: 1
                                            }}
                                            onClick={() => setShowComponent(true)}
                                        />
                                    ))}
                                </motion.div>
                            </Grid>

                            {/* text */}
                            <Grid item xs={12} md={5} display='flex' justifyContent='center' alignItems='center' >
                                <div>
                                    <div className='BlueLineFC'></div>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: -100,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 1,
                                            },
                                        }}
                                        viewport={{ once: true }}
                                        className='mainStyleofPara'
                                    >
                                        <p className='textFC mt-4'>{food_data.heading}</p>
                                        <p className='textFC'>{food_data.sub_text}</p>
                                    </motion.div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    {/* <div style={{ padding: '0 1rem 1rem' }}>
                        
                        <div style={{
                            position: 'relative',
                            backgroundColor: 'rgba(29, 29, 29, 0.85)', display: 'flex',
                            justifyContent: 'flex-end', flexWrap: 'wrap', alignItems: 'center', zIndex: '0'
                        }}>

                            <div className='flex justify-center items-center' style={{ margin: '0 auto' }}>
                                
                                <div style={{ padding: '7%' }}>
                                    <p className='bottomHeading'>{food_data.bottom_text1}</p>
                                </div>

                                
                                <div style={{ padding: '7%' }}>
                                    <p className='bottomText2'>{food_data.bottom_text2}</p>

                                    <div style={{ position: 'relative' }}>
                                        <a href='https://brochure.thenewwep.com/' target='_blank'
                                            style={{ zIndex: '1', pointerEvents: 'auto' }}>
                                            <p className='cursor-pointer hyperLinkText'>{food_data.bottom_btn_text} <EastIcon
                                                style={{ color: 'rgb(143,143,143)' }} /></p>
                                            <span className="line"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            
                            <img src={bgWatermark} style={{
                                position: 'absolute', top: '50%', right: 0,
                                transform: 'translateY(-50%)', width: 'auto', height: '100%', opacity: 0.26
                            }} />
                        </div>
                    </div> */}
                </>
            }

            {showComponent && <FoodCourtModal showComponent={showComponent} setShowComponent={setShowComponent} />}
        </>
    )
}

export default FoodCourt