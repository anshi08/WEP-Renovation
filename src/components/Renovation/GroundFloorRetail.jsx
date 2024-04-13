import React from 'react'
import Map1 from "../../assets/Map1.jpg"
import EyeSvg from "../../assets/image (6).svg";
import "./GroundFloorRetail.css"
import { motion } from 'framer-motion';

const GroundFloorRetail = () => {
    return (
        <>
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
                        <p className='GFR'>Level 1
                            Ground Floor Retail</p>
                    </motion.div>
                </div>
                <div className='flex justify-center items-center mt-9'>
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
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default GroundFloorRetail