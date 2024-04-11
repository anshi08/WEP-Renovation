import React from 'react'
import BgImage from "../../assets/technology-watermark-at-2x-half.png"
import MenImage from "../../assets/MenImage.png"
import Image1 from "../../assets/Image20.png"
import Image2 from "../../assets/Image21.png"

import { Grid, Typography } from '@mui/material'
const Technology = () => {
    return (
        <>
            <Grid container style={{backgroundImage:`url(${BgImage})`,
            backgroundRepeat:'no-repeat',backgroundSize:'cover',display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'}}>
                {/* Left side */}
                <Grid item xs={12} md={6} padding={4} >
                   {/* <div className='flex flex-col justify-center'> */}
                    <p className='mainheading'>
                        TECHNOLOGY
                    </p>
                    <p className='boldtext1' style={{color: 'rgb(40, 92, 170)'}}>
                        Digitally<br />
                        SMART.
                    </p>
                    <p className='body'>
                        WEP is going contactless, efficiently<br /> “hands-free”- it’s the smart way for today<br />,
                        and the way of tomorrow.
                    </p>
                    {/* </div> */}
                </Grid>

                {/* Right Side */}
                <Grid item xs={12} md={6}>
                    <img src={MenImage} style={{ transform: "scaleX(-1)" }} />
                </Grid>
            </Grid>

            {/* Bottom Image */}
            <Grid container padding={4} spacing={3}>
                <Grid item xs={0} md={6}>
                <img src={Image1} />
                </Grid>
                <Grid item xs={12} md={6}   >
                   
                   <img src={Image2} />
                </Grid>
            </Grid>
        </>
    )
}

export default Technology