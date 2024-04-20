import React from 'react'
import './OfficeInquires.css'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import bookImg from "../../assets/bookImg.png"
import clipBoard from "../../assets/clipBoard.png"
import { motion } from 'framer-motion'

const OfficeInquires = ({ OfficeInquiresData }) => {

    const data = OfficeInquiresData
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
                        className='styleDiv2'

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
                                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                            >
                                <div>
                                    <p className='Stephanie'>{data.information.name}</p>
                                    <p className='salesRepresent'>{data.information.title}</p>
                                    <a href='tel: 613-690-7394' className='a'
                                        style={{ color: 'black', display: 'inline-block', marginRight: '1em' }}>
                                        <strong className='T'>{data.T}</strong>{data.information.number}</a>
                                    <a href="mailto: stephanie.thompson@quadreal.com" className='a'>
                                        <strong className='T'>{data.E}</strong>{data.information.email}</a>
                                </div>
                                <div className='styleBtn'>
                                    <Link to="https://office.thenewwep.com/" className="button-link button-container">
                                        <img src={bookImg} style={{
                                            width: '20px', height: '20px',
                                            marginRight: '5px', backgroundColor: 'white',
                                            transition: 'background-color 0.3s ease'
                                        }} />
                                        <p className='btnText'> {data.btn_text_brochure} </p>
                                    </Link>
                                </div>

                            </motion.div>

                        </Grid>

                        {/* 2nd Grid */}
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
                                className='styleBtn2'
                            >
                                <Link to="https://quadreal.findspace.com/?search=world%20exchange&amp;min=0&amp;max=474250&amp;type=O"
                                    className="button-link button-container">
                                    <img src={clipBoard} style={{
                                        width: '20px', height: '20px', marginRight: '5px',
                                        backgroundColor: 'white',
                                        transition: 'background-color 0.3s ease'
                                    }} />
                                    <span className='btnText'> {data.btn_text_avail} </span>
                                </Link>
                            </motion.div>

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

export default OfficeInquires