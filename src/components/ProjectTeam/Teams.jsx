import React from 'react'
import './Teams.css'
import Architect from "../../assets/architect1.png"
import Designer from "../../assets/team2.png"
import landscapeimg from "../../assets/team3.png"
import constructImg from "../../assets/team4.png"
import { motion } from 'framer-motion'


import { Grid } from '@mui/material'
const Teams = () => {
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
                                <p className='teamHeading1'>Architect</p>
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
                                <p className='teamTitle1'>Established in 1996, Chmiel Architects is an Award Winning Architectural Design practice located in
                                    Ottawa, Canada. Through our practice we help our clients envision a better built environment through
                                    thoughtful design and our ability to produce innovative solutions that effect transformation. Every
                                    project is conceived to support an essential belief in the power of architecture to influence real world conditions.</p>
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
                                <p className='teamHeading1'>Designer</p>

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
                                <p className='teamTitle1'>GH+A consists of a curious team of 50+ passionate, creative and strategic thinkers who
                                    position and reinvent shopping centres, inject retail vitality into mixed-use developments
                                    and devise immersive experiences for our F&B, fashion, health & wellness projects. We
                                    design and transform spaces into inspiring and engaging environments with purpose and
                                    authenticity.</p>
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
                                <p className='teamHeading1'>Landscape Architect</p>
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
                                <p className='teamTitle1'>IBI is a global team of industry leading architects, engineers, planners,
                                    designers, and technology professionals united by a common desire: to create livable, sustainable,
                                    technologically advanced urban environments. We are a technology-driven design firm</p>
                                <p className='teamTitle1'>Our award-winning landscape architecture practice is one
                                    of the largest in the world, and driven by holistic, collaborative, environmentally responsible
                                    design.</p>
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
                                <p className='teamHeading1'>Construction</p>
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
                                <p className='teamTitle1'>We design, finance, construct, equip, operate, and manage anything
                                    that can be built.</p>
                                <p className='teamTitle1'>EllisDon is a world-leading construction and building services company that completes in
                                    excess of $5 billion worth of contracts annually, in every market sector and across the
                                    globe. Over the last 70 years, we’ve grown from being a general contractor to a
                                    multi-faceted company that can deliver any aspect of a project.</p>
                            </motion.div>
                        </div>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default Teams