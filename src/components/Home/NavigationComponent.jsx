import { Grid, Typography } from '@mui/material'
import React from 'react'
import bgImage from "../../assets/navigation-watermark-at-2x-2398_1685_0_258-half.png"
import Image1 from "../../assets/WomenImage.png"
import bikeImage from "../../assets/bike-full.png"
import SignImage from "../../assets/sign-at-2x-2764_2401_0_0-quarter.png"
import "./NavigationCom.css"
import { motion } from 'framer-motion'


const NavigationComponent = () => {
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
                NAVIGATION
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
                Find
                Your Way.
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
                Commuters, make WEP your pedestrian gateway to the LRT Parliament station, via our new and improved Queen Street Entrance, strategically located at the pedestrian and cycle friendly intersection of Queen and O’Connor Streets.
                Once you’re here, there’s no guessing; with new navigation and wayfinding initiatives, and barrier free access, everyone can get to where they’re going smoothly.
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