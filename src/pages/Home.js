import { Link } from "react-router-dom";

function Home() {

  return (
    <main className="home bg-default">
      <header>
        <h1>JANG JIHYUN</h1>
        <h2>Portfolio</h2>
        <p>Front-end Developer</p>
      </header>
      <ul className="local-nav">
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/projects" >Projects</Link></li>
      </ul>
    </main>
  )
}
export default Home;