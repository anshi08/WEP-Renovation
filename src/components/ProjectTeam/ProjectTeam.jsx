import React from 'react';
import bgImage from "../../assets/team.jpg";
import './ProjectTeam.css';
import QuadRealGroup from './QuadRealGroup';
import Teams from './Teams';
import Bgimage from "../../assets/TeamsBgImage.png"
import Planning from './Planning';
import { motion } from 'framer-motion';
import ProjectTeamData from "./ProjectTeam.json"

const ProjectTeam = () => {

  const data = ProjectTeamData.response.data.data
  return (
    <>
      <div>
        <div style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '300px',
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
            top: "20%",
            left: "13%",
            opacity: '1',
            zIndex: '1' // Ensure the text is displayed above the background image
          }}
        >
          <p className='redevelopmentTeam'>
            {data.main_text.text_first}
          </p>
        </motion.div>
      </div>

      <div style={{ backgroundColor: 'rgb(249, 250, 252)', padding: '2rem' }}>
        <QuadRealGroup QuadRealData={data.QuadRealGroup_text}/>
      </div>

      <div style={{ padding: '2rem', position: 'relative' }}>
        <Teams TeamsData={data.teams}/>
        <div className="bg-image-container">
          <img src={Bgimage} className="bg-image" />
        </div>
      </div>

      <div style={{ padding: '2rem' }}>
        <Planning PlanningData={data.planning_text}/>
      </div>
    </>
  );
}

export default ProjectTeam;
