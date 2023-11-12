import projectData from "./projectData"
import "./Projects.css"
import fileEx from "./assets/FileEX.png"
import {Link} from "react-router-dom";

const Project = () => {
  return (
    <div className="project-display">
      {
        projectData.map((project, id)=>{
            return (
              <Link to={`/projects/file-explorer`} key={id} className="project-link">

            <div key={id} className="project-card">
              <div className="card-desc">
                <h1>{project.name}</h1>  
                <h3>{project.description}</h3>
              </div>
              <img src={fileEx} alt="image"/>

            </div>
            </Link>
            )
      })}
    </div>
  )
}

export default Project