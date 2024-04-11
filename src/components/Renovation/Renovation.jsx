import React from 'react'
import BgImage from "../../assets/RenovationBgImage.png"
import SouthIcon from '@mui/icons-material/South';
import "./Renovation.css"
import UnderConstructions from './UnderConstructions';
import Gallery from './Gallery';

const Renovation = () => {

  const handleScroll = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
};

  return (
    <>
    <div style={{
      backgroundImage: `url(${BgImage})`,
      backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '550px', position: 'relative',
      filter: 'brightness(70%)'
  }}>

      <div style={{
            position: "absolute",
            bottom: "20px",
            left: "50px",
            opacity:'1'
      }}>
          <p className='FollowTheText'>
              Follow<br />the build.
          </p>

          <p className='paragraph'>
              THE NEW WORLD EXCHANGE PLAZA
          </p>

          {/* Down Arrow */}
          <div className='learnmore'>
              <div className="down-arrow"><SouthIcon /></div>
              <button onClick={handleScroll} className='text'>Learn More</button>
          </div>
      </div>
  </div>

  <div style={{backgroundColor:'rgb(249,250,252)'}}>
     <UnderConstructions />
     <Gallery />
  </div>
  </>
  )
}

export default Renovation