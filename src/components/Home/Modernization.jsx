import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./Modernization.css"
import image from "../../assets/modernzation-at-2x-full.png"
// import image2 from "../../assets/after-retail-1-at-2x-3934_2456_78_0-quarter.png"
import { motion } from 'framer-motion'

const Modernization = () => {
  return (
    <Grid container padding={6}>

      {/* Left Side */}
      <Grid item xs={12} md={6}>
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
              MODERNIZATION
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
              Re-imagined.
              Re-energized.
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
            <p className='body'>
              The new World Exchange Plaza’s modernization is nothing short of transformative. It ushers
              in a new spirit destined to resonate with all who gather, work, and visit. Where common and
              public realm areas have been designed to be places to meet, gather, collaborate or spend a
              solo moment, peacefully. Where every common area and amenity has been thoughtfully reconsidered
              and renovated to reflect modern sensibilities. A place that beckons, inspires, and brings
              a new appreciation for this legendary destination.
            </p>
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
        // style={{ padding: '3rem 0' }}

        >
          <img src={image} />
        </motion.div>
        {/* <img src={image2} className="image second-image" /> */}
      </Grid>
    </Grid>
  )
}

export default Modernization