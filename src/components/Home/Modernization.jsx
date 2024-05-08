import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./Modernization.css"
import image from "../../assets/modernzation-at-2x-full.png"
// import image2 from "../../assets/after-retail-1-at-2x-3934_2456_78_0-quarter.png"
import { motion } from 'framer-motion'

const Modernization = ({ modernizationData }) => {

  const data = modernizationData
  return (
    <Grid container>

      {/* Left Side */}
      <Grid item xs={12} md={6} style={{padding : '0 2% 0 10%' , marginTop:'3rem'}}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              // y: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          // style={{ padding: '3rem 0' }}

          >
            <p className='mainheading'>
              {data.heading}
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              // y: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          // style={{ padding: '3rem 0' }}

          >
            <p className='BoldText'>
              {data.sub_heading}
            </p>
            <p className='BoldText'>
              {data.sub_heading1}
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              // y: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          // style={{ padding: '3rem 0' }}

          >
            <p className='body'>{data.paragraph}</p>
          </motion.div>
        </div>
      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            // y: 0,
            transition: {
              duration: 2,
            },
          }}
          viewport={{ once: true }}
        style={{ position: 'relative' }}

        >
          <img src={image} style={{position:'absolute',bottom:0 , top:0}}/>
        </motion.div>
        {/* <img src={image2} className="image second-image" /> */}
      </Grid>
    </Grid>
  )
}

export default Modernization