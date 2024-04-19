import { Grid, Typography } from '@mui/material'
import React from 'react'
import bgImage from "../../assets/navigation-watermark-at-2x-2398_1685_0_258-half.png"
import Image1 from "../../assets/WomenImage.png"
import bikeImage from "../../assets/bike-full.png"
import SignImage from "../../assets/sign-at-2x-2764_2401_0_0-quarter.png"
import "./NavigationCom.css"
import { motion } from 'framer-motion'


const NavigationComponent = ({ navigationComponent }) => {

  const data = navigationComponent
  return (
    <>
      <Grid container >
        {/* Left Side */}

        <Grid item xs={12} md={6} style={{
          backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}  >
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
            <img src={Image1} style={{ width: '200%' }} />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            <img src={bikeImage} className='bikeImg' />
          </motion.div>
        </Grid>

        {/* Right side */}
        <Grid item xs={12} md={6} padding={3} columnSpacing={5}>
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
                {data.nav_heading}
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
              <p className='boldtext10'>
                 {data.nav_subHeading}
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
                {data.nav_para}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            <img src={SignImage} alt="Sign" style={{ width: '70%', height: 'auto', marginTop: '2rem', marginLeft: '2rem' }} />
          </motion.div>
        </Grid>
      </Grid>
    </>
  )
}

export default NavigationComponent