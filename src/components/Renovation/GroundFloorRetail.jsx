import React from 'react'
import Map1 from "../../assets/Map1.jpg"
import EyeSvg from "../../assets/image (6).svg";
import "./GroundFloorRetail.css"

const GroundFloorRetail = () => {
    return (
    <>
        <div style={{padding:'3rem'}}>
            <div style={{marginLeft:'6%'}}>
                <p className='GFR'>Level 1
                    Ground Floor Retail</p>
            </div>
            <div className='flex justify-center items-center mt-9'>
                <img src={Map1} style={{height:'auto'}} />
            </div>
        </div>
    </>
)
}

export default GroundFloorRetail