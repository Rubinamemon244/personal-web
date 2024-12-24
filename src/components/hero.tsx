import Image from "next/image";
import "@/style/hero.css";

function Hero() {
  return (

//     <div className="header-container">
//         <div className="header-boxes-con">
//           {/* left */}
//           <div>
//             <Image src={"/pic.jpg"}
//               width={200}
//               height={200}
//               className="header-image"
//               alt="Profile"/>
//           </div>
//           {/* right */}
//           <div className="hero-right-div">
//             <h1 className="title-hero">I m Rubina
//             Front-end Developer</h1>
//             <p className="des-hero">"Hello I m Rubina a passionate front-end developer for creating visually appealing and user-friendly web interfaces. I specialize in turning creative designs into functional, interactive websites using HTML, CSS, JavaScript, Next.js, React. With a keen eye for detail and a commitment to seamless user experiences, I strive to bring ideas to life in the digital world. Let's build something amazing together!"</p>
//             <button className="hero-btn">HIRE ME</button>
//           </div>
//         </div>
//     </div>
//   )
// }
// export default Hero

<div className="header-container">
        <div className="header-boxes-con">
          {/* left */}
          <div>
            <Image src={"/pic.jpg"}
              width={200}
              height={200}
              className="header-image"
              alt="Profile"/>
          </div>
          {/* right */}
          <div className="hero-right-div">
            <h1 className="title-hero">I&apos;m Rubina
            Front-end Developer</h1>
            <p className="des-hero">&quot;Hello I&apos;m Rubina a passionate front-end developer for creating visually appealing and user-friendly web interfaces. I specialize in turning creative designs into functional, interactive websites using HTML, CSS, JavaScript, Next.js, React. With a keen eye for detail and a commitment to seamless user experiences, I strive to bring ideas to life in the digital world. Let&apos;s build something amazing together!&quot;</p>
            <button className="hero-btn">HIRE ME</button>
          </div>
        </div>
    </div>
  )
}
export default Hero