import "../style/services.css";
import { TfiMicrosoft } from "react-icons/tfi";
import { SiCanva } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { SiTaichigraphics } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { IoPersonAddOutline } from "react-icons/io5";
// import React from 'react'

function Services() {
  return (
    <main className="main">
        <div className="ser-container">
            {/* top div */}
            <div className="top-div-ser">
                <h2 className="title-ser">My Services</h2>
                <p className="des-ser">Unlock the full potential of Microsoft Office with my expert services. My Canva design services make it your work easy.My web development team brings your vision online.Elevate your brand s visual identity with my UI/UX design services.Launch your website with ease using my WordPress expertise.  </p>
            </div>
            {/* bottom div */}
            <div className="boxes-con">
                <div className="box">
                    <TfiMicrosoft className="ser-icon"/>
                    <h3>MS Office</h3>
                    <span>Automation</span>
                </div>

                <div className="box">
                <SiCanva className="ser-icon"/>
                    <h3>Canva</h3>
                    <span>Template, broucher</span>
                </div>                     

                <div className="box">
                    <FaLaptopCode className="ser-icon"/>
                    <h3>Web Development</h3>
                    <span>Blog, E-Commerce</span>
                </div>

                <div className="box">
                    < SiTaichigraphics className="ser-icon"/>
                    <h3>UI/UX Design</h3>
                    <span>Website Design</span>
                </div>

                <div className="box">
                    <SiWordpress className="ser-icon"/>
                    <h3>Wordpress Development</h3>
                    <span>Custome Theme</span>
                </div>

                <div className="box">
                    {<IoPersonAddOutline className="ser-icon"/>}
                    <h3>Advertising</h3>
                    <span>
                         {/* eslint-disable-next-line react/no-unescaped-entities */}
                          {`"Unlock your creativity and productivity with MS Office, Canva, Web Development, WordPress, and UI/UX Design - all the tools you need to build, design, and succeed!"`}
                    </span>
                </div>

            </div>           
        </div>
    </main>
  )
}
export default Services 