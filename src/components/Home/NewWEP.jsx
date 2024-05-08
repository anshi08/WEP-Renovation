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

function NewWEP({ data }) {
    const wepData = data
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
                        {wepData.wep_Heading}
                    </p>
                    <p className='text1'>
                        {wepData.wep_text1}
                    </p>
                    <p className='text1'>
                        {wepData.wep_text2}
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
                style={{ marginBottom:'2rem' }}

                >
                    <p className='body1'>
                        {wepData.wep_paragraph}
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
                                        <p className='heading'>{wepData.cards.first_card_heading}</p>
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
                                        <p className='title'>{wepData.cards.first_card_content}</p>
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
                                        <Link to="/p/2" className='link'>{wepData.btn_text} <EastIcon style={{ color: 'rgb(87,87,87)' }} /></Link>
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
                                        <p className='heading'>{wepData.cards.second_card_heading}</p>
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
                                        <p className='title'>{wepData.cards.second_card_content}</p>
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
                                        <Link to="/p/3" 
                                        className='link'>{wepData.btn_text} <EastIcon style={{ color: 'rgb(87,87,87)' }} /></Link>
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
                                        <p className='heading'>{wepData.cards.third_card_heading}</p>
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
                                        <p className='title'>{wepData.cards.third_card_content}</p>
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
                                        <Link to="/p/4" className='link'>{wepData.btn_text2} <EastIcon style={{ color: 'rgb(87,87,87)' }} /></Link>
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
                    style={{height: '100%'}}
                >
                    <img src={Image} style={{height: '100%'}}/>
                </motion.div>
            </Grid>
        </Grid>
    );
}

export default NewWEP;
