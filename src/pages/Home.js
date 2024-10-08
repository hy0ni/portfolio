import { Link } from "react-router-dom";
import Animation from "../components/Animation";

function Home() {
  return (
    <main className="home bg-default">
      <Animation delayBetween={600} initialDelay={200} duration={800}>
        <span className="bg-slide bg-black"></span>
        <div className="flex-wrap">
          <header>
            <h1>JANG JIHYUN</h1>
            <h2>Portfolio</h2>
            <p>Front-end Developer</p>
          </header>
          <ul className="local-nav">
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/project" >Projects</Link></li>
          </ul>
        </div>
      </Animation>
    </main>
  )
}
export default Home;