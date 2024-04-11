import React from 'react'
import image1 from "../../assets/RenovationFoodCourt1.png"
import image2 from "../../assets/RenovationFoodCourt2.png"
import image3 from '../../assets/RenovationFoodCourt3.png'
import "./Gallery.css"

const Gallery = () => {
    return (
        <>
        <div style={{padding:'3rem'}}>
        <p className='gallery'>Gallery</p>
            <div class="row">
                <div class="column">
                    <img src={image1} alt="" style={{width:"100%"}} />
                </div>
                <div class="column">
                    <img src={image2} alt="" style={{width:"100%"}} />
                </div>
                <div class="column">
                    <img src={image3} alt="" style={{width:"100%"}} />
                </div>
            </div>
            </div>
        </>
    )
}

export default Gallery