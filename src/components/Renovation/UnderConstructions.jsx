import { Grid } from '@mui/material'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import "./UnderConstructions.css"
import image1 from "../../assets/Thumbnail1.png"
import image2 from "../../assets/Thumbnail2.png"
import image3 from "../../assets/Thumbnail1.png"
import image4 from "../../assets/Thumbnail4.png"
import image5 from "../../assets/Thumbnail5.png"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ConstructionIcon from '@mui/icons-material/Construction';
import carImage1 from "../../assets/carImage1.jpg"
import carImage2 from "../../assets/carImage2.jpg"
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import TabSvg1 from "../../assets/image (3).svg"
import TabSvg2 from "../../assets/image (4).svg"
import TabSvg3 from "../../assets/image (5).svg"

const videos = [
    {
        "id": 1,
        "url": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        "thumb": image1,
        "date": '2023-08-23',
        "title": 'Ground floor retail construction is nearing completion. The Food Court is 99% complete and ready for tenant build-out. Take a look inside!'
    },
    {
        "id": 2,
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "thumb": image2,
        "date": '2023-05-29',
        "title": 'Construction Update Video 4. Feature columns complete throughout; lighting and electrical complete throughout Food Court; and so much more!'
    },
    {
        "id": 3,
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "thumb": image3,
        "date": '2022-12-14',
        "title": 'Construction Update Video 3 - Infill of rotunda complete, food court ceiling installation underway.'
    },
    {
        "id": 4,
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "thumb": image4,
        "date": '2022-09-8',
        "title": 'Construction Update Video 2 - more demolition, and rotunda stairs begin to transform!'
    },
    {
        "id": 5,
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        "thumb": image5,
        "date": '2021-09-17',
        "title": 'Construction Update Video 1 - Demolition is underway! Take a look inside.'
    },

]

const carousalImages = [
    {
        "id":1,
        "date":"2023-11-10",
        "title":"Ground floor lounge is complete and ready for your use. Food Court furniture is 99% installed, with Tenant fit-up underway.",
        "image1":carImage1,
        "image2":carImage2
    },
]
const UnderConstructions = () => {

    //For Selecting videos
    const [selectedVideo, setSelectedVideo] = useState(videos[0].url);

    const handleThumbnailClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const [selectedCarousal, setSelectedCarousal] = useState(carousalImages[0])

    // Tabs
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container padding={3}>

            {/* Right Side  */}
            <Grid item xs={12} md={6} padding={2}>
                <p className='contructionHeading'>Watch Construction Updates Here</p>
                {selectedVideo && (
                    <div>
                        <ReactPlayer url={selectedVideo} controls width="100%" height="auto"
                            light={<img src={videos.find(video => video.url === selectedVideo)?.thumb} width="100%" height="auto" />} />
                        <div>
                            <p className='date'>{videos.find(video => video.url === selectedVideo)?.date}</p>
                            <p className='vedioTitle'>{videos.find(video => video.url === selectedVideo)?.title}</p>
                        </div>
                    </div>
                )}

                <div className='flex flex-row flex-wrap mt-2'>
                    {videos.map(video => (
                        <img
                            key={video.id}
                            src={video.thumb}
                            // alt={video.title}
                            onClick={() => handleThumbnailClick(video.url)}
                            style={{ cursor: 'pointer', marginRight: 10, marginBottom: 10, width: 100, height: 'auto' }}
                        />
                    ))}
                </div>
            </Grid>

            {/* vertical Line */}

            <Grid item xs={12} md={6} padding={2} >
                <p className='WEPHeading'>WEP’s Exciting Renovation is Well Underway. </p>
                <p className='updatetext'>Click on each tab and you’ll be able to keep pace with our updates.</p>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange}
                             variant="scrollable"
                             scrollButtons="auto"
                            >
                              <Tab
    value="1"
    label={
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <img src={TabSvg2} alt="Construction" /> {/* Make sure to add the alt attribute */}
            Construction
        </div>
    }
/>
                                
                                <Tab 
                                value="2"
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <img src={TabSvg1} alt="Tenants" /> {/* Make sure to add the alt attribute */}
                                        Tenants
                                    </div>
                                }
                                />
                                <Tab value="3"
                                  label={
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <img src={TabSvg3} alt="Tenants" /> {/* Make sure to add the alt attribute */}
                                        Community
                                    </div>
                                }
                                />
                            </TabList>
                        </Box>

                        <TabPanel value="1">
                            <div className='flex flex-row'>
                                   {carousalImages.map((image => (
                                    <>
                                    
                                <div className='flex flex-col flex-wrap'>
                                    <p className='dateImage'>{image.date}</p>
                                    <p className='imageTitle'>{image.title}</p>
                                    <img src={image.image1} className='mt-2' />
                                </div>
                                <div className='flex ml-2'>
                                <img src={image.image2} style={{width:'100%' , height:'auto',objectFit:'cover'}} />
                                </div>
                                    </>
                                )))}
                            </div>
                            <div className='flex mt-2 justify-center'>
                                <div><WestIcon /></div>
                                <p>1/10</p>
                                <div><EastIcon /></div>
                                </div>
                            
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>
            </Grid>
        </Grid>
    )
}

export default UnderConstructions