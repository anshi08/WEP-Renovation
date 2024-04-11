import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./Community.css"
import image from "../../assets/CommunityImage.png"
import comWatermark from "../../assets/community-watermark-at-2x-2178_2400_0_0-half.png"

const Community = () => {
    return (
        <Grid container padding={6} style={{backgroundColor: 'rgb(249, 250, 252)'}} >

            {/* Left Side */}
            <Grid item xs={12} md={8} >
                <div style={{ display: 'flex', flexDirection: 'column',flexWrap:'wrap' }}>
                    <p className='mainheading'>
                      COMMUNITY
                    </p>
                    <p className='boldtext1'>
                    Designed<br/>
                    for People.
                    </p>
                    <p className='body'>
                    Community is where and how we interact, network, and build a<br/> better place and city. With this in mind 
                    WEP has viewed all<br/> common spaces through the lens of places where people can meet,<br/> gather, interact. 
                    Whether casually meeting for a professional chat,<br/> dining with a friend, or collaborating over coffee,
                     WEP has all the space<br/> options you need. 
                    </p>
                </div>
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={4} style={{ backgroundImage: `url(${comWatermark})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <img src={image} />
            </Grid>
        </Grid>
    )
}

export default Community
