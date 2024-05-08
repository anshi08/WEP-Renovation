import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./Amenities.css"
import bgImage from "../../assets/amenities-watermark-at-2x-2142_1658_0_114-half.png"
import MenImage from "../../assets/a0476b69872c8ef2909127e633a347284b8f5519-full.png"
import { motion } from 'framer-motion'

const Amenities = ({ amenitiesData }) => {

    const data = amenitiesData
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
                    className='flex justify-center relative'

                >
                  <img src={MenImage} width={300} style={{marginTop:'10%',position:'absolute',bottom:0,top:0}}/>
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
                   {data.amenities_heading}
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
                   {data.amenities_text}
                 </p>
                 <p className='boldHeading1'>
                   {data.amenities_text1}
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
                   {data.amenities_para1}
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
                   {data.amenities_para2}
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