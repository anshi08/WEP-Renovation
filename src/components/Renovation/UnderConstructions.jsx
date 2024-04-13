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
import carImage1 from "../../assets/carImage1.jpg"
import carImage2 from "../../assets/carImage2.jpg"
import carImage3 from "../../assets/carImage3.jpg"
import carImage4 from "../../assets/carImage4.jpg"
import carImage5 from "../../assets/carImage5.jpg"
import carImage6 from "../../assets/carImage6.jpg"
import carImage7 from "../../assets/carImage7.jpg"
import carImage8 from "../../assets/carImage8.jpg"
import carImage9 from "../../assets/carImage9.jpg"
import carImage10 from "../../assets/carImage10.jpg"
import carImage11 from "../../assets/carImage11.jpg"
import carImage12 from "../../assets/carImage12.jpg"
import carImage13 from "../../assets/carImage13.jpg"
import carImage14 from "../../assets/carImage14.jpg"
import carImage15 from "../../assets/carImage15.jpg"
import carImage16 from "../../assets/carImage16.jpg"
import carImage17 from "../../assets/carImage17.jpg"
import carImage18 from "../../assets/carImage18.jpg"
import carImage19 from "../../assets/carImage19.jpg"
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import TabSvg1 from "../../assets/image (3).svg"
import TabSvg2 from "../../assets/image (4).svg"
import TabSvg3 from "../../assets/image (5).svg"
import tab1 from "../../assets/tenant1.jpeg";
import tab2 from "../../assets/tenant2.png"
import tab3 from "../../assets/tenant3.jpg";
import tab4 from "../../assets/tenant4.jpg";
import tab5 from "../../assets/tenant5.jpg";
import comm1 from "../../assets/comm1.jpg";
import comm2 from "../../assets/comm2.jpg";
import comm3 from "../../assets/comm3.jpg";
import comm4 from "../../assets/comm4.jpg";
import { motion } from 'framer-motion'

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
        "id": 1,
        "date": "2023-11-10",
        "title": "Ground floor lounge is complete and ready for your use. Food Court furniture is 99% installed, with Tenant fit-up underway.",
        "image1": carImage1,
        "image2": carImage2
    },
    {
        "id": 2,
        "date": "2023-08-23",
        "title": "New ground floor lounge is coming to life with finishes and nearly ready for you. Barrier free retail access ramp from 45 O'Connor tower is complete and open.",
        "image1": carImage3,
        "image2": carImage4
    },
    {
        "id": 3,
        "date": "2023-08-23",
        "title": "Food Court is 99% complete and now ready for tenant build out. Bird safe glass installation underway at Queen St entrance.",
        "image1": carImage5,
        "image2": carImage6
    },
    {
        "id": 4,
        "date": "2023-07-04",
        "title": "Food Court finishes are ongoing and nearing competion.",
        "image1": carImage7,
        "image2": carImage8
    },
    {
        "id": 5,
        "date": "2023-06-15",
        "title": "Queen Street entrance progress continues as we prepare for glass installation. Floor tile nearly complete.",
        "image1": carImage9,
        "image2": carImage10
    },
    {
        "id": 6,
        "date": "2023-05-15",
        "title": "Food court level lighting and electrical complete. Feature columns complete throughout.",
        "image1": carImage11,
        "image2": carImage12
    },
    {
        "id": 7,
        "date": "2023-04-6",
        "title": "Installation of new escalators complete and waterproofing of Plaza nearing completion.",
        "image1": carImage13,
        "image2": carImage14
    },
    {
        "id": 8,
        "date": "2023-03-21",
        "title": "Installation of glass storefronts and railings near completion.",
        "image1": carImage15,
        "image2": carImage16
    },
    {
        "id": 9,
        "date": "2023-02-28",
        "title": "In the food court the speciality ceiling is complete and the banquets are being installed. The feature wood slats and marble finishes are taking shape!",
        "image1": carImage17,
        "image2": carImage12
    },
    {
        "id": 10,
        "date": "2022-06-13",
        "title": "Plaza construction commences! Transforming place inside and out.",
        "image1": carImage18,
        "image2": carImage19
    },
]

const TenantsContent = [
    {
        "id": 1,
        "date": "2024-01-18",
        "title": "Happy Goat will be joining us in a larger location. Find them next to the Albert St entrance on the ground floor soon!",
        "image1": tab1,
    },
    {
        "id": 2,
        "date": "2024-01-18",
        "title": "Z-teca will be joining our newly renovated Food Court. Find them on the Second Floor of retail soon!",
        "image1": tab2,
    },
    {
        "id": 3,
        "date": "2024-01-18",
        "title": "Shawarma Maestro will be joining our newly renovated Food Court. Find them on the Second Floor of retail soon!",
        "image1": tab3,
    },
    {
        "id": 4,
        "date": "2024-01-18",
        "title": "Shakey's will be returning to WEP in our newly renovated Food Court. Find them on the Second Floor of retail soon!",
        "image1": tab4,
    },
    {
        "id": 5,
        "date": "2024-01-18",
        "title": "Benton's Menswear will be joining us on the ground floor. Find them next to the Queen St entrance, with an exciting new brand soon.",
        "image1": tab5,
    },
    {
        "id": 6,
        "date": "2022-04-27",
        "title": "Now open in the newly constructed coffee kiosk located in the 100 Queen St lobby. Stop by and grab a coffee, treat or lunch!",
        "image1": tab1,
    }
]

const communityContent = [
    {
        "id": 1,
        "date": "2022-08-16",
        "heading": "Live Mural",
        "title": "Local muralist Dominic Laporte live painted a mural in the Plaza the week of August 16th, 2021. The mural is meant to pay homage to the wild Canadian landscape, the design concept for the Plaza, while tying in the overall themes of the interior renovation. The mural can now be viewed as part of the construction hoarding on Queen St.",
        "image1": comm1,
        "image2": comm2
    },
    {
        "id": 2,
        "date": "2021–11-11",
        "heading": "WEP’s Whales Return Home",
        "title": "After 30 years, WEP’s Whales Return Home to the Canadian Museum of Nature. As we embark on our exciting revitalization project, we felt it was perfect timing to donate the whales to their original home. You can visit them at the Canadian Museum of Nature as part of the Water Gallery.",
        "image1": comm3,
        "image2": comm4
    }
]

const UnderConstructions = () => {

    //For Selecting videos
    const [selectedVideo, setSelectedVideo] = useState(videos[0].url);

    const handleThumbnailClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const [selectedCarousal, setSelectedCarousal] = useState(carousalImages[0])
    const [selectedCommunityContent, setSelectedCommunityContent] = useState(communityContent[0])

    // Tabs
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Carousal Image change
    const handleNextItem = () => {
        const currentIndex = carousalImages.findIndex(image => image.id === selectedCarousal.id);
        const nextIndex = (currentIndex + 1) % carousalImages.length;
        setSelectedCarousal(carousalImages[nextIndex]);
    };

    const handlePrevItem = () => {
        const currentIndex = carousalImages.findIndex(image => image.id === selectedCarousal.id);
        const prevIndex = (currentIndex - 1 + carousalImages.length) % carousalImages.length;
        setSelectedCarousal(carousalImages[prevIndex]);
    };

    //Community Tab
    const handleNextContent = () => {
        const currentIndex = communityContent.findIndex(image => image.id === selectedCommunityContent.id);
        const nextIndex = (currentIndex + 1) % communityContent.length;
        setSelectedCommunityContent(communityContent[nextIndex]);
    }

    const handlePrevContent = () => {
        const currentIndex = communityContent.findIndex(image => image.id === selectedCommunityContent.id);
        const prevIndex = (currentIndex - 1 + communityContent.length) % communityContent.length;
        setSelectedCommunityContent(communityContent[prevIndex]);
    };

    return (
        <Grid container padding={3}>

            {/* Right Side  */}
            <Grid item xs={12} md={6} padding={2}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                // style={{ padding: '3rem 0' }}

                >
                    <p className='contructionHeading'>Watch Construction Updates Here</p>
                </motion.div>
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
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                // style={{ padding: '3rem 0' }}

                >
                    <p className='WEPHeading'>WEP’s Exciting Renovation is Well Underway. </p>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                // style={{ padding: '3rem 0' }}

                >
                    <p className='updatetext'>Click on each tab and you’ll be able to keep pace with our updates.</p>
                </motion.div>
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

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                // y: 0,
                                                transition: {
                                                    duration: 2,
                                                },
                                            }}
                                            viewport={{ once: true }}
                                        // style={{ padding: '3rem 0' }}

                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <img src={TabSvg2} alt="Construction" /> {/* Make sure to add the alt attribute */}
                                                Construction
                                            </div>
                                        </motion.div>
                                    }
                                    className={value === '1' ? 'construction' : 'notSelected'}

                                />

                                <Tab
                                    value="2"
                                    label={
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                // y: 0,
                                                transition: {
                                                    duration: 2,
                                                },
                                            }}
                                            viewport={{ once: true }}
                                        // style={{ padding: '3rem 0' }}

                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <img src={TabSvg1} alt="Tenants" /> {/* Make sure to add the alt attribute */}
                                                Tenants
                                            </div>
                                        </motion.div>
                                    }
                                    className={value === '2' ? 'tenants' : 'notSelected'}
                                />
                                <Tab value="3"
                                    label={
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                // y: 0,
                                                transition: {
                                                    duration: 2,
                                                },
                                            }}
                                            viewport={{ once: true }}
                                        // style={{ padding: '3rem 0' }}

                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <img src={TabSvg3} alt="Community" /> {/* Make sure to add the alt attribute */}
                                                Community
                                            </div>
                                        </motion.div>
                                    }
                                    className={value === '3' ? 'community' : 'notSelected'}
                                />
                            </TabList>
                        </Box>

                        {selectedCarousal &&
                            <>
                                <TabPanel value="1">
                                    <div className='flex flex-row'>
                                        <>

                                            <div className='flex flex-col flex-wrap' style={{ maxHeight: '100%', width: '100%' }}>
                                                <motion.div
                                                    key={selectedCarousal.date}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 50,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                // style={{ padding: '3rem 0' }}

                                                >
                                                    <p className='dateImage'>{selectedCarousal.date}</p>
                                                </motion.div>

                                                <motion.div
                                                    key={selectedCarousal.title}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 50,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                // style={{ padding: '3rem 0' }}

                                                >
                                                    <p className='imageTitle'>{selectedCarousal.title}</p>
                                                </motion.div>

                                                <motion.div
                                                    key={selectedCarousal.image1}
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
                                                >

                                                    <img src={selectedCarousal.image1} className='mt-2 imageStyle' />
                                                </motion.div>
                                            </div>

                                            <motion.div
                                                key={selectedCarousal.id}
                                                initial={{
                                                    opacity: 0,
                                                    x: -100,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        duration: 1,
                                                    },
                                                }}
                                                viewport={{ once: true }}
                                                className='flex ml-2 imageStyle2'
                                                style={{ maxHeight: '100%', width: '100%' }}
                                            >
                                                <img src={selectedCarousal.image2}
                                                    style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />

                                            </motion.div>
                                        </>
                                    </div>
                                    <div className='flex mt-2 justify-center'>
                                        <div><WestIcon onClick={handlePrevItem}
                                            style={{ fontSize: '18px', color: 'rgb(123,124,125)', cursor: 'pointer' }} /></div>
                                        <p className='pageNumber'>{selectedCarousal.id}/10</p>
                                        <div><EastIcon onClick={handleNextItem} style={{ fontSize: '18px', color: 'rgb(123,124,125)', cursor: 'pointer' }} /></div>
                                    </div>
                                </TabPanel>
                            </>
                        }
                        <TabPanel value="2">
                            <div className='flex flex-col'>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                // style={{ padding: '3rem 0' }}

                                >
                                    <p className='panel2'>Meet Our Tenants!</p>
                                </motion.div>

                                {/* Content 1 */}
                                {TenantsContent.map((content) => (
                                    <div className='flex my-1'>
                                        <img src={content.image1} style={{ width: '95px', height: 'auto' }} />
                                        <div className='flex flex-col flex-wrap mx-3'>
                                            <p className='Tdate'>{content.date}</p>
                                            <p className='Tdes'>{content.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel value="3">
                            {selectedCommunityContent &&
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <div className='flex flex-col'>
                                            <motion.div
                                                key={selectedCommunityContent.date}
                                                initial={{
                                                    opacity: 0,
                                                    y: 50,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 1,
                                                    },
                                                }}
                                                viewport={{ once: true }}
                                            // style={{ padding: '3rem 0' }}

                                            >
                                                <p className='commDate'>{selectedCommunityContent.date}</p>
                                            </motion.div>

                                            <motion.div
                                                key={selectedCommunityContent.id}
                                                initial={{
                                                    opacity: 0,
                                                    x: -100,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        duration: 2,
                                                    },
                                                }}
                                                viewport={{ once: true }}
                                            >

                                                <p className='commHeading'>{selectedCommunityContent.heading}</p>
                                                <p className='commTitle'>{selectedCommunityContent.title}</p>
                                            </motion.div>

                                        </div>
                                    </Grid>

                                    {/* Images */}
                                    <Grid item xs={12} md={6}>

                                        <motion.div
                                            key={selectedCommunityContent.id}
                                            initial={{
                                                opacity: 0,
                                                y: 100,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 1,
                                                },
                                            }}
                                            viewport={{ once: true }}
                                            className='flex flex-col'

                                        >
                                            <img src={selectedCommunityContent.image1} className='my-2' />
                                            <img src={selectedCommunityContent.image2} />
                                        </motion.div>

                                    </Grid>
                                    <div className='flex' style={{ margin: ' 0 auto', marginTop: '1rem' }}>
                                        <div><WestIcon onClick={handlePrevContent}
                                            style={{ fontSize: '18px', color: 'rgb(123,124,125)', cursor: 'pointer' }} /></div>

                                        <p className='pageNumber'>{selectedCommunityContent.id}/2</p>

                                        <div><EastIcon onClick={handleNextContent} style={{ fontSize: '18px', color: 'rgb(123,124,125)', cursor: 'pointer' }} /></div>
                                    </div>
                                </Grid>
                            }
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>
        </Grid>
    )
}

export default UnderConstructions