import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <dl className="accordion">
      <dt className={`accordion-title ${isOpen ? 'active' : ''}`} onClick={onToggle}>
        {title}
        <span className={`accordion-icon ${isOpen ? 'rotate' : ''}`} />
      </dt>
      <dd className={`accordion-content ${isOpen ? 'expanded' : 'collapsed'}`}>
        {content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </dd>
    </dl>
  )
}

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  const items = [
    {
      title: 'HTML / CSS / SCSS', content: [
        "- 웹 표준을 준수하며, 시맨틱 태그를 사용하여 SEO를 고려한 마크업을 지향합니다.",
        "- Flexbox와 Media Queries를 통해 다양한 화면 크기에 적합한 반응형 레이아웃을 구현합니다.",
        "- 변수와 믹스인(Mixin)을 사용해 반복되는 스타일을 효율적으로 관리하고,컬러 테마, 폰트 스타일 등 자주 사용하는 스타일을 변수로 정의하여 테마 변경이 용이한 구조를 설계합니다."
      ]
    },
    {
      title: 'javaScript / jQuery', content: [
        "- ES6 자바스크립트 문법을 사용하여 코드의 가독성과 유지보수성을 높였습니다.",
        "- a 태그를 이용한 링크 연결 및 탭 메뉴의 클릭 이벤트와 같은 사용자 인터렉션을 구현했습니다.",
      ]
    },
    {
      title: 'React', content: [
        "- useState와 useEffect를 사용하여 컴포넌트의 상태를 관리하고, 비동기 작업을 처리한 경험이 있습니다.",
        "- RESTful API를 사용해본 경험이 있습니다.",
      ]
    },
    {
      title: 'Git & GitHub', content: [
        "- GitHub를 통해 팀원들과의 협업을 경험했습니다.",
        "- 커밋(commit), 푸시(push), 풀(pull) 등의 기본적인 Git 명령어를 사용하여 코드 변경 사항을 공유하고, 팀의 작업을 통합하는 과정에 참여했습니다.",
        "- 브랜치를 생성하고 관리하여 다양한 기능 개발을 동시에 진행하고, 최종적으로 메인 브랜치에 합치는 작업을 수행했습니다.",
      ]
    },
  ]

  return (
    <>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          isOpen={openIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </>
  )
}
export default Accordion;