import React from 'react'
import FotennImg from "../../assets/PlanningImg.png"
import './Planning.css'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'

const Planning = ({ PlanningData }) => {

    const data = PlanningData

    return (
        <>
            <Grid container spacing={5} padding={4} >
                <Grid item xs={12} md={6}  >

                    <div className='gridStyle1'>
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
                        // style={{ padding: '3rem 0' }}

                        >
                            <p className='planningText'>{data.heading}</p>
                        </motion.div>

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
                            className='fotennImg'
                        >
                            <img src={FotennImg} />
                        </motion.div>

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
                        // style={{ padding: '3rem 0' }}

                        >
                            <p className='planningPara'>{data.text} </p>
                        </motion.div>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} >

                </Grid>
            </Grid>
        </>
    )
}

export default Planning