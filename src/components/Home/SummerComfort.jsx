import React from 'react'
import "./SummerComfort.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import { Grid } from '@mui/material'

const SummerComfort = () => {
  return (
    <>
    <Grid container padding={4}>
    <Grid item xs={12} md={7} >
  <div className="container">
    <div className="image-stack">
      <div className="image-stack__item image-stack__item--top">
        <img
          src={image2}
          alt=""
        />
      </div>

      <div className="image-stack__item image-stack__item--middle">
        <img
          src={image1}
          alt=""
        />
      </div>

      <div className="image-stack__item image-stack__item--bottom">
        <img 
          src={image3}
          alt=''
        />
      </div>
    </div>
  </div>
</Grid>

    <Grid item xs={12} md={5} padding={4} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <div>
      <div className='greenLine my-3'></div>
      <p className='summerComfort my-2'>
      Summer comfort, winter warmth, and healthy temperatures all year round have also been a goal, and achieved through an optimized energy management plan – an important initiative that also helps us achieve many of our environmental  certifications – LEED EBOM Platinum, BOMA BEST Platinum certification, and Energy Star. The sum value: a happier, healthier workforce, elevated spirits and a sense of well-being for all guests and patrons. 
      </p>
      </div>
    </Grid>
    </Grid>
    </>
  )
}

export default SummerComfort