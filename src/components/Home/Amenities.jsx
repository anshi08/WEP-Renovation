import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./Amenities.css"
import bgImage from "../../assets/amenities-watermark-at-2x-2142_1658_0_114-half.png"
import MenImage from "../../assets/a0476b69872c8ef2909127e633a347284b8f5519-full.png"
import { motion } from 'framer-motion'

const Amenities = () => {
  return (
    <>
     <div>
        <Grid container style={{backgroundColor: 'rgb(249, 250, 252)'}}>
            <Grid item xs={12} md={6} 
            style={{ backgroundImage: `url(${bgImage})`, 
            backgroundSize: 'cover', backgroundPosition: 'center'}}>
               
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
                    className='flex justify-center'

                >
                  <img src={MenImage} width={300} style={{marginTop:'1rem'}}/>
                  </motion.div>
                  
            </Grid>

            <Grid item xs={12} md={6} padding={3}>

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
                 <p className='amenities'>
                   AMENITIES
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
                 <p className='boldHeading1'>
                 Tastefully 
                 Transformed.
                 </p>
                 </motion.div>
                 <div>

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
                 <p style={{marginTop:'1rem'}} className='body3'>
                 The new food court will be fully transformed and renovated with a modern design that honours 
                 the history and tradition of the building while infusing it with innovative technological 
                 advances, providing the best possible experience for both our retail partners and customers.
                 </p>
                </motion.div>

                 <hr className='hrLine' style={{marginTop:'1rem'}}  />

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
                 <p className='body4' style={{marginTop:'1rem'}} >
                 Natural sunlight through large windows, together with enhanced hours will encourage people 
                 to meet, dine and enjoy this space certainly during working hours but also after work – 
                 whether it be take-home, happy hour with your colleagues, or dinner before a show! An 
                 enhanced service and amenity focused retail mix, complete with renovated shopfronts, will 
                 create conveniences and efficiencies for office occupants and the community at large.
                 </p>
                 </motion.div>
                 </div>
                </Grid>

        </Grid>
     </div>
    
    </>
  )
}

export default Amenities