import { Link } from "react-router-dom";
import Animation from "../components/Animation";

function Home() {
  return (
    <main className="home bg-default">
      <Animation delayBetween={200} initialDelay={200} duration={1000}>
        <header>
          <h1>JANG JIHYUN</h1>
          <h2>Portfolio</h2>
          <p>Front-end Developer</p>
        </header>



        <ul className="local-nav">
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/project" >Projects</Link></li>
        </ul>
      </Animation>
    </main>
  )
}
export default Home;