import React from 'react'
import image1 from "../../assets/Food-Before1.png"
import image2 from "../../assets/Food-after1.png"
import image3 from "../../assets/Food-before2.png"
import image4 from "../../assets/Food-after2.png"
import { Grid, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import "./FoodCourt.css"
import { Link } from 'react-router-dom'

const FoodCourt = () => {
  return (
    <>
    <div>
      <Grid container spacing={2} padding={4}>
        <Grid item xs={12} md={6} className='relative' >
          {/* Show sub items */}
          <div className='flex'>
            <Grid item xs={12} md={6}>
              <div className='horizontalLine my-2'></div>
              <p className='spanTitle1 my-2'>
                <span>FOODCOURT</span>
              </p>

              <p className='spanTitle1 my-2'>
              Enjoy delicious food in a lively and upbeat surrounding with plenty of seating in the revitalized Food Court.
              </p>
            </Grid>
          </div>
          
           <div className='absolute right-0 bottom-0'>
              <img src={image1} style={{ width: '100%' }} />
              </div>
            
        </Grid>
        <Grid item xs={12} md={6} >
          <img src={image2} />
        </Grid>
      </Grid>


      {/* For showing bottom image */}
      <Grid container spacing={3} >
        <Grid item xs={12} md={6}>
          <div className='flex justify-end'>
            <Grid item xs={12} md={2}>

            </Grid>
            <Grid item xs={12} md={4}>
              <img src={image3} className='imgStyling' />
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={6} >
          
          <img src={image4} />
          
        </Grid>
      </Grid>
      <div className='flex items-center justify-center'>
      <div className='RenovationBtn'>
        <Link to="/p/2" style={{ display: 'flex',justifyContent:'center',alignItems:'center'}}>
        <p className='btnTextLearnMore'>Learn more about THE RENOVATION</p> 
        <EastIcon style={{color:'rgb(87,87,87)'}}  />
        </Link>
      </div>
      </div>
    </div>
  </>
  )
}

export default FoodCourt