import React from 'react'
import './LeasingInquires.css'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import bookImg from "../../assets/bookImg.png"
import { motion } from 'framer-motion'

const LeasingInquires = () => {
    return (
        <>
            <Grid container >
                <Grid item xs={12} md={5} padding={3}>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
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
                        <p className='retailInq'>Retail Leasing
                            Inquiries:</p>
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
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}

                            >
                                <div>
                                    <p className='candiceText'>Candice Lerner-Fry</p>
                                    <p className='firstVise'>First Vice President, Sales Representative</p>
                                    <a href='tel:613-364-2323' className='a'
                                        style={{ color: 'black', display: 'inline-block', marginRight: '1em' }}>
                                        <strong className='T'>T.</strong>613-364-2323</a>
                                    <a href="mailto:Candice.LF@MarcusMillichap.com" className='a'>
                                        <strong className='T'>E.</strong>Candice.LF@MarcusMillichap.com</a>
                                </div>

                                <div>
                                    <p className='Frasertext'>Fraser Paddison</p>
                                    <p className='firstVise'>Vice President, Broker</p>
                                    <a href='tel:613-364-2303' className='a'
                                        style={{ color: 'black', display: 'inline-block', marginRight: '1em' }}>
                                        <strong className='T'>T.</strong>613-364-2303</a>
                                    <a href="mailto:Fraser.Paddison@MarcusMillichap.com" className='a'>
                                        <strong className='T'>E.</strong>Fraser.Paddison@MarcusMillichap.com</a>
                                </div>
                            </motion.div>
                        </Grid>

                        {/* 2nd Grid */}
                        <Grid item xs={12} md={4}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}

                                >
                                    <p className='Review'>To Review Leasing Opportunities:</p>
                                </motion.div>


                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                    className='styleDiv'

                                >
                                    <p className='Review'>Download Ground Floor Availabilities:</p>
                                </motion.div>

                                <div className='style'>
                                    <Link
                                        to="https://the-renovation.azurewebsites.net/assets/WEP_RetailFeatureSheet_GroundFloorRetailPackage.pdf" className="button-link ">
                                        <img src={bookImg} style={{
                                            width: '20px', height: '20px',
                                            marginRight: '5px'
                                        }} />
                                        <span className='btnText'> Availabilities </span>
                                    </Link>
                                </div>
                            </div>
                        </Grid>


                        {/* 3rd Grid */}
                        <Grid item xs={12} md={4}>
                            <div style={{
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'space-between', height: '100%'
                            }}>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}

                                >
                                    <Link to="https://brochure.thenewwep.com/" className="button-link button-container">
                                        <img src={bookImg} style={{
                                            width: '20px', height: '20px',
                                            marginRight: '5px', backgroundColor: 'white',
                                            transition: 'background-color 0.3s ease'
                                        }} />
                                        <p className='btnText'> View Brochure </p>
                                    </Link>
                                </motion.div>


                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                    className='styleDiv1'

                                >
                                    <p className='Review'>Download Food Court Availabilities:</p>
                                </motion.div>
                                <div>
                                    <Link to="https://the-renovation.azurewebsites.net/assets/WEP_RetailFeatureSheet_FoodCourtPackage.pdf" className="button-link">
                                        <img src={bookImg} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                        <p className='btnText'> Availabilities </p>
                                    </Link>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default LeasingInquires