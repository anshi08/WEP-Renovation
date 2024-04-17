import { Link, NavLink } from "react-router-dom";
import './Footer.css'
import EastIcon from '@mui/icons-material/East';


export default function Footer() {
    return (
        <>
            <footer className="relative bottom-0 w-full bg-white py-6">
                <div className="flex flex-row justify-between px-4 py-6 flex-wrap">
                    {/* First sub-div */}
                    <div className="flex flex-col">
                        <Link to='https://www.quadreal.com/' target="_blank" className="ProudlyText">Proudly Managed by:
                            <img
                                src="https://the-renovation.azurewebsites.net/media/70ce93a8ac0cb49c280b2c30e95aaa54/quadreal-at-2x-tenth.png"
                                className="w-32 h-auto"
                                alt="Quadreal logo"
                            />
                        </Link>
                    </div>

                    {/* Second sub-div */}
                    <div className="flex flex-col">
                        <p className="NumText">45 O'Connor Street, Suite 730<br />Ottawa, ON K1P 1A4</p>
                        <a href="https://goo.gl/maps/tGCSe7UbZxPvE2JU8" target="_blank" rel="noopener noreferrer">
                            <button className="mt-2 inline-flex items-center hover:underline">
                                <p className="gettingHere">Getting here <EastIcon style={{ color: 'rgb(171,171,171)' }} /></p>
                            </button>
                        </a>
                    </div>

                    {/* Third sub-div */}
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <strong>T.</strong>
                            <p className="Number ml-1">613-690-7400</p>
                        </div>
                        <Link to="https://goo.gl/maps/tGCSe7UbZxPvE2JU8" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center hover:underline">
                            <p className="WepCom">WorldExchangePlaza.com <EastIcon style={{ color: 'rgb(171,171,171)' }} /></p>
                        </Link>
                    </div>


                    {/* Fourth sub-div */}
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </Link>
                            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5.93 17.08H2.5V7.56h3.43v9.52zM4.22 6.21a1.65 1.65 0 0 1-1.65-1.65 1.65 1.65 0 0 1 1.65-1.65c1.15 0 1.65.84 1.65 1.65s-.5 1.65-1.65 1.65zm15.08 10.87h-3.42v-5.97c0-1.42-.5-2.39-1.76-2.39-1.1 0-1.76.74-2.05 1.46-.1.24-.13.58-.13.92v6.98h-3.42s.05-10.52 0-11.57h3.42v1.64c.45-.7 1.26-1.7 3.08-1.7 2.24 0 3.92 1.47 3.92 4.63v7h-.01z" />
                                </svg>
                                <span className="sr-only">LinkedIn page</span>
                            </Link>
                        </div>
                        <Link to="https://www.quadreal.com/legal/"
                            className="my-3 gettingHere">Privacy Policy</Link>
                    </div>
                </div>

                <div className="flex justify-between flex-wrap">
                    <p className="footerText">
                        © 2021 QUADREAL and the Quadrant Logo are trademarks of QuadReal Property Group Limited Partnership. All rights reserved.
                        All renderings are design concepts for visionary purposes and are subject to change
                    </p>

                    <a href="https://www.52pick-up.com/"><p className="DesignText">Design by 52 Pick-up Inc.</p></a>
                </div>

            </footer>

        </>
    );
}
