import { Link } from "react-router-dom";
import Animation from "../components/Animation";

function Home() {
  return (
    <main className="home bg-default">
      <div className="flex-wrap">
        <header>
          <Animation delayBetween={200} initialDelay={200} duration={1000}>
            <h1>JANG JIHYUN</h1>
            <h2>Portfolio</h2>
            <p>Front-end Developer</p>
          </Animation>
        </header>
        <ul className="local-nav">
          <Animation delayBetween={200} initialDelay={600} duration={800}>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/project" >Projects</Link></li>
          </Animation>
        </ul>
      </div>
    </main>
  )
}
export default Home;