import React from 'react'
import BgImage from "../../assets/RenovationBgImage.png"
import SouthIcon from '@mui/icons-material/South';
import "./Renovation.css"
import UnderConstructions from './UnderConstructions';
import Gallery from './Gallery';
import GroundFloorRetail from './GroundFloorRetail';
import FoodCourt from './FoodCourt';
import { motion } from "framer-motion"

const Renovation = () => {

    const handleScrollDown = () => {
        const targetComponent = document.getElementById('UC');
        targetComponent.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div style={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '550px', position: 'relative',
                filter: 'brightness(70%)'
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
                        position: "absolute",
                        bottom: "20px",
                        left: "50px",
                        opacity: '1'
                    }}
                >
                    <p className='FollowTheText'>
                        Follow the build.
                    </p>

                    <p className='paragraph'>
                        THE NEW WORLD EXCHANGE PLAZA
                    </p>

                    {/* Down Arrow */}
                    <div className='learnmore'>
                        <div className="down-arrow"><SouthIcon /></div>
                        <button onClick={handleScrollDown} className='text'>Learn More</button>
                    </div>
                </motion.div>
            </div>

            <div style={{ backgroundColor: 'rgb(249,250,252)' }}>
                <div id='UC'>
                    <UnderConstructions />
                </div>
                <Gallery />
                <GroundFloorRetail />
                <FoodCourt />
            </div>
        </>
    )
}

export default Renovation