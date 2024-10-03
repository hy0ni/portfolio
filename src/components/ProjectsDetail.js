import { useParams } from "react-router-dom";
import projectList from "../data/projectList";
import Animation from "../components/Animation";

function ProjectsDetail() {
  const { id } = useParams();
  const project = projectList.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="project-detail bg-black">
      <Animation delayBetween={200} initialDelay={200} duration={1000}>
        <header>
          <h1>{project.title}</h1>
        </header>
        <section className="project-description">
          <p>{project.description}</p>
        </section>
        <section className="project-info">

          <div className="pc-info">
            <div className="role">
              <h3>role</h3>
              <p>{project.role}</p>
            </div>

            <div className="link">
              <h3>website</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </div>

            <div className="stack">
              <h3>stack</h3>
              <ul>
                {project.stack.map((stack, index) => (
                  <li key={index}>{stack}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pc-info">


            <div className="mainFunction">
              <h3>mainFunction</h3>
              <ul>
                {project.mainFunction.map((mainFunc, index) => (
                  <li key={index}>{mainFunc}</li>
                ))}
              </ul>
            </div>

            <div className="keyConcept">
              <h3>keyConcept</h3>
              {Array.isArray(project.keyConcept) && project.keyConcept.length > 0 ? (
                <ul>
                  {project.keyConcept.map((concept, index) => (
                    <li key={index}>{concept}</li>
                  ))}
                </ul>
              ) : (
                <p>Key Concepts이 없습니다.</p>
              )}
            </div>
          </div>
        </section>
      </Animation>
    </div>
  );
};
export default ProjectsDetail;