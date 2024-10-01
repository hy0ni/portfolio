import Accordion from "../components/Accordion";
import Animation from "../components/Animation";

function About() {
  return (
    <main className="about bg-default">
      <Animation delay={200}>
        <header>
          <h1>About</h1>
        </header>
      </Animation>
      <section className="intro">
        <Animation delay={300}>
          <span className="intro-img"></span>
        </Animation>
        <Animation delay={400}>
          <p>안녕하세요. 코드에 대한 욕심이 있는 개발자,
            성장하고 싶은 프론트엔드 신입 개발자 장지현 입니다.
            저는 문제 해결과 개선에 대한 열정을 가지고 있으며,
            동료들과의 소통을 중요하게 생각하고,
            문제 해결을 위한 적극적인 자세와 성실함으로
            함께 성장해 나가고 싶습니다.
          </p>
        </Animation>
      </section>
      <section className="skill">
        <Animation delay={500}>
          <Accordion />
        </Animation>
      </section>
      <Animation delay={600}>
        <div className="btn-wrap">
          <a className="btn" href="https://glen-torta-3d5.notion.site/1121554da7758082b922fb25f06dec83" target="_blank" rel="noopener noreferrer">My CV</a>
          <a className="btn" href="https://github.com/hy0ni" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </Animation>
    </main>
  )
}
export default About;