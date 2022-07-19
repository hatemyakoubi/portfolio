import "./intro.scss";
import Cv from '../Cv/Cv';
//import CV_WebDeveloper from '../Cv/cv_Hatem.pdf';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assests/hatem.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Hatem Yakoubi</h1>
          <h3>
            <span>
                Trainer and Full Stack Developer<br/>
             </span>
          </h3>
            <Cv/>
        </div>
        <a href="#skills">
          <img src="assests/down.png" />
        </a>
      </div>
    </div>
  )
}
