import "./works.css"
import {FaAward, FaUniversity} from "react-icons/fa";
import { GrCertificate} from "react-icons/gr";
export default function Works() {


  return (
    <section id='about'>
    <h1 className="title"> About Me</h1>
    <div className='container about_container'>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>5+ Years Working</small>
          </article>
          <article className='about_card'>
            <FaUniversity className='about_icon'/>
            <h5>Diploma</h5>
            <small>Computer Engineer <br/> </small>
          </article>
          <article className='about_card'>
            <GrCertificate className='about_icon'/>
            <h5>Certificate</h5>
            <small>Web Development <br/> 10+ Certificate</small>
          </article>
        </div>
        <p>
          Hello 👋! My name is Hatem Yakoubi, i'm a front-end developer with focus on the MERN stack, but still exporing other
          technologies and frameworks that catch my interest. I started my coding journey about a year ago, i have serious passion for front-end effects, animation, and creating intuitive dynamic user experiences.
          I describe myself as a passionate developer who loves coding, open source,  and the web platform. 
          A aside from developement, i like to create and contribute to open source projects, that helps me to learn a ton of new stuff, grow as a developer.<br/> 
          I'm also an electrical engineer.
        </p>
      </div>
      
    </div>
  </section>
  )
}
