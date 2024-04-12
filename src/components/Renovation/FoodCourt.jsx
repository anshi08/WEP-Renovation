import React from 'react'
import Map2 from "../../assets/Map2.jpg"
import EyeSvg from "../../assets/image (6).svg";
import "./FoodCourt.css"
import { Grid } from '@mui/material'
import bgWatermark from "../../assets/waterMarkReno.png"

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
                <div style={{ position: 'relative', backgroundColor: 'rgba(29, 29, 29, 0.85)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>

                    {/* First column */}
                    <div style={{ flex: '1 1 50%', padding: '1rem' }}>
                        <p style={{ color: '#fff' }}>On the Look Out
                            to Lease? Take a Look!</p>
                    </div>

                    {/* Second column */}
                    <div style={{ flex: '1 1 50%', padding: '1rem' }}>
                        <p style={{ color: '#fff' }}>
                            Curious about our new look and the opportunities that are here?
                            Food Court locations to retail shops.</p>
                    </div>

                    {/* Watermark image */}
                    <img src={bgWatermark} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.26 }} />
                </div>
            </div>

        </>
    )
}

export default FoodCourt