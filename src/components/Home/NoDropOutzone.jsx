import React from 'react'
import Image1 from "../../assets/Image23.png"
import { motion } from 'framer-motion'
import "./NoDrop.css"
import { Grid } from '@mui/material'

const NoDropOutzone = () => {
    return (
        <>
            <Grid container>
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
                        className='flex flex-col items-center'
                    >
                        <img src={Image1} style={{ width: '80%' }} />
                    </motion.div>

                    <p className='footertext'>NO DROP-OUT ZONES</p>
                </Grid>
                <Grid item xs={12} md={6} display='flex' justifyContent='center' alignItems='center' position='relative'>
                    <div className='lineNoDrop my-6'></div>

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
                        <p className='SmartTechText my-8'>
                            With SMART technology incorporated throughout the WEP complex, people will be able to enjoy hands-free
                            “wave and open” access points, contactless food ordering and payment for speedy delivery. With high
                            speed WI FI available throughout the public realm, and no drop-out-zones, tenants and guests will enjoy
                            all the freedom today’s technology brings. Our SMART approach extends to creating a more sustainable,
                            energy efficient, and healthier building through an optimized energy management plan based on a variety
                            of sensors and data collection - a win win for the environment and all occupants.
                        </p>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default NoDropOutzone
