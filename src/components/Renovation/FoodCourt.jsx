import React from 'react'
import Map2 from "../../assets/Map2.jpg"
import EyeSvg from "../../assets/image (6).svg";
import "./FoodCourt.css"
import { Grid } from '@mui/material'
import bgWatermark from "../../assets/waterMarkReno.png"
import EastIcon from '@mui/icons-material/East';

const FoodCourt = () => {
    return (
        <>
            <div style={{ padding: '3rem' }}>
                <div style={{ marginLeft: '6%' }}>
                    <p className='FoodCourtText'>Level 2 <br />
                        Food Court</p>
                </div>

                {/* Map Image */}
                <Grid container >
                    <Grid item xs={12} md={7} >
                        <div className='mt-4'>
                            <img src={Map2} />
                        </div>
                    </Grid>

                    {/* text */}
                    <Grid item xs={12} md={5} display='flex' justifyContent='center' alignItems='center' >
                        <div>
                            <div className='BlueLineFC'></div>
                            <div className='mainStyleofPara'>
                                <p className='textFC mt-4'>FOOD COURT</p>
                                <p className='textFC'>With extended hours to encourage public access
                                    and bright windows that flood the space with light,
                                    the WEP Food Court is the perfect place for a coffee break or a meal.</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div style={{ padding: '0 1rem 1rem' }}>
                {/* Semi-transparent overlay */}
                <div style={{ position: 'relative', 
                backgroundColor: 'rgba(29, 29, 29, 0.85)', display: 'flex', 
                justifyContent: 'flex-end', flexWrap: 'wrap', alignItems: 'center',zIndex:'0' }}>

                    <div className='flex justify-center items-center' style={{ margin: '0 auto' }}>
                        {/* First column */}
                        <div style={{ padding: '7%' }}>
                            <p className='bottomHeading'>On the Look Out
                                to Lease? Take a Look!</p>
                        </div>

                        {/* Second column */}
                        <div style={{ padding: '7%' }}>
                            <p className='bottomText2'>
                                Curious about our new look and the opportunities that are here?
                                Food Court locations to retail shops.</p>

                            <div style={{position:'relative'}}>
                                <a href='https://brochure.thenewwep.com/' target='_blank' 
                                 style={{ zIndex: '1', pointerEvents: 'auto' }}>
                                <p className='cursor-pointer hyperLinkText'>View leasing opportunities here <EastIcon 
                                  style={{ color: 'rgb(143,143,143)' }} /></p>
                                  <span className="line"></span>
                                  </a>
                            </div>
                        </div>
                    </div>

                    {/* Watermark image */} 
                    <img src={bgWatermark} style={{ position: 'absolute', top: '50%', right: 0, 
                    transform: 'translateY(-50%)', width: 'auto', height: '100%', opacity: 0.26 }} />
                </div>
            </div>

        </>
    )
}

export default FoodCourt