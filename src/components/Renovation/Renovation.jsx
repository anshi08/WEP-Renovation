import React from 'react'
import BgImage from "../../assets/RenovationBgImage.png"
import SouthIcon from '@mui/icons-material/South';
import "./Renovation.css"
import UnderConstructions from './UnderConstructions';
import Gallery from './Gallery';
import GroundFloorRetail from './GroundFloorRetail';
import FoodCourt from './FoodCourt';
import { motion } from "framer-motion"
import renovationData from './Renovation.json'
import BottomPart from './BottomPart';

const Renovation = () => {

    const handleScrollDown = () => {
        const targetComponent = document.getElementById('UC');
        targetComponent.scrollIntoView({ behavior: 'smooth' });
    };

    const data = renovationData.response.data.data

    return (
        <>
        <div>
            <div style={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '550px', position: 'relative',
                filter: 'brightness(50%)'
            }}>
            </div>

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
                        bottom: "80px",
                        left: "50px",
                        opacity: '1'
                    }}
                >
                    <p className='FollowTheText'>
                       {data.main_text.text_first}
                    </p>
                    <p className='FollowTheText'>
                       {data.main_text.text_first1}
                    </p>

                    <p className='paragraph1'>
                        {data.main_text.text_second}
                    </p>

                    {/* Down Arrow */}
                    <div className='learnmore'>
                        <div className="down-arrow"><SouthIcon /></div>
                        <button onClick={handleScrollDown} className='text'>{data.main_text.text_third}</button>
                    </div>
                </motion.div>
            </div>

            <div style={{ backgroundColor: 'rgb(249,250,252)' }}>
                <div id='UC'>
                    <UnderConstructions UnderConstructionsData={data.UnderConstructions_text} />
                </div>
                <Gallery galleryData={data.Gallery_text}/>
                <GroundFloorRetail GroundFloorRetailData={data.GroundFloorRetail_text}/>
                <FoodCourt FoodCourtData={data.FoodCourt_text}/>
                <BottomPart FoodCourtData={data.FoodCourt_text} />
            </div>
        </>
    )
}

export default Renovation