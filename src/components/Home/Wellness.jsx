import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./Wellness.css"
import girlimage from "../../assets/wep-wellness-r3-tenth.png"
import wellnessWaterMark from "../../assets/wellness-watermark-at-2x-2330_1945_0_403-half.png"

const Wellness = () => {
    return (
        <Grid container padding={6} style={{ backgroundImage: `url(${wellnessWaterMark})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            {/* Left Side */}
            <Grid item xs={12} md={8} >
                <div style={{ display: 'flex', flexDirection: 'column',flexWrap:'wrap' }}>
                    <p className='mainheading'>
                        WELLNESS
                    </p>
                    <p className='boldtextWell'>
                        Well-Being.
                        Well Done.
                    </p>
                    <p className='body'>
                        Throughout our transformation the intent has been to make WEP a place conducive to 
                        well-being. Our architectural design too aims at opening up our various spaces to 
                        create a sense of airy, light-infused, spaciousness. Whether sitting in natural light 
                        in one of our communal spaces, appreciating the cleaner air quality we’ve brought to 
                        all interior areas, or basking in the relaxed atmosphere of our landscaped outdoor 
                        Plaza where sun and blue skies, events and outdoor amenities greet you, WEP creates 
                        an atmosphere where well-being thrives.
                    </p>
                </div>
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={4}>
                <img src={girlimage} />
            </Grid>
        </Grid>
    )
}

export default Wellness
