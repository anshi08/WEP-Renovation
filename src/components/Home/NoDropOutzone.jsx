import React from 'react'
import Image1 from "../../assets/Image23.png"
import { motion } from 'framer-motion'
import "./NoDrop.css"
import { Grid } from '@mui/material'

const NoDropOutzone = ({ dropZoneData }) => {

    const data = dropZoneData

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

                    <p className='footertext'>{data.img_text}</p>
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
                           {data.text}
                        </p>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default NoDropOutzone
