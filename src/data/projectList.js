const projectList = [
  {
    id: 1,
    title: "RPS Game App",
    description: "해당 웹 애플리케이션은 사용자와 컴퓨터 간의 가위바위보 게임을 제공하며, 백엔드 API를 통해 사용자 인증과 게임 전적 관리를 지원합니다. 사용자들은 회원가입, 로그인, 자신의 게임 전적을 확인하고 관리할 수 있습니다.",
    role: "Front-end [개인 프로젝트]",
    link: "https://hy0ni.github.io/rsp-game-app",
    stack: ["React", "HTML", "CSS"],
    mainFunction: [
      "사용자 리스트와 전적 이동 버튼 제공",
      "email과 password로 회원가입 가능. 성공 시 로그인 후 메인 페이지로 이동",
      "email과 password로 로그인 가능. 성공 시 메인 페이지로 이동",
      "사용자 리스트에서 전적 페이지로 이동 가능한 버튼 제공. 해당되는 사용자일 경우 게임 정보 섹션에서 전적 삭제 가능",
      "로그인한 사용자만 접근 가능. 컴퓨터와의 게임 대결 기능 제공. 게임 정보 추가 및 삭제 기능",
    ],
    keyConcept: [
      "로그인 및 회원가입 구현 (인증, 인가)",
      "API 활용",
      "React Router DOM",
      "HTTP 상태 코드",
      "Bearer Token",
      "Context API",
    ],
  },
  {
    id: 2,
    title: "Product Info App",
    description: "해당 웹 애플리케이션은 API를 사용해 상품 정보를 가져오고, 다양한 상품 정보를 검색, 정렬, 삭제할 수 있는 기능을 제공합니다.",
    role: "Front-end [개인 프로젝트]",
    link: "https://hy0ni.github.io/product-app",
    stack: ["React", "JavaScript", "HTML", "CSS", "Fetch API"],
    mainFunction: [
      "사용자에게 다양한 상품의 리스트 제공",
      "사용자가 상품 목록에서 불필요한 상품을 제거할 수 있는 카드 삭제 기능 구현",
      "상품명을 기준으로 이름으로 검색할 수 있는 기능 제공",
      "평점이 높은 상품부터 볼 수 있도록 평점순 정렬 기능 제공",
      "상품의 저가 상품부터 볼 수 있도록 가격순 정렬 기능 제공",
      "다양한 디바이스에서 최적화된 사용자 경험을 제공하기 위한 반응형 UI 구현",
    ],
    keyConcept: [
      "Events: 사용자 상호작용에 대한 반응을 처리하는 이벤트 핸들링",
      "useEffect 훅: 컴포넌트의 생명주기 동안 API 호출 및 비동기 작업 처리",
      "API: Fetch API를 사용하여 상품 데이터 받아와 해당 데이터를 상태 관리에 저장",
    ],
  },
  {
    id: 3,
    title: "SKT ifland",
    description: "SKT ifland는 가상 모임을 중심으로 소셜 기능에 최적화 한 국내 대표 '소통형 메타버스' 서비스 웹 페이지이며 전반적인 페이지 개편, 유지보수, 신규 페이지, 어드민 등 메인 퍼블리셔로 작업하였습니다.",
    role: "Web publishing",
    link: "https://ifland.io",
    stack: ["HTML", "CSS", "SCSS", "반응형 UI", "웹 접근성 가이드라인"],
    mainFunction: [
      "디자이너 및 기획자와 소통하여 디자인 가이드에 맞춘 퍼블리싱 작업 진행",
      "어드민 페이지 퍼블리싱 작업 진행",
      "중복 레이아웃을 재사용 가능한 컴포넌트 기반 SCSS 구조로 리팩토링, 코드 중복을 최소화하여 약 30%의 코드량 감소 및 25% 이상의 유지보수 시간 단축",
      "다양한 디바이스에서 최적화된 사용자 경험을 제공하기 위한 반응형 UI 구현",
    ],
    keyConcept: [],
  }
];

export default projectList;
