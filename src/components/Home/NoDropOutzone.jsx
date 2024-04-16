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
                        With SMART technology incorporated throughout the WEP complex, people will be able to enjoy hands-free
                        “wave and open” access points, contactless food ordering and payment for speedy delivery. With high
                        speed WI FI available throughout the public realm, and no drop-out-zones, tenants and guests will enjoy
                        all the freedom today’s technology brings. Our SMART approach extends to creating a more sustainable,
                        energy efficient, and healthier building through an optimized energy management plan based on a variety
                        of sensors and data collection - a win win for the environment and all occupants.
                    </p>
                </div>
            </div>
        </>
    )
}

export default NoDropOutzone
