import React, { useEffect, useState } from 'react'
import Banner from "../../assets/good-hero-banner.jpg"
import { Typography } from '@mui/material'
import "./Home.css"
import SouthIcon from '@mui/icons-material/South';
import NewWEP from './NewWEP'
import Modernization from './Modernization'
import GroundFloor from './GroundFloor'
import Wellness from './Wellness'
import sofaImage from "../../assets/sofaImage.png"
import SummerComfort from './SummerComfort'
import Amenities from './Amenities'
import FoodCourt from './FoodCourt'
import Slider from './Slider';
import Community from './Community';
import PlazaGif from './PlazaGif';
import NavigationComponent from './NavigationComponent';
import Technology from './Technology';
import NoDropOutzone from './NoDropOutzone';
import imageNewWep from "../../assets/image.svg"
import modernizationImage from "../../assets/image 2.svg"
import wellnessImage from "../../assets/image 3.svg"
import AmenitiesImage from '../../assets/image4.svg';
import comImage from "../../assets/image5.svg"
import NavImage from "../../assets/image6.svg"
import techImage from "../../assets/image7.svg"
import slider1 from "../../assets/image (9).svg"
import slider2 from "../../assets/image (10).svg"
import slider3 from "../../assets/image (11).svg"
import slider4 from "../../assets/image (12).svg"
import slider5 from "../../assets/image (13).svg"
import slider6 from "../../assets/image (14).svg"
import slider7 from "../../assets/image (15).svg"
import { motion } from 'framer-motion';
import homeData from './Home.json'


const Home = () => {
    const [activeImage, setActiveImage] = useState(imageNewWep);
    
    const data = homeData.response.data.data
    console.log("dd",data)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Define the scroll positions for each section
            const sectionScrollPositions = {
                NewWEP: document.getElementById('NewWEP').offsetTop,
                Modernization: document.getElementById('Modernization').offsetTop,
                Wellness: document.getElementById('Wellness').offsetTop,
                Amenities: document.getElementById('Amenities').offsetTop,
                Community: document.getElementById('Community').offsetTop,
                Navigation: document.getElementById('Navigation').offsetTop,
                Technology: document.getElementById('Technology').offsetTop,
            };

            // Determine which section is currently in view based on scroll position
            let currentSection = 'NewWEP';
            Object.entries(sectionScrollPositions).forEach(([section, position]) => {
                if (scrollPosition >= position - windowHeight / 2) {
                    currentSection = section;
                }
            });

            // Set active image based on the current section
            switch (currentSection) {
                case 'NewWEP':
                    setActiveImage(imageNewWep);
                    break;
                case 'Modernization':
                    setActiveImage(modernizationImage);
                    break;
                case 'Wellness':
                    setActiveImage(wellnessImage);
                    break;
                case 'Amenities':
                    setActiveImage(AmenitiesImage);
                    break;
                case 'Community':
                    setActiveImage(comImage);
                    break;
                case 'Navigation':
                    setActiveImage(NavImage);
                    break;
                case 'Technology':
                    setActiveImage(techImage);
                    break;
                default:
                    setActiveImage(imageNewWep);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollDown = () => {
        const targetComponent = document.getElementById('NewWEP');
        targetComponent.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollToComponent = (id) => {
        const targetComponent = document.getElementById(id);
        if (targetComponent) {
            targetComponent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleClick = (image) => {
        setActiveImage(image);
    };

    return (
        <>
            <div style={{ width: '100%', height: '550px' }}>
                <div style={{
                    backgroundImage: `url(${Banner})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', width: '100%', height: '100%',
                    position: 'relative', zIndex: 2000,
                    filter: 'brightness(90%)'
                }}>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,
                            },
                        }}
                        viewport={{ once: true }}
                        style={{
                            position: 'absolute', top: '25%',
                            left: '10%'
                        }}
                    >
                        <p className="TransformingText">
                            {data.gif_main_text.text_first}
                        </p>

                        <p className='paragraph'>
                            {data.gif_main_text.text_second}
                        </p>

                        {/* Down Arrow */}
                        <div className='learnmore'>
                            <div class="down-arrow"><SouthIcon /></div>
                            <button onClick={handleScrollDown} className='text'>{data.gif_main_text.text_third}</button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='flex'>
                <div className='verticalSliderContainer'>
                    <a href='#NewWEP'><img src={activeImage === imageNewWep ? slider1 : imageNewWep}
                        onClick={() => {
                            handleClick(imageNewWep);
                            handleScrollToComponent('NewWEP')
                        }} /></a>

                    <a href='#Modernization'>
                        <img
                            src={activeImage === modernizationImage ? slider2 : modernizationImage}
                            onClick={() => {
                                handleClick(modernizationImage);
                                handleScrollToComponent('Modernization');
                            }}
                        />
                    </a>

                    <a href='#Wellness'>
                        <img src={activeImage === wellnessImage ? slider3 : wellnessImage}
                            onClick={() => {
                                handleClick(wellnessImage)
                                handleScrollToComponent('Wellness')
                            }} />
                    </a>
                    <a href='#Amenities'>
                        <img src={activeImage === AmenitiesImage ? slider4 : AmenitiesImage}
                            onClick={() => {
                                handleClick(AmenitiesImage)
                                handleScrollToComponent('Amenities')
                            }} />
                    </a>
                    <a href='#Community'>
                        <img src={activeImage === comImage ? slider5 : comImage}
                            onClick={() => {
                                handleClick(comImage)
                                handleScrollToComponent('Community')
                            }} />
                    </a>
                    <a href='#Navigation'>
                        <img src={activeImage === NavImage ? slider6 : NavImage}
                            onClick={() => {
                                handleClick(NavImage)
                                handleScrollToComponent('Navigation')
                            }} />
                    </a>
                    <a href='#Technology'><img src={activeImage === techImage ? slider7 : techImage}
                        onClick={() => {
                            handleClick(techImage)
                            handleScrollToComponent('Technology')
                        }} /></a>
                </div>
            </div>
            <div >

                <div id="NewWEP" style={{ backgroundColor: 'rgb(249, 250, 252)', padding: '3rem' }}>
                    <NewWEP data={data.new_wep_text} />
                </div>
                <div id="Modernization" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                    <Modernization modernizationData={data.modernization_text} />
                    <GroundFloor groundFloorData={data.ground_floor_text}/>
                    <FoodCourt foodCourtData={data.foodcourt_text}/>
                </div>
                <div id='Wellness' style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                    <Wellness wellnessData={data.wellness_text}/>
                </div>
                <img src={sofaImage} className='sofaImg' />
                <SummerComfort summerComfortData={data.summer_comfort}/>
                <div id='Amenities' style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                    <Amenities amenitiesData={data.amenities}/>
                    <Slider />
                </div>
                <div id='Community'>
                    <Community communityData={data.community}/>
                </div>
                <div style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                    <PlazaGif plaza_gif={data.plaza_gif}/>
                    <div id='Navigation'>
                        <NavigationComponent navigationComponent={data.navigationComponent}/>
                    </div>
                    <div id='Technology'>
                        <Technology technologyData={data.technology}/>
                    </div>
                    <div style={{ padding: '2rem' }}>
                        <NoDropOutzone dropZoneData={data.drop_zone}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
