import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import image1 from "../../assets/before-1-at-2x-tenth.png"
import image2 from "../../assets/after-retail-1-at-2x-3934_2456_78_0-quarter.png"
import image3 from "../../assets/before-2-at-2x-4012_2393_0_0-tenth.png"
import image4 from "../../assets/after-retail-2-at-2x-3680_2264_174_0-quarter.png"
import "./GroundFloor.css"

const GroundFloor = () => {


  return (
    <>
      
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} md={6} className='relative'>
            {/* Show sub items */}
            <div className='flex absolute right-0 bottom-0' >
            <div>
            <div className='horizontalLineBlue my-2'></div>
                <p className='spanTitle1 my-2'>
                  <span>GROUND FLOOR RETAIL</span>
                </p>

                <p className='spanTitle1 my-2'>
                  Convenience and variety provide effortless shopping for tenants and visitors alike in this bright and cheerful space
                </p>
            </div>
             <div style={{width:'100%',height:'100%'}}>
             <img src={image1} style={{ width: '100%' ,height:'100%', objectFit:'cover'}} />

            </div>
             
            </div>
          </Grid>
          <Grid item xs={12} md={6} >
            <img src={image2} />
          </Grid>
        </Grid>


        {/* For showing bottom image */}
        <Grid container spacing={3} padding={4}>
          <Grid item xs={12} md={6}>
            <div className='flex justify-end'>
              <Grid item xs={0} md={2}>
                  {/* Space */}
              </Grid>
              <Grid item xs={12} md={4}>
                <img src={image3} />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>

            <img src={image4} style={{ width: '100%' }} />
          </Grid>
        </Grid>
      
    </>
  );
};

export default GroundFloor;
