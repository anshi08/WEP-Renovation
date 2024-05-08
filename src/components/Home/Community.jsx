import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./Community.css"
import image from "../../assets/CommunityImage.png"
import comWatermark from "../../assets/community-watermark-at-2x-2178_2400_0_0-half.png"
import { motion } from 'framer-motion'

const Community = ({ communityData }) => {

    const data = communityData

    return (
        <Grid container  style={{ backgroundColor: 'rgb(249, 250, 252)' }} >

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
                        style={{ padding: '3rem 10% 0 10%' }}

                    >
                        <p className='mainheading'>
                            {data.com_heading}
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
                        <p className='boldtext1'>
                          {data.com_subHeading}
                        </p>
                        <p className='boldtext1'>
                          {data.com_subHeading1}
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
                        <p className='bodyCom'>
                           {data.com_para}
                        </p>
                    </motion.div>
                </div>
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={4} style={{ backgroundImage: `url(${comWatermark})`, 
            backgroundSize: 'cover', backgroundPosition: 'center' ,zIndex:1}}>
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
                    style={{height:'100%',position:'relative'}}

                >
                    <img src={image} style={{height:'100%',position:'absolute',bottom:'0',zIndex:-1}}/>
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default Community
