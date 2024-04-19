import React from 'react'
import QuadLogo from "../../assets/team1.png"
import './QuadRealGroup.css'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'

const QuadRealGroup = () => {
    return (
        <>
            <Grid container padding={5} spacing={3}>

                <Grid item xs={12} md={6} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                    <div>
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
                            <img src={QuadLogo} />
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
                            <p className='paratext mt-4'><span className='spanText'>QuadReal Property Group </span>is a global real estate investment, operating and
                                development company headquartered in Vancouver, British Columbia. Its assets under management
                                total $61.2 billion.</p>
                        </motion.div>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} display='flex' justifyContent='center' alignItems='center' >
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
                        className='mt-4 md:mt-40'
                    >

                        <div className='BlueLineQRG'></div>
                        <p className='Quadtext mt-4'>
                            From its foundation in Canada as a full-service real estate operating company, 
                            QuadReal has evolved its capabilities to invest in public and private debt and 
                            equity markets.</p>

                        <p className='Quadtext mt-4'>QuadReal invests directly via programmatic partnerships 
                        and through operating companies in which it holds an ownership interest.</p>

                        <p className='Quadtext mt-4'>QuadReal seeks to deliver strong investment returns while creating sustainable 
                            environments that bring value to the people and communities it serves. Now and 
                            for generations to come.
                        </p>

                        <p className='QuadBottomText mt-3'>QuadReal: Excellence lives here.</p>
                    </motion.div>
                </Grid>

            </Grid>
        </>
    )
}

export default QuadRealGroup