export const siteNav = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
];

export const metrics = [
  { value: "5년+", label: "이커머스·서비스 기획 경력" },
  { value: "18건", label: "프로젝트 매니징 건수" },
  { value: "26건", label: "완료 프로젝트 수" },
  { value: "3번", label: "회사 근무 경험 수" },
];

export const keywords = [
  "Commerce Platform",
  "CRM Marketing",
  "Back Office",
  "Data Analytics",
  "API Integration",
  "Policy Design",
  "Project Leading",
];

export const toolTags = ["Figma", "Dooray", "Postman", "Zeppelin", "Spreadsheet", "PowerPoint", "Claude/BMAD"];

export const competencies = [
  {
    title: "Commerce Platform Planning",
    body: "쇼핑몰 운영자가 사용하는 회원, CRM, 메시지, 통계, API 연동 기능을 기획하며 운영자 관점의 업무 흐름과 정책을 설계했습니다.",
  },
  {
    title: "CRM & Marketing Automation",
    body: "회원 정보와 행동 조건을 기반으로 CRM 그룹을 생성하고, 메시지 발송과 성과 분석으로 연결하는 CRM 마케팅 구조를 기획했습니다.",
  },
  {
    title: "Data Analytics Planning",
    body: "방문, 주문, 회원, 유입, 페이지 지표를 정의하고 기존 통계 메뉴를 데이터레이크 기반 애널리틱스 구조로 개선했습니다.",
  },
  {
    title: "API & Partner Integration",
    body: "제휴사 앱이 고도몰 솔루션과 안정적으로 연동될 수 있도록 Server API와 웹훅 정책을 설계했습니다.",
  },
  {
    title: "Policy & Edge Case Design",
    body: "수신동의, 개인정보, 대체 메시지, 반복 발송, 데이터 정합성, API 호출 제한 등 정책과 예외 케이스를 정의했습니다.",
  },
  {
    title: "Project Leading & Collaboration",
    body: "디자인, FE, BE, 마케팅, 제휴사, 고객사와 협업하며 요구사항 정의부터 QA, 운영 대응까지 프로젝트 전 과정을 수행했습니다.",
  },
];

export const selectedProjects = [
  {
    slug: "crm-group",
    title: "CRM 그룹 관리",
    subtitle: "고객 행동 데이터 기반 CRM 타겟 그룹 생성 기능",
    summary: "추천 타겟과 조건 조합으로 CRM 그룹을 생성하고 메시지 발송까지 연결",
    impact: ["사용 상점 수 11개 → 563개, 약 51.2배 증가"],
    href: "/projects/crm-group",
  },
  {
    slug: "integrated-message",
    title: "통합 메시지 개편",
    subtitle: "CRM 그룹 기반 모바일 메시지 통합 발송 구조",
    summary: "분산된 메시지 채널을 하나의 발송 흐름으로 통합하고 CRM 그룹 기반 타겟 발송을 확장",
    impact: ["CRM 그룹 대상 발송 상점 수 56개 → 76개, 약 35.7% 증가"],
    href: "/projects/integrated-message",
  },
  {
    slug: "analytics",
    title: "고도몰 애널리틱스",
    subtitle: "데이터 기반 운영 분석을 위한 애널리틱스 개편",
    summary: "기존 통계 메뉴를 애널리틱스 구조로 전환해 고객 행동과 운영 데이터를 더 쉽게 확인하도록 개선",
    impact: ["사용 상점 수 약 42.4% 증가, 메뉴 클릭 수 약 31.4% 증가"],
    href: "/projects/analytics",
  },
];

export const additionalProjects = [
  {
    title: "Server API / 웹훅 연동",
    subtitle: "제휴사 앱 연동을 위한 API/웹훅 정책 설계",
    body: "리뷰, 푸시 알림, 자동 입금 확인, 택배 등 4개 유형의 제휴사 요구사항을 API와 웹훅 정책으로 구체화하고, 약 6개 제휴사 앱 연동을 지원했습니다.",
  },
  {
    title: "CRM 레시피",
    subtitle: "CRM 마케팅 메시지 자동화 기능",
    body: "웰컴 부스터, 잠자는 쿠폰 깨우기, 장바구니 비우기 등 쇼핑몰 운영자의 대표 전환 시나리오를 자동화하는 CRM 레시피 기능을 메인 기획하고 있습니다.",
  },
  {
    title: "Previous Agency Projects",
    subtitle: "웹/서비스 구축 PM & UX 기획",
    body: "애경산업 기업사이트, 신풍제약 애드마일스 이커머스, 마크로젠 젠톡 모바일앱 서비스 등 다양한 산업군의 프로젝트에서 PM과 UX/서비스 기획을 수행했습니다.",
  },
];

export const processSteps = [
  "Problem Define",
  "Policy Design",
  "UX Flow",
  "Dev Collaboration",
  "QA & Validation",
  "Operation & Improvement",
];

export const tools = [
  ["Figma", "화면 기획, 사용자 플로우, IA 설계"],
  ["Dooray", "정책 문서, 업무 관리, 이슈 커뮤니케이션"],
  ["PowerPoint", "정책 문서, 보고 자료, 제안서 작성"],
  ["Postman", "API 호출 테스트, 연동 QA"],
  ["Zeppelin", "개발 쿼리 기반 운영 데이터 조회"],
  ["Spreadsheet", "WBS, 일정 관리, 데이터 정리"],
  ["Jira / Confluence / Slack / Jandi / Flow", "에이전시 및 고객사 협업 환경 대응"],
  ["Claude / BMAD", "PRD 작성과 기획 문서 구조화 보조"],
];

export const projectDetails = {
  "crm-group": {
    title: "CRM 그룹 관리",
    subtitle:
      "쇼핑몰 고객 정보와 행동 데이터를 조합해 마케팅 대상 그룹을 생성·관리하는 기능입니다. 생성된 그룹은 메시지 발송, 고객 인사이트 확인, 반복 마케팅 시나리오의 기반으로 활용할 수 있습니다.",
    period: "NHN Commerce · Godomall Planning Team",
    role: "기획 리드 · 정책/화면/QA",
    next: { label: "통합 메시지 개편", href: "/projects/integrated-message" },
    sections: {
      Background:
        "고도몰 운영자는 친구톡 캠페인 발송 시점마다 조건에 맞는 회원을 일회성으로 추출해야 했습니다. 같은 타겟을 반복 활용하거나 고객군 변화를 관리하기 어려워 CRM 관점의 축적된 운영이 제한적이었습니다.",
      Problem:
        "수신 대상이 캠페인 내부에 묶여 있어 저장, 재사용, 비교가 어려웠고 회원 조건과 행동 조건이 분산되어 운영자가 고객군을 명확하게 정의하기 어려웠습니다.",
      Goal:
        "운영자가 회원 정보와 행동 조건을 조합해 고객군을 만들고, 이후 메시지 발송과 인사이트 확인에 재사용할 수 있는 CRM 그룹 구조를 설계하는 것이 목표였습니다.",
      Solution:
        "회원 속성, 주문 이력, 접속/행동 조건을 조건 블록으로 정리하고 그룹 저장, 예상 대상 조회, 업데이트 기준, 메시지 연계 흐름을 하나의 관리 경험으로 구성했습니다.",
      "AS-IS / TO-BE":
        "AS-IS는 캠페인별 일회성 대상 추출이 중심이었고, TO-BE는 저장 가능한 CRM 그룹을 중심으로 타겟팅, 발송, 성과 확인이 이어지는 구조입니다.",
      "Key Planning":
        "조건 조합 방식, 대상자 산정 기준, 개인정보 및 수신동의 정책, 그룹 상태값, 메시지 발송 화면과의 연결 방식을 중점적으로 정의했습니다.",
      "Decision Point":
        "초기에는 모든 조건을 한 화면에 노출하는 방식도 검토했지만, 운영자가 조건 의미를 빠르게 이해할 수 있도록 카테고리 기반 조건 선택과 단계형 검토 흐름을 우선했습니다.",
      Impact:
        "출시월 30개 상점에서 2026년 4월 기준 약 200개 상점으로 사용이 확대되었고, CRM 그룹은 이후 통합 메시지와 CRM 레시피의 핵심 타겟팅 기반이 되었습니다.",
      Retrospective:
        "고객군 정의 기능은 단독 기능보다 발송, 분석, 자동화와 연결될 때 가치가 커진다는 점을 확인했습니다. 이후에는 그룹 품질을 판단할 수 있는 인사이트 지표가 더 중요해졌습니다.",
    },
  },
  "integrated-message": {
    title: "통합 메시지 개편",
    subtitle:
      "분리되어 있던 SMS/LMS, 친구톡, 알림톡, 앱푸시 발송 기능을 하나의 메시지 발송 흐름으로 통합했습니다. CRM 그룹 기반 수신 대상 선택, 메시지 발송, 성과 추적까지 연결해 타겟 메시지 발송부터 결과 확인까지 쉽게 통합 관리할 수 있도록 개선했습니다.",
    period: "NHN Commerce · Message Domain",
    role: "기획 리드 · 발송 정책/성과 추적",
    next: { label: "고도몰 애널리틱스", href: "/projects/analytics" },
    sections: {
      Background:
        "SMS/LMS, 친구톡, 알림톡, 앱푸시 발송 기능이 각각 다른 메뉴와 정책으로 운영되어 메시지 채널을 조합한 캠페인 운영이 어려웠습니다.",
      Problem:
        "운영자는 채널별로 수신 대상을 다시 설정해야 했고, 반복 발송, 대체 메시지, 성과 추적 기준이 분산되어 캠페인 운영 효율이 낮았습니다.",
      Goal:
        "CRM 그룹을 중심으로 수신 대상을 선택하고 메시지 채널, 발송 조건, 성과 추적을 통합 관리할 수 있는 모바일 메시지 발송 구조를 만드는 것이 목표였습니다.",
      Solution:
        "채널별 발송 조건을 공통 발송 플로우 안에 정리하고, CRM 그룹 선택, 반복 발송, 대체 메시지, 숏링크 성과 추적을 하나의 캠페인 생성 과정으로 연결했습니다.",
      "AS-IS / TO-BE":
        "AS-IS는 채널별 개별 발송과 분산된 결과 확인이었고, TO-BE는 타겟팅부터 발송, 성과 확인, 리타겟팅까지 이어지는 통합 CRM 마케팅 루프입니다.",
      "Key Planning":
        "채널별 수신동의, 대체 메시지 우선순위, 예약/반복 발송, 발송 실패 상태, 숏링크 주문 기여 기준, 발송 비용 노출 정책을 설계했습니다.",
      "Decision Point":
        "모든 채널을 완전히 동일한 옵션으로 맞추기보다, 공통 흐름은 유지하되 채널별 필수 정책을 단계 안에서 자연스럽게 노출하는 방향을 선택했습니다.",
      Impact:
        "CRM 그룹, 통합 메시지, 성과 추적, CRM 레시피로 이어지는 마케팅 자동화 기반을 마련했고 운영자가 반복 캠페인을 더 구조적으로 관리할 수 있게 했습니다.",
      Retrospective:
        "메시지 기능은 발송 완료가 끝이 아니라 성과 해석과 다음 액션으로 이어져야 합니다. 이후에는 캠페인 성과를 운영자가 바로 행동으로 옮기는 추천 흐름이 중요합니다.",
    },
  },
  analytics: {
    title: "고도몰 애널리틱스",
    subtitle: "데이터레이크 기반 통계/분석 기능 개편",
    period: "NHN Commerce · Analytics Domain",
    role: "기획 리드 · 지표/화면/검증",
    next: { label: "CRM 그룹", href: "/projects/crm-group" },
    sections: {
      Background:
        "기존 통계는 운영 DB 조회 기반으로 제공되어 조회 속도와 조회 기간에 한계가 있었습니다. 쇼핑몰 운영자가 장기 추이를 확인하거나 상세 분석으로 확장하기 어려웠습니다.",
      Problem:
        "조회에 10~30초가 걸리는 경우가 있었고, 조회 기간은 3개월 중심으로 제한되었습니다. 메뉴별 지표 정의도 분산되어 데이터 해석의 일관성이 부족했습니다.",
      Goal:
        "방문, 주문, 회원, 유입, 페이지 지표를 데이터레이크 기반으로 재정의하고 빠른 조회와 장기 분석이 가능한 애널리틱스 구조를 만드는 것이 목표였습니다.",
      Solution:
        "핵심 지표 정의서를 정리하고 데이터 적재 기준, 조회 조건, 비교 기간, 표/차트 구조, 빈 상태와 예외 상태를 설계했습니다. 운영자가 자주 확인하는 흐름을 중심으로 메뉴를 재구성했습니다.",
      "AS-IS / TO-BE":
        "AS-IS는 DB 조회 기반의 제한적인 통계였고, TO-BE는 데이터레이크 기반의 빠른 조회, 12개월 기간, 후속 분석 기능으로 확장 가능한 애널리틱스입니다.",
      "Key Planning":
        "지표 산정 기준, 시간대와 집계 기준, 주문 상태 반영, 회원 중복 기준, 유입 채널 분류, 페이지 지표의 데이터 정합성 검증을 중점적으로 다뤘습니다.",
      "Decision Point":
        "많은 지표를 한 번에 보여주기보다 운영자가 매일 확인하는 핵심 지표를 먼저 안정화하고, 상세 분석은 단계적으로 확장하는 방향을 선택했습니다.",
      Impact:
        "조회 속도는 10~30초에서 5초 내외로 개선되었고, 조회 기간은 3개월에서 12개월로 확대되었습니다. 조회 상점 수도 약 40% 증가했습니다.",
      Retrospective:
        "분석 기능은 화면 구성보다 지표 신뢰가 먼저였습니다. 정의, 집계, 검증 과정을 초기에 더 촘촘하게 잡을수록 운영 문의와 해석 비용을 줄일 수 있었습니다.",
    },
  },
} as const;

export type ProjectSlug = keyof typeof projectDetails;
