import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  // 경로에 따른 클래스명 동적 설정
  const navClass = location.pathname === '/projects' ? 'bg-black' : 'bg-default';

  return (
    <nav className={navClass}>
      <ul className="global-nav">
        {location.pathname === '/' ? (
          <li>Portfolio</li>
        ) : (
          <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </>
        )}
        <li className="copyright">©2024</li>
      </ul>
    </nav>
  )
}
export default Nav;