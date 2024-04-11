import { Grid, Typography } from '@mui/material'
import React from 'react'
import bgImage from "../../assets/navigation-watermark-at-2x-2398_1685_0_258-half.png"
import Image1 from "../../assets/WomenImage.png"
import bikeImage from "../../assets/bike-full.png"
import SignImage from "../../assets/sign-at-2x-2764_2401_0_0-quarter.png"
import "./NavigationCom.css"


const NavigationComponent = () => {
  return (
    <>
      <Grid container >
        {/* Left Side */}
        
          <Grid item xs={12} md={6} style={{
          backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}  >
            <img src={Image1} style={{ width: '200%'}} />
            <img src={bikeImage} style={{ width: '200%', marginLeft: '1rem' }} />
          </Grid>
        
        {/* Right side */}
        <Grid item xs={12} md={6} padding={3} columnSpacing={5}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className='mainheading'>
            NAVIGATION
          </p>
          <p className='boldtext10'>
            Find<br />
            Your Way.
          </p>
          <p className='body'>
            Commuters, make WEP your pedestrian gateway to the LRT Parliament station, via our new and improved Queen Street Entrance, strategically located at the pedestrian and cycle friendly intersection of Queen and O’Connor Streets.
            Once you’re here, there’s no guessing; with new navigation and wayfinding initiatives, and barrier free access, everyone can get to where they’re going smoothly.
          </p>
        </div>
        <img src={SignImage} alt="Sign" style={{ width: '70%', height: 'auto', marginTop: '2rem',marginLeft:'2rem' }} />
      </Grid>
      </Grid>
    </>
  )
}

export default NavigationComponent