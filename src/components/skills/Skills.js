import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiPhp, DiPostgresql, DiReact } from "react-icons/di";
import { SiBootstrap, SiExpress, SiJava, SiJavascript, SiMongodb, SiMysql, SiRedux, SiMaterialui, SiTailwindcss, SiAngular, SiCsharp, SiPython, SiOracle, SiSqlite } from "react-icons/si";
import { FaNode, FaSymfony } from "react-icons/fa";
import './skills.css'


const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='entete'>
       <h2 className='title'>My Experience</h2>
      </div>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML5 
                  <AiFillHtml5 className='experience_details-html'/>
                  </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS3 
                  <DiCss3 className='experience_details-css'/>
                  </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>React Js 
                  <DiReact className='experience_details-react'/>
                </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Angular 
                  <SiAngular className='experience_details-angular'/>
                  </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Javascript
                   <SiJavascript className='experience_details-javascript'/>
                   </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Bootstrap 
                  <SiBootstrap className='experience_details-bootstrap'/>
                  </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Material UI
                   {/* <SiMaterialui className='experience_details-material'/> */}
                </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Tailwind 
                  <SiTailwindcss className='experience_details-material'/>
                  </h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Symfony  
                  <FaSymfony className='experience_details-symfony'/>
                  </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Php 
                  <DiPhp className='experience_details-php'/>
                  </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Python
                   <SiPython className='experience_details-python'/>
                </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Java 
                  <SiJava className='experience_details-java'/>
                  </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>C#
                <SiCsharp className='experience_details-csharp'/>
                   </h4>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>DataBase</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MySQL 
                  <SiMysql className='experience_details-mysql'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>PostgreSQL
                  <DiPostgresql className='experience_details-postgreSQL'/>
                  </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Oracle
                   <SiOracle className='experience_details-oracle'/>
                </h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>SQLite 
                  <SiSqlite className='experience_details-sqlite'/>
                  </h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills