import React from 'react'
import QuadLogo from "../../assets/team1.png"
import './QuadRealGroup.css'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'

const QuadRealGroup = ({ QuadRealData }) => {

    const data = QuadRealData
    return (
        <>
            <Grid container padding={5} spacing={3}>

                <Grid item xs={12} md={6} padding={5}
                display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                    <div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
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
                            <img src={QuadLogo} />
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
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
                            <p className='paratext mt-4'><span className='spanText'>{data.main_heading} </span>{data.QuadRealGroup_Heading}</p>
                        </motion.div>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} display='flex' justifyContent='center' alignItems='center' >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                            },
                        }}
                        viewport={{ once: true }}
                        className='mt-4 md:mt-35'
                    >

                        <div className='BlueLineQRG'></div>
                        <p className='Quadtext mt-3'>{data.paragraphs.para1}</p>

                        <p className='Quadtext mt-8'>{data.paragraphs.para2}</p>

                        <p className='Quadtext mt-8'>{data.paragraphs.para3}
                        </p>

                        <p className='QuadBottomText mt-3'>{data.bottom_text}</p>
                    </motion.div>
                </Grid>

            </Grid>
        </>
    )
}

export default QuadRealGroup