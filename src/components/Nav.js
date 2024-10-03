import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  // 경로에 따른 클래스명 동적 설정
  const navClass = location.pathname.startsWith('/project') ? 'bg-black' : 'bg-default';

  return (
    <nav className={`global-nav ${navClass}`}>
      <ul>
        {location.pathname === '/' ? (
          <li>Portfolio</li>
        ) : (
          <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/project">Projects</NavLink></li>
          </>
        )}
      </ul>
      <span className="copyright">©2024</span>
    </nav>
  )
}
export default Nav;