import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import image1 from "../../assets/before-1-at-2x-tenth.png"
import image2 from "../../assets/after-retail-1-at-2x-3934_2456_78_0-quarter.png"
import image3 from "../../assets/before-2-at-2x-4012_2393_0_0-tenth.png"
import image4 from "../../assets/after-retail-2-at-2x-3680_2264_174_0-quarter.png"
import "./GroundFloor.css"
import { motion } from 'framer-motion';

const GroundFloor = ({ groundFloorData }) => {

  const data = groundFloorData

  return (
    <>

      <Grid container spacing={1} padding={3} style={{marginLeft:'5%'}}>
        <Grid item xs={12} md={6} className='relative'>
          {/* Show sub items */}
          <div className='flex absolute right-0 bottom-0' >
            <div>
              {/* <div className='horizontalLineBlue my-2'></div> */}
              <motion.div
                className="horizontalLineBlue my-2"
                initial={{ width: '0px' }}
                animate={{ width: '60px' }}
                transition={{ duration: 1 }}
                style={{
                  width: '60px',
                  height: '5px',
                  backgroundColor: 'rgb(93, 199, 209)',
                  marginLeft: '1rem'
                }}
              />

              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
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
                <p className='spanTitle1 my-2'>
                  <span>{data.text}</span>
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
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
                <p className='spanTitle1 my-2'>
                  {data.sub_text}
                </p>
              </motion.div>
            </div>

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
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >

              <img src={image1} style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, color: '#fff', 
              padding: '10px' }} className='text'>
                BEFORE 1
              </div>
            </motion.div>

          </div>
        </Grid>

        <Grid item xs={12} md={6} >
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
            className='relative'
          >
            <img src={image2} style={{width:'90%'}}/>
            <div style={{ position: 'absolute', bottom: 0, left: 0, color: '#fff', padding: '10px' }} className='text'>
                AFTER 1
              </div>
          </motion.div>
        </Grid>
      </Grid>


      {/* For showing bottom image */}
      <Grid container spacing={2} style={{marginLeft:'-5%'}}>
        <Grid item xs={12} md={6}>
          <div className='flex justify-end'>
            <Grid item xs={12} md={2}>
              {/* Space */}
            </Grid>
            <Grid item xs={12} md={4}>
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
                className='relative'
              >
                <img src={image3} style={{width:'100%'}}/>
                <div style={{ position: 'absolute', bottom: 0, left: 0, color: '#fff', 
                padding: '10px' }} className='text'>
                BEFORE 2
              </div>
              </motion.div>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
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
            className='relative'

          >
            <img src={image4} style={{ width: '90%' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0,color: '#fff', 
            padding: '10px' }} className='text'>
                AFTER 2
              </div>
          </motion.div>
        </Grid>
      </Grid>

    </>
  );
};

export default GroundFloor;
