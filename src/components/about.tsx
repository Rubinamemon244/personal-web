import Image from "next/image";
import "@/style/hero.css";
import "@/style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import Link from "next/link";


// function About() {
//   return (

//     <div className="header-container">
//         <div className="header-boxes-con">
//           {/* left */}
//           <div>
//             <Image src={"/pic.jpg"}
//               width={200}
//               height={200}
//               className="header-image"
//               alt="Profile"/>
//               <div className="social-icon">
//              <Link href={""}>  <FaYoutube className="s-icon1"/></Link>
//               <Link href={""}> <FaFacebook className="s-icon2"/></Link>
//               <Link href={""}> <FaInstagram className="s-icon3"/></Link>
//             </div> 
//           </div>
//           {/* right */}
//           <div className="hero-right-div">
//             <h1 className="title-hero"> About us</h1>
//             <p className="des-hero">"Hello, I m Rubina, a passionate front-end developer for creating visually appealing and user-friendly web interfaces. I specialize in turning creative designs into functional, interactive websites using HTML, CSS, JavaScript, Next.js, React. With a keen eye for detail and a commitment to seamless user experiences, I strive to bring ideas to life in the digital world. Let's build something amazing together!"</p>
//           </div>
//         </div>
//     </div>
//   )
// }
// export default About


import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <div className="header-container">
        <div className="header-boxes-con">
          {/* left */}
          <div>
            <Image src={"/pic.jpg"}
              width={200}
              height={200}
              className="header-image"
              alt="Profile"/>
              <div className="social-icon">
             <Link href={""}>  <FaYoutube className="s-icon1"/></Link>
              <Link href={""}> <FaFacebook className="s-icon2"/></Link>
              <Link href={""}> <FaInstagram className="s-icon3"/></Link>
            </div> 
          </div>
          {/* right */}
          <div className="hero-right-div">
            <h1 className="title-hero"> About us</h1>
            <p className="des-hero">&quot;Hello, I&apos;m Rubina, a passionate front-end developer for creating visually appealing and user-friendly web interfaces. I specialize in turning creative designs into functional, interactive websites using HTML, CSS, JavaScript, Next.js, React. With a keen eye for detail and a commitment to seamless user experiences, I strive to bring ideas to life in the digital world. Let&apos;s build something amazing together!&quot;</p>
          </div>
        </div>
    </div>
  )
}
export default About