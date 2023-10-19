import './App.css'
import resume from '../../resume.json'

function App() {
  const { basicInfo, careerObjective, education, skills, internshipExperience, WorkExperience, personalProjects } = resume

  return (
    <div className="container">
      <div className="header">
        <div className="name">{basicInfo.name}</div>
        <hr />
        <div className="contact">
          Email: {basicInfo.email} | Mobile: {basicInfo.mobile} | Location:{basicInfo.location}
        </div>
      </div>

      <div className="section">
        <div className="section-title">Career Objective</div>
        <hr />
        <div className="section-content">
          {careerObjective}
        </div>
      </div>

      <div className="section">
        <div className="section-title">Skills</div>
        <hr />
        <div className="section-content skills">
          {skills.map(skill => <span className="skill" key={skill}>{skill + " "}</span>)}
        </div>
      </div>

      <div className="section work-experience">
        <div className="section-title">Work Experience</div>
        <hr />
        {
          WorkExperience.map((work, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-item-title">{work.role} <span className="experience-span">{work.duration}</span></div>
              <div className="experience-item-subtitle">{work.companyName}</div>
              <div className="experience-item-details">
                <ul>
                  {work.description.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
              </div>
            </div>
          ))
        }
      </div>



      <div className="section internship-experience">
        <div className="section-title">Internship Experience</div>
        <hr />
        {
          internshipExperience.map((internship, index) => (
            <div className="section internship-experience" key={index}>
              <div className="experience-item">
                <div className="experience-item-title">{internship.role} <span className="experience-span">{internship.duration}</span></div>
                <div className="experience-item-subtitle">{internship.companyName}</div>
                <div className="experience-item-details">
                  <ul>
                    {internship.description.map((detail, index) => <li key={index}>{detail}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="section personal-projects">
        <div className="section-title">Personal Projects</div>
        <hr />
        <div className="project-item">
          {
            personalProjects.map((project, index) => (
              <div key={index}><div className="project-item-title">{project.name}
              </div>
                <div className='project-item-subtitle'>{
                  project.techStack.map((technology, index) => <span key={index}>{technology + " "}</span>)
                }</div>
                <div className="project-item-details">
                  <ul>
                    {project.description.map((detail, index) => <li key={index}>{detail}</li>)}
                    {
                      project.githubLink &&
                      <li>
                        Github Link -
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"> {project.githubLink}</a>
                      </li>}
                    {
                      project.hostedLink &&
                      <li>
                        Hosted Link -
                        <a href={project.hostedLink} target="_blank" rel="noopener noreferrer"> {project.hostedLink}</a>
                      </li>
                    }
                  </ul>
                </div>

              </div>
            ))
          }

        </div>
      </div>

      <div className="section education">
        <div className="section-title">Education</div>
        <hr />
        <div className="section-content">{education.map((education, idx) => (
          <ul key={idx}>
            <li>Name - {education.degree} in ({
              education.branch.map((branch, index) => <span key={index}>{branch + " "}</span>)
            })</li>
            <li>Institution - {education.collegeName}</li>
            <li>CGPA - {education.cgpa}</li>
            <li>Duration - {education.duration}</li>
          </ul>
        ))}</div>

      </div>
    </div >
  );
}




export default App
