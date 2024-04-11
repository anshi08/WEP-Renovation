import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from "../../assets/newthewep-at-2x-half.jpg"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './NewWep.css'
import { Link } from 'react-router-dom';
import waterMark from "../../assets/homepage-watermark-at-2x-quarter.png"

function NewWEP() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}  style={{ backgroundImage: `url(${waterMark})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >


                <p className='text1'>
                    Get Ready. <br />Get Excited for<br />the New WEP!
                </p>

                <p className='body1'>
                    Watch as our dynamic revitalization transforms this<br /> legendary
                    downtown destination into a mindfully<br /> modernized, all-day people place.
                    Work, meet, dine,<br /> gather, connect and engage with others in an<br /> environment that
                    inspires the countless possibilities,<br /> opportunities, and unexpected delights of every day.
                </p>

                {/* For showing 3 cards */}

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Grid container spacing={2} className='clearfix'>

                    <Grid item xs={12} md={4}>
                        <Card sx={{
                            display: 'flex', flexDirection: 'column', height: '200px',
                            backgroundColor: 'transparent', borderLeft: '5px solid black'
                        }} >
                            <CardContent>
                                <p className='heading'>THE RENOVATION</p>
                                <p className='title'>Learn more about our plans and get the latest construction updates.</p>
                            <Link to="/p/2" className='hover:underline link'>Learn More <ArrowRightAltIcon/></Link>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <Card sx={{
                            display: 'flex', flexDirection: 'column', height: '200px',
                            backgroundColor: 'transparent', borderLeft: '5px solid black'
                        }} >
                            <CardContent>
                                <p className='heading'>REDEVELOPMENT TEAM</p>
                                <p className='title'>Learn more about the team behind the project</p>
                            <Link to="/p/3" className='hover:underline link'>Learn More <ArrowRightAltIcon/></Link>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <Card sx={{
                            display: 'flex', flexDirection: 'column',height: '200px',
                            backgroundColor: 'transparent', borderLeft: '5px solid black'
                        }} >
                            <CardContent>
                                <p className='heading'>CONTACT</p>
                                <p className='title'>Curious about our new look and the opportunities that are here?</p>
                            <Link to="/p/4" className='hover:underline link'>Contact Us Now <ArrowRightAltIcon/></Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                </Box>
            </Grid>

            {/* Right side */}
            <Grid item xs={12} md={4}>
                <img src={Image} />
            </Grid>
        </Grid>
    );
}

export default NewWEP;
