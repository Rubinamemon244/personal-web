import "../style/education.css";

function education() {
  return (
    <main className="edu-main">
        <div className="edu-text">
        <h1>Education</h1>
        <p>Trusted by professionals for exceptional quality and services for our clients from various industries trust us to deliver top notch quality and results.</p>
        </div>
        <div className="box-con-edu">
            <div>
                <h2 className="uni-name">University of Karachi</h2>
                <span>Completed</span> <span className="date1">2015  to  2019</span>
            </div>
            <div className="computer">
            <h1>Bachelor in Computer Sciecnce</h1>
            <p>I was completed my Bachelor in Computer Science from University of Karachi in 2019 with a CGPA of 3.5 out of 4 points in Computer Science.That was a very good experience for me.This program is very helpful for my future career.</p>
            </div>
        </div>

        {/* box 2 */}
        <div className="box-con-edu">
       <div>
         <h2 className="uni-name">Governor IT Initiative</h2>
         <span>Student</span> <span className="date1">Start Feb 2024</span>
        </div>
        <div className="computer">
           <h1>Certified Web 3.0 and Metaverse</h1>
            <p>At the Governor It Initiative i was explore AI,Metaverse, and Blockchain technologies in an accessible way.This free program is an excellent opportunaty for everyone who interested in this field.</p>
        </div>
      </div>

      {/* box 3 */}
      <div className="box-con-edu">
       <div>
         <h2 className="uni-name">Wordpress Developement</h2>
         <span>Completed</span> <span className="date1">Feb 2024</span>
        </div>
       <div className="computer">
           <h1>Certificate of Wordpress Development</h1>
           <p>At LWE, students gain knowledge and skills in wordpress development from exceptional professionals who have years of experience in the field.</p>
     </div>
   </div>
    </main>
  )
}

                  export default education