import React, {useEffect,useState} from 'react';

import Preloader from './preloader'

const Project = ({project}) => {
  return (
    <div className="project">
      <div className="images-part">
        <div className="image" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${project.image1 || `https://scessila.sirv.com/portfolio/image-reactor-1.png`})`}}
        data-aos="fade-down">
        </div>
        <div className="image" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${project.image2 || 'https://scessila.sirv.com/portfolio/image-reactor-2.png'})`}} 
	      data-aos="fade-up">
        </div>
      </div>
      <div className="project-desc">
        <h2 data-aos="fade-up">{project.name}</h2>
        <div className="technologies" data-aos="fade-up">
          {project.keywords.map((tech,idx) => <div className="tech" key={idx}>{tech}</div>)}
        </div>  
        <p data-aos="fade-up">{project.desc}</p>
        <div className="buttons">
          <a href={project.githubURL} data-aos="flip-left" target="_blank" rel="noopener noreferrer">
            <button>View Git</button>
          </a>
          <a href={project.deployURL} data-aos="flip-right" target="_blank" rel="noopener noreferrer">
            <button>View Live</button>
          </a>
        </div>
      </div>	
    </div>
  )
}


const ProjectSection = () => {
  
  const [filtProjectsDetails,setFiltProjectsDetails] = useState([])
  const [projectsDetails,setProjectsDetails] = useState([])
  const [showLoader, setShowLoader] = useState(false)
  const [err,setErr] = useState('')

  const getProjectsDetails = async () =>{
    try{
      setShowLoader(true)
      setErr('')
      const res = await fetch('https://sammy-portfolio-server.herokuapp.com/api/projects')
      const resData = await res.json()
      setShowLoader(false)
      if(res.status===200){
        setProjectsDetails(resData.filter(project=>project.category==="fullstack"))
        setFiltProjectsDetails(resData)
      }
      else{
        setErr(resData.message)
      }
    }
    catch(err){
      setShowLoader(false)
      setErr('Connection timeout!')
    }
  }

  const filterProjects = (category) =>{
    setProjectsDetails(filtProjectsDetails.filter(project=>project.category===category))
  }

  useEffect(()=>{
    getProjectsDetails()
  },[])

  return (
    <div className="projects-area" data-aos="fade-up">
      <h1>Projects</h1>
      <div className="projects-category">
        <button className="fs" data-aos="fade-left" onClick={()=>filterProjects('fullstack')}>Fullstack</button>
        <button className="fe" data-aos="fade-right" onClick={()=>filterProjects('frontend')}>Frontend</button>
        <button className="be" data-aos="fade-left" onClick={()=>filterProjects('backend')}>Backend</button>
        <button className="hcj" data-aos="fade-right" onClick={()=>filterProjects('html-css-js')}>HTML-JS</button>   
      </div>
      {showLoader && <Preloader />}
      {projectsDetails.map((project,idx) => <Project key={idx} project={project}/>)}
      <p> {err} </p>
    </div>
  )
}
 
export default ProjectSection
