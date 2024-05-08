import React from 'react'
import image1 from "../../assets/Food-Before1.png"
import image2 from "../../assets/Food-after1.png"
import image3 from "../../assets/Food-before2.png"
import image4 from "../../assets/Food-after2.png"
import { Grid, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import "./FoodCourt.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FoodCourt = ({ foodCourtData }) => {

  const data = foodCourtData
  return (
    <>
      <div>
        <Grid container spacing={2} padding={4}>
          <Grid item xs={12} md={6} className='relative' >
            {/* Show sub items */}
            <div className='flex'>
              <Grid item xs={12} md={6}>
                {/* <div className='horizontalLine my-2'></div> */}
                <motion.div
                  className="horizontalLine my-2"
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
              </Grid>
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
              className='absolute bottom-0 fcStyle'

            >
              <img src={image1} style={{ width: '80%' }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, color: '#fff',
                padding: '10px'
              }} className='text'>
                BEFORE 1
              </div>
            </motion.div>


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
              <div style={{
                position: 'absolute', bottom: 0, left: 0, color: '#fff',
                padding: '10px'
              }} className='text'>
                AFTER 1
              </div>
            </motion.div>
          </Grid>
        </Grid>


        {/* For showing bottom image */}
        <Grid container spacing={3} >
          <Grid item xs={12} md={6}>
            <div className='flex justify-end'>
              <Grid item xs={0} md={2}>

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
                  <img src={image3} className='imgStyling'  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, color: '#fff',
                    padding: '10px'
                  }} className='text'>
                    BEFORE 2
                  </div>
                </motion.div>
              </Grid>
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
              <img src={image4} style={{width:'90%'}}/>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, color: '#fff',
                padding: '10px'
              }} className='text'>
                AFTER 1
              </div>
            </motion.div>
          </Grid>
        </Grid>
        <div className='flex items-center justify-center'>
          <div className='RenovationBtn'>
            <Link to="/p/2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p className='btnTextLearnMore'>{data.btn_text}
              <EastIcon className='svg'/></p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodCourt