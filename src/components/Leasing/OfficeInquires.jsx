import React from 'react'
import './OfficeInquires.css'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import bookImg from "../../assets/bookImg.png"
import clipBoard from "../../assets/clipBoard.png"


const OfficeInquires = () => {
    return (
        <>
            <Grid container >
                <Grid item xs={12} md={5} padding={3}>
                    <div className='styleDiv2'>
                        <p className='retailInq'>Office Leasing
                            Inquiries:</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} padding={3}>
                    {/* Sub Grids */}
                    <Grid container spacing={2}>

                        {/* 1st Grid */}
                        <Grid item xs={12} md={4}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                <div>
                                    <p className='Stephanie'>Stephanie Thompson</p>
                                    <p className='salesRepresent'>Leasing Manager, Sales Representative
                                        QuadReal Property Group, Brokerage</p>
                                    <a href='tel: 613-690-7394' className='a'
                                        style={{ color: 'black', display: 'inline-block', marginRight: '1em' }}>
                                        <strong className='T'>T.</strong>613-690-7394</a>
                                    <a href="mailto: stephanie.thompson@quadreal.com" className='a'>
                                        <strong className='T'>E.</strong>stephanie.thompson@quadreal.com</a>
                                </div>
                                <div className='styleBtn'>
                                    <Link to="https://office.thenewwep.com/" className="button-link">
                                        <img src={bookImg} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                        <p className='btnText'> View Brochure </p>
                                    </Link>
                                </div>

                            </div>
                        </Grid>

                        {/* 2nd Grid */}
                        <Grid item xs={12} md={4}>


                            <div className='styleBtn2'>
                                <Link to="https://quadreal.findspace.com/?search=world%20exchange&amp;min=0&amp;max=474250&amp;type=O"
                                    className="button-link">
                                    <img src={clipBoard} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                    <span className='btnText'> Availability </span>
                                </Link>
                            </div>

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

export default OfficeInquires