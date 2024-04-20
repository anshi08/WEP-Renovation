import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East';
import './GeneralInquires.css'
import { motion } from 'framer-motion';

const GeneralInquires = ({ GeneralInquiresData }) => {

    const data = GeneralInquiresData

    return (
        <>
            <Grid container >
                <Grid item xs={12} md={5} padding={3}>

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
                        className='styleDiv5'
                    >
                        <p className='retailInq'>{data.main_heading}</p>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={7} padding={3}>
                    {/* Sub Grids */}
                    <Grid container spacing={2}>

                        {/* 1st Grid */}
                        <Grid item xs={12} md={4}>
                            
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
                                className=' stylingWEP'
                                >
                                <div className="flex flex-col">
                                    <Link to="tel:613-690-7400" className='a'><strong>{data.T}</strong>
                                        {data.number}</Link>

                                    <Link to="https://worldexchangeplaza.com/" target="_blank"
                                        rel="noopener noreferrer">
                                        <button className="mt-2 inline-flex items-center btnTxt">
                                            {data.email}<EastIcon style={{ color: 'rgb(158,159,160)', fontSize: '20px', marginLeft: '5px' }} />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>

                        </Grid>

                        {/* 2nd Grid */}
                        <Grid item xs={0} md={4}>

                        </Grid>

                        {/* 3rd Grid */}
                        <Grid item xs={0} md={4}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default GeneralInquires