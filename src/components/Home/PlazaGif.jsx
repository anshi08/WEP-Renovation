import React from 'react'
import gif from "../../assets/videoframe_5458.png"
import { Grid, Typography } from '@mui/material'
import image from "../../assets/birdseye-view.png"
import "./PlazaGif.css"
import { motion } from 'framer-motion'

const PlazaGif = () => {
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
                        <img src={gif} />
                        <p className='plaza'>PLAZA</p>
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
                            <img src={image} style={{ padding: '1rem', margin: '0 auto',width:'80%' }} alt="Your Image" />
                            <p className='plaza' style={{marginLeft:'12%'}}>PLAZA. BIRDSEYE VIEW</p>
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
                                    Head outside and you’ll experience The Plaza:
                                    a transformed landscaped outdoor environment
                                    where cultural events, concerts, group fitness, and connection to fresh 
                                    air and nature can all take place.
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
                                    Culture. Community. Collaboration.
                                    That’s our future.
                                    Welcome to the WEP Community
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