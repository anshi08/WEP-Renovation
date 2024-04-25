import React from 'react'
import "./FoodCourt.css"
import bgWatermark from "../../assets/waterMarkReno.png"
import EastIcon from '@mui/icons-material/East';

const BottomPart = ({ FoodCourtData }) => {

    const food_data = FoodCourtData
    
  return (
    <>
     <div style={{ padding: '0 1rem 1rem' }}>
                        {/* Semi-transparent overlay */}
                        <div style={{
                            position: 'relative',
                            backgroundColor: 'rgba(29, 29, 29, 0.85)', display: 'flex',
                            justifyContent: 'flex-end', flexWrap: 'wrap', alignItems: 'center', zIndex: '0'
                        }}>

                            <div className='flex justify-center items-center' style={{ margin: '0 auto' }}>
                                {/* First column */}
                                <div style={{ padding: '7%' }}>
                                    <p className='bottomHeading'>{food_data.bottom_text1}</p>
                                </div>

                                {/* Second column */}
                                <div style={{ padding: '7%' }}>
                                    <p className='bottomText2'>{food_data.bottom_text2}</p>

                                    <div style={{ position: 'relative', zIndex: 2000 }}>
                                        <a href='https://brochure.thenewwep.com/' target='_blank'
                                            style={{ zIndex: '1', pointerEvents: 'auto' }}>
                                            <p className='cursor-pointer hyperLinkText'>{food_data.bottom_btn_text} <EastIcon
                                                style={{ color: 'rgb(143,143,143)' }} /></p>
                                            <span className="line"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Watermark image */}
                            <img src={bgWatermark} style={{
                                position: 'absolute', top: '50%', right: 0,
                                transform: 'translateY(-50%)', width: 'auto', height: '100%', opacity: 0.26
                            }} />
                        </div>
                    </div>
    </>
  )
}

export default BottomPart