import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East';
import './GeneralInquires.css'

const GeneralInquires = () => {
    return (
        <>
            <Grid container >
                <Grid item xs={12} md={5} padding={3}>
                    <div className='styleDiv2'>
                        <p className='retailInq'>General
                            Inquiries:</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} padding={3}>
                    {/* Sub Grids */}
                    <Grid container spacing={2}>

                        {/* 1st Grid */}
                        <Grid item xs={12} md={4}>
                           <div className=' stylingWEP'>
                                <div className="flex flex-col">
                                    <Link to="tel:613-690-7400" className='a'><strong>T.</strong>
                                    613-690-7400</Link>
                                    
                                    <Link to="https://worldexchangeplaza.com/" target="_blank" 
                                    rel="noopener noreferrer">
                                        <button className="mt-2 inline-flex items-center btnTxt">
                                            WorldExchangePlaza.com<EastIcon style={{color:'rgb(158,159,160)',fontSize:'20px',marginLeft:'5px'}} />
                                        </button>
                                    </Link>
                                </div>
                                </div>
                            
                        </Grid>

                        {/* 2nd Grid */}
                        <Grid item xs={0} md={4}>

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

export default GeneralInquires