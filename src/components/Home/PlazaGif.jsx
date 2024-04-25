import React from 'react'
import gif from "../../assets/gif.mp4"
import ReactPlayer from 'react-player'
import { Grid, Typography } from '@mui/material'
import image from "../../assets/birdseye-view.png"
import "./PlazaGif.css"
import { motion } from 'framer-motion'

const PlazaGif = ({ plaza_gif }) => {

    const data = plaza_gif
    return (
        <>

            <Grid container>
                <Grid item xs={0} md={6}>

                </Grid>
                <Grid item xs={12} md={6} padding={3}>
                    <motion.div

                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,
                            },
                        }}

                        viewport={{ once: true }}
                    >
                        <ReactPlayer
                            url={gif}
                            playing={true}
                            loop={true}
                            muted={true}
                        />
                        <p className='plaza'>{data.gif_first_text}</p>
                    </motion.div>
                </Grid>
            </Grid>

            <div>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} md={6}>

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
                        >
                            <img src={image} style={{ padding: '1rem', margin: '0 auto', width: '80%' }}
                                alt="Your Image" />
                            <p className='plaza' style={{ marginLeft: '12%' }}>{data.gif_second_text}</p>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <div className='horizontalYellowLine'></div>

                            <motion.div

                                initial={{
                                    opacity: 0,
                                    x: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}

                                viewport={{ once: true }}
                            >
                                <p className='plazaheading'>
                                    {data.gif_second_para}
                                </p>
                            </motion.div>

                            <motion.div

                                initial={{
                                    opacity: 0,
                                    x: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}

                                viewport={{ once: true }}
                            >
                                <p className='my-3 plazaBoldHeading'>
                                    {data.gif_second_sub_para}
                                </p>
                            </motion.div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}

export default PlazaGif