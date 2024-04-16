import React from 'react'
import "./SummerComfort.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'

const SummerComfort = () => {
  return (
    <>
      <Grid container padding={4}>
        <Grid item xs={12} md={7} >
          <div className="container">
            <div className="image-stack">
              <div className="image-stack__item image-stack__item--top">
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
                  <img
                    src={image2}
                    alt=""
                  />
                </motion.div>
              </div>

              <div className="image-stack__item image-stack__item--middle">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  viewport={{ once: true }}
                // style={{ padding: '3rem 0' }}

                >
                  <img
                    src={image1}
                    alt=""
                  />
                </motion.div>
              </div>

              <div className="image-stack__item image-stack__item--bottom">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  viewport={{ once: true }}
                // style={{ padding: '3rem 0' }}

                >
                  <img
                    src={image3}
                    alt=''
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={5} padding={4} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <div>
            <div className='greenLine my-3'></div>

            <motion.div

              initial={{
                opacity: 0,
                x: 100,
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
              <p className='summerComfort my-2'>
                Summer comfort, winter warmth, and healthy temperatures all year round have also been a goal, and
                achieved through an optimized energy management plan – an important initiative that also helps us
                achieve many of our environmental  certifications – LEED EBOM Platinum, BOMA BEST Platinum certification,
                and Energy Star. The sum value: a happier, healthier workforce, elevated spirits and a sense of
                well-being for all guests and patrons.
              </p>
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default SummerComfort