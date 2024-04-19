import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./Wellness.css"
import girlimage from "../../assets/wep-wellness-r3-tenth.png"
import wellnessWaterMark from "../../assets/wellness-watermark-at-2x-2330_1945_0_403-half.png"
import { motion } from 'framer-motion'

const Wellness = ({ wellnessData }) => {

    const data = wellnessData

    return (
        <Grid container padding={6} style={{ backgroundImage: `url(${wellnessWaterMark})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            {/* Left Side */}
            <Grid item xs={12} md={8} >
                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>


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
                        <p className='mainheading'>
                            {data.wellness_heading}
                        </p>
                    </motion.div>

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
                        <p className='boldtextWell'>
                            {data.wellness_text}
                        </p>
                    </motion.div>


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
                        <p className='body'>{data.wellness_para}</p>
                    </motion.div>
                </div>
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={4}>

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
                    <img src={girlimage} />
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default Wellness
