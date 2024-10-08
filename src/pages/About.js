import Accordion from "../components/Accordion";
import Animation from "../components/Animation";

function About() {
  return (
    <main className="about bg-default">
      <Animation delayBetween={500} initialDelay={200} duration={1000}>
        <span className="bg-slide bg-black"></span>
        <header>
          <h1>About</h1>
        </header>
        <section className="intro">
          <span className="intro-img"></span>
          <p>안녕하세요. 코드에 대한 욕심이 있는 개발자,
            성장하고 싶은 프론트엔드 신입 개발자 장지현 입니다.
            저는 문제 해결과 개선을 위한 충분한 열정을 가지고 있습니다.
            협업하는 과정에 있어 효율적인 소통을 중요하게 생각합니다.
            지속적인 발전을 위한 적극적인 자세와 성실함으로
            함께 성장해 나가고 싶습니다.
          </p>
        </section>
        <section className="skill">
          <h2>Skills</h2>
          <Accordion />
        </section>
        <div className="btn-wrap left">
          <a className="btn btn-primary left" href="https://glen-torta-3d5.notion.site/1121554da7758082b922fb25f06dec83" target="_blank" rel="noopener noreferrer">My CV</a>
          <a className="btn btn-primary right" href="https://github.com/hy0ni" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </Animation>
    </main>
  )
}
export default About;