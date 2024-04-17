import { Link, NavLink } from "react-router-dom";
import './Footer.css'
import EastIcon from '@mui/icons-material/East';
import TwitterImg from '../../assets/image (7).svg'
import LinkedInImg from '../../assets/image (8).svg'
import { motion } from "framer-motion";


export default function Footer() {
    return (
        <>
            <footer className="relative bottom-0 w-full bg-white py-6">
                <div className="flex flex-row justify-between px-4 py-6 flex-wrap">
                    {/* First sub-div */}
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
                        <div className="flex flex-col">
                            <Link to='https://www.quadreal.com/' target="_blank" className="ProudlyText">Proudly Managed by:
                                <img
                                    src="https://the-renovation.azurewebsites.net/media/70ce93a8ac0cb49c280b2c30e95aaa54/quadreal-at-2x-tenth.png"
                                    className="w-32 h-auto"
                                    alt="Quadreal logo"
                                />
                            </Link>
                        </div>
                    </motion.div>
                    {/* Second sub-div */}

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
                        <div className="flex flex-col">
                            <p className="NumText">45 O'Connor Street, Suite 730<br />Ottawa, ON K1P 1A4</p>
                            <a href="https://goo.gl/maps/tGCSe7UbZxPvE2JU8" target="_blank" rel="noopener noreferrer">
                                <button className="mt-2 inline-flex items-center hover:underline">
                                    <p className="gettingHere">Getting here <EastIcon style={{ color: 'rgb(171,171,171)' }} /></p>
                                </button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Third sub-div */}

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
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <Link to="tel:613-690-7400" className="flex items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <strong>T.</strong>
                                    <p className="Number ml-1">613-690-7400</p>
                                </Link>
                            </div>
                            <Link to="https://goo.gl/maps/tGCSe7UbZxPvE2JU8" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center hover:underline">
                                <p className="WepCom">WorldExchangePlaza.com <EastIcon style={{ color: 'rgb(171,171,171)' }} /></p>
                            </Link>
                        </div>

                    </motion.div>

                    {/* Fourth sub-div */}

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
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <Link to="https://twitter.com/quadrealgroup" >
                                    <img src={LinkedInImg} />
                                </Link>
                                <Link to="https://www.linkedin.com/company/quadreal/" >
                                    <img src={TwitterImg} style={{ marginLeft: '1rem' }} />
                                </Link>
                            </div>
                            <Link to="https://www.quadreal.com/legal/"
                                className="my-3 gettingHere">Privacy Policy</Link>
                        </div>
                    </motion.div>
                </div>

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
                    <div className="flex justify-between flex-wrap">
                        <p className="footerText">
                            © 2021 QUADREAL and the Quadrant Logo are trademarks of QuadReal Property Group Limited Partnership. All rights reserved.
                            All renderings are design concepts for visionary purposes and are subject to change
                        </p>

                        <a href="https://www.52pick-up.com/"><p className="DesignText">Design by 52 Pick-up Inc.</p></a>
                    </div>
                </motion.div>

            </footer>

        </>
    );
}
