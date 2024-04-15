import React from 'react'
import bgImage from "../../assets/contactUs.jpg"
import { motion } from 'framer-motion'
import './Leasing.css'
import LeasingInquires from './LeasingInquires'
import OfficeInquires from './OfficeInquires'
import GeneralInquires from './GeneralInquires'
import Bgimage from "../../assets/TeamsBgImage.png"

const Leasing = () => {
  return (
    <>
      <div>
        <div style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '310px',
          position: 'relative',
          filter: 'brightness(50%)' // Apply brightness filter to the background image
        }}>
        </div>
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
          style={{
            position: "absolute",
            top: "25%",
            left: "13%",
            opacity: '1',
            zIndex: '1' // Ensure the text is displayed above the background image
          }}
        >
          <p className='contactUs'>
            Contact Us
          </p>
        </motion.div>
      </div>

      <div style={{ backgroundColor: 'rgb(249,250,252)', padding: '0 1rem', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'absolute', right: 0, zIndex: -1,height:'100%' }}>
          <img src={Bgimage} className="bg-image" alt="Background" />
        </div>
        <LeasingInquires />
        <hr style={{ borderColor: 'rgb(91, 92, 93)', borderWidth: '1px' }} className='my-8'/>
        <OfficeInquires />
        <hr style={{ borderColor: 'rgb(91, 92, 93)', borderWidth: '1px' }} className='my-8'/>
        <GeneralInquires />
      </div>

    </>
  )
}

export default Leasing