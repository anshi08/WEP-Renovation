import React from 'react'
import './Teams.css'
import Architect from "../../assets/architect1.png"
import Designer from "../../assets/team2.png"
import landscapeimg from "../../assets/team3.png"
import constructImg from "../../assets/team4.png"
import { motion } from 'framer-motion'


import { Grid } from '@mui/material'
const Teams = ({ TeamsData }) => {

    const data = TeamsData

    return (
        <>
            <div >
                <Grid container spacing={5} padding={4} >
                    <Grid item xs={12} md={6}  >
                        <div className='gridStyle'>

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
                            >
                                <p className='teamHeading1'>{data.team_one.heading}</p>
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
                            >
                                <img src={Architect} className='my-12' />
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


                            >
                                <p className='teamTitle1'>{data.team_one.sub_text}</p>
                            </motion.div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div className='gridStyle' >

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
                                <p className='teamHeading1'>{data.team_two.heading}</p>

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
                                <img src={Designer} style={{ width: '199px', height: '98px' }} className='my-6' />
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
                                <p className='teamTitle1'>{data.team_two.sub_text}</p>
                            </motion.div>
                        </div>

                    </Grid>
                </Grid>

                {/* 2nd Grid */}
                <Grid container spacing={5} padding={4}>
                    <Grid item xs={12} md={6} >
                        <div className='gridStyle'>
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
                                <p className='teamHeading1'>{data.team_three.heading}</p>
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
                                <img src={landscapeimg} className='my-6' />
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
                                <p className='teamTitle1'>{data.team_three.sub_text}</p>
                                <p className='teamTitle1 mt-4'>{data.team_three.sub_text2}</p>
                            </motion.div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div className='gridStyle'>
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
                                <p className='teamHeading1'>{data.team_four.heading}</p>
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
                                <img src={constructImg} style={{ filter: 'invert(100%)' }} className='my-14' />
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
                                <p className='teamTitle1'>{data.team_four.sub_text}</p>
                                <p className='teamTitle1 mt-4'>{data.team_four.sub_text2}</p>
                            </motion.div>
                        </div>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default Teams