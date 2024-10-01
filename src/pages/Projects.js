import { useNavigate } from "react-router-dom";
import projectList from "../data/projectList";

function Projects() {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/project/${id}`)
  }

  return (
    <main className="Projects bg-black">
      <header>
        <h1>PROJECT</h1>
        <p>
          퍼블리셔로 일하며 UI/UX에 대한 이해를 쌓을 수 있었습니다.
          이 경험을 바탕으로 프론트엔드 개발자로서 성장하기 위해
          지속적으로 학습하고 있습니다.
        </p>
      </header>
      <section>
        <ul className="Projects-nav">
          {projectList.map((project) => (
            <li
              key={project.id}
              onClick={() => handleDetail(project.id)}
              tabIndex={0} // 키보드 탐색을 위해 추가
            >
              {project.title}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
export default Projects;