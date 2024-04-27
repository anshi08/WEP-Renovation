import React from 'react'
import BgImage from "../../assets/technology-watermark-at-2x-half.png"
import MenImage from "../../assets/MenImage.png"
import Image1 from "../../assets/Image20.png"
import Image2 from "../../assets/Image21.png"
import { motion } from 'framer-motion'
import { Grid, Typography } from '@mui/material'

const Technology = ({ technologyData }) => {

    const data = technologyData

    return (
        <>
            <Grid container style={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {/* Left side */}
                <Grid item xs={12} md={6} padding={4} >


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
                        
                        style={{ padding: '3rem 10% 0 10%' }}

                    >
                        <p className='mainheading'>
                            {data.tech_heading}
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
                        style={{ padding: '0 10% 0 10%' }}

                    >
                        <p className='boldtext1' style={{ color: 'rgb(40, 92, 170)' }}>
                            {data.tech_subHeading}
                        </p>
                        <p className='boldtext1' style={{ color: 'rgb(40, 92, 170)' }}>
                            {data.tech_subHeading1}
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
                        style={{ padding: '0 10% 8% 10%' }}

                    >
                        <p className='body'>
                          {data.tech_para}
                        </p>
                    </motion.div>
                </Grid>

                {/* Right Side */}
                <Grid item xs={12} md={6}>
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
                        

                    >
                        <img src={MenImage} style={{ transform: "scaleX(-1)" }} />
                    </motion.div>
                </Grid>
            </Grid>

            {/* Bottom Image */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
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
                    style={{ padding: '0 0 0 2rem' }}

                    >
                        <img src={Image1} />
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={6}   >
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
                        style={{ padding: '0 2rem 0 0' }}

                    >
                        <img src={Image2} />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Technology