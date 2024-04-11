import React from 'react'
import Image1 from "../../assets/Image23.png"
import { Typography } from '@mui/material'
import "./NoDrop.css"

const NoDropOutzone = () => {
    return (
        <>
            <div className='flex flex-row justify-evenly flex-wrap' >
                <div className='flex flex-col' >
                    <img src={Image1} style={{ width: '637px' }} />
                    <Typography className='footertext'>NO DROP-OUT ZONES</Typography>
                </div>
                <div className='flex flex-col' >
                    <div className='line my-6'></div>
                    <p className='SmartTechText'>
                        With SMART technology incorporated throughout the WEP<br /> complex, people will be able to enjoy hands-free
                        “wave and<br /> open” access points, contactless food ordering and payment for<br /> speedy delivery. With high
                        speed WI FI available throughout the<br /> public realm, and no drop-out-zones, tenants and guests will<br /> enjoy
                        all the freedom today’s technology brings. Our SMART<br /> approach extends to creating a more sustainable,
                        energy<br /> efficient, and healthier building through an optimized energy<br /> management plan based on a variety
                        of sensors and data<br /> collection - a win win for the environment and all occupants.
                    </p>
                </div>
            </div>
        </>
    )
}

export default NoDropOutzone
