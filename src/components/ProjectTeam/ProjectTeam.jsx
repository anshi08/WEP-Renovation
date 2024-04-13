import React from 'react';
import bgImage from "../../assets/team.jpg";
import './ProjectTeam.css';
import QuadRealGroup from './QuadRealGroup';
import Teams from './Teams';
import Bgimage from "../../assets/TeamsBgImage.png"
import Planning from './Planning';
import { motion } from 'framer-motion';

const ProjectTeam = () => {
  return (
    <>
      <div>
        <div style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '459px',
          position: 'relative',
          filter: 'brightness(70%)' // Apply brightness filter to the background image
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
          <p className='redevelopmentTeam'>
            Redevelopment Team
          </p>
        </motion.div>
      </div>

      <div style={{ backgroundColor: 'rgb(249, 250, 252)', padding: '2rem' }}>
        <QuadRealGroup />
      </div>

      <div style={{ padding: '2rem', position: 'relative' }}>
        <Teams />
        <div className="bg-image-container">
          <img src={Bgimage} className="bg-image" alt="Background" />
        </div>
      </div>

      <div style={{ padding: '2rem' }}>
        <Planning />
      </div>
    </>
  );
}

export default ProjectTeam;
