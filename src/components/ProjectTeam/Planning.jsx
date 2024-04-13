import React from 'react'
import FotennImg from "../../assets/PlanningImg.png"
import './Planning.css'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'

const Planning = () => {
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
                            <p className='planningText'>Planning</p>
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
                            <p className='planningPara'>Fotenn is an award-winning planning, urban design, and landscape architecture firm with offices
                                in Ottawa, Kingston, and Toronto. Established in 1992, the firm is celebrating thirty successful
                                years leading innovative projects, founded on a commitment to a responsive and personal approach
                                and to the honest and fair treatment of our clients and the communities in which we work. </p>
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