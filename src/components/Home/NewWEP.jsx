import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from "../../assets/newthewep-at-2x-half.jpg"
import EastIcon from '@mui/icons-material/East';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './NewWep.css'
import { Link } from 'react-router-dom';
import waterMark from "../../assets/homepage-watermark-at-2x-quarter.png"
import { motion } from 'framer-motion';

function NewWEP() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8} style={{
                backgroundImage: `url(${waterMark})`,
                backgroundSize: 'cover', backgroundPosition: 'center'
            }} >


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
                    <p className='text1'>
                        Get Ready. Get Excited for the New WEP!
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
                    <p className='body1'>
                        Watch as our dynamic revitalization transforms this legendary
                        downtown destination into a mindfully modernized, all-day people place.
                        Work, meet, dine, gather, connect and engage with others in an environment that
                        inspires the countless possibilities, opportunities, and unexpected delights of every day.
                    </p>
                </motion.div>

                {/* For showing 3 cards */}

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Grid container spacing={2} className='clearfix'>

                        <Grid item xs={12} md={4}>
                            <Card sx={{
                                display: 'flex', flexDirection: 'column', height: '200px',
                                backgroundColor: 'transparent', borderLeft: '5px solid black'
                            }} >
                                <CardContent>
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
                                        <p className='heading'>THE RENOVATION</p>
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
                                                duration: 2,
                                            },
                                        }}

                                        viewport={{ once: true }}
                                    >
                                        <p className='title'>Learn more about our plans and get the latest
                                            construction updates.</p>
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
                                                duration: 2,
                                            },
                                        }}

                                        viewport={{ once: true }}
                                    >
                                        <Link to="/p/2" className='hover:underline link'>Learn More <EastIcon style={{ color: 'rgb(87,87,87)' }} /></Link>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4} >
                            <Card sx={{
                                display: 'flex', flexDirection: 'column', height: '200px',
                                backgroundColor: 'transparent', borderLeft: '5px solid black'
                            }} >
                                <CardContent>
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
                                        <p className='heading'>REDEVELOPMENT TEAM</p>
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
                                                duration: 2,
                                            },
                                        }}

                                        viewport={{ once: true }}
                                    >
                                        <p className='title'>Learn more about the team behind the project</p>
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
                                                duration: 2,
                                            },
                                        }}

                                        viewport={{ once: true }}
                                    >
                                        <Link to="/p/3" className='hover:underline link'>Learn More <EastIcon style={{ color: 'rgb(87,87,87)' }} /></Link>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4} >
                            <Card sx={{
                                display: 'flex', flexDirection: 'column', height: '200px',
                                backgroundColor: 'transparent', borderLeft: '5px solid black'
                            }} >
                                <CardContent>
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
                                        <p className='heading'>CONTACT</p>
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
                                                duration: 2,
                                            },
                                        }}

                                        viewport={{ once: true }}
                                    >
                                        <p className='title'>Curious about our new look and the opportunities that are here?</p>
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
                                                duration: 2,
                                            },
                                        }}

                                        viewport={{ once: true }}
                                    >
                                        <Link to="/p/4" className='hover:underline link'>Contact Us Now <EastIcon style={{ color: 'rgb(87,87,87)' }} /></Link>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* Right side */}
            <Grid item xs={12} md={4}>
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
                    <img src={Image} />
                </motion.div>
            </Grid>
        </Grid>
    );
}

export default NewWEP;
