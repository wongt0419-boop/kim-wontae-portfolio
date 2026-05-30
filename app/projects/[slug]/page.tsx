import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/Header";
import { projectDetails, type ProjectSlug } from "@/lib/data";
import { assetPath } from "@/lib/paths";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails[slug as ProjectSlug];

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | 김원태`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  const entries = Object.entries(project.sections);
  const isCrmGroup = slug === "crm-group";
  const isIntegratedMessage = slug === "integrated-message";
  const isAnalytics = slug === "analytics";
  const eyebrow = isCrmGroup
    ? "Project 1. Customer Segmentation"
    : isIntegratedMessage
      ? "Project 2. Integrated CRM Message System"
      : isAnalytics
        ? "Project 3. Analytics"
        : "Project Case Study";
  const integratedDescription =
    "분리되어 있던 SMS/LMS, 친구톡, 알림톡, 앱푸시 발송 기능을 하나의 메시지 발송 흐름으로 통합했습니다. CRM 그룹 기반 수신 대상 선택, 메시지 발송, 성과 추적까지 연결해 타겟 메시지 발송부터 결과 확인까지 쉽게 통합 관리할 수 있도록 개선했습니다.";
  const analyticsDescription =
    "쇼핑몰 운영자가 방문, 주문, 회원, 유입, 체류시간 등 방문자 데이터를 더 빠르고 넓은 기간으로 확인할 수 있도록 기존 통계 메뉴를 데이터레이크 기반 애널리틱스로 개편한 프로젝트입니다. 조회 속도와 조회 기간을 개선하고, 향후 UTM·퍼널·사용자 행동 분석으로 확장 가능한 데이터 분석 서비스를 설계했습니다.";
  const crmPreviewVideo = existsSync(join(process.cwd(), "public", "images", "crm-group-preview.mp4"))
    ? assetPath("/images/crm-group-preview.mp4")
    : existsSync(join(process.cwd(), "public", "images", "crm-group-preview.mp4.mp4"))
      ? assetPath("/images/crm-group-preview.mp4.mp4")
      : "";
  const crmPreviewImage = existsSync(join(process.cwd(), "public", "images", "crm-group-preview.png"))
    ? assetPath("/images/crm-group-preview.png")
    : existsSync(join(process.cwd(), "public", "images", "crm-group-preview.png.png"))
      ? assetPath("/images/crm-group-preview.png.png")
      : assetPath("/images/crm-group-preview-placeholder.svg");
  const crmStoreGrowthImage = existsSync(join(process.cwd(), "public", "images", "crm-store-usage-growth.png"))
    ? assetPath("/images/crm-store-usage-growth.png")
    : "";
  const integratedMessageVideo = existsSync(join(process.cwd(), "public", "images", "integrated-message-flow.mp4"))
    ? assetPath("/images/integrated-message-flow.mp4")
    : "";
  const integratedMessageImage = existsSync(join(process.cwd(), "public", "images", "integrated-message-flow.png"))
    ? assetPath("/images/integrated-message-flow.png")
    : "";
  const integratedStoreGrowthImage = existsSync(
    join(process.cwd(), "public", "images", "integrated-message-crm-store-growth.png"),
  )
    ? assetPath("/images/integrated-message-crm-store-growth.png")
    : "";
  const analyticsFlowVideo = existsSync(join(process.cwd(), "public", "images", "analytics-flow.mp4"))
    ? assetPath("/images/analytics-flow.mp4")
    : "";
  const analyticsFlowImage = existsSync(join(process.cwd(), "public", "images", "analytics-flow.png"))
    ? assetPath("/images/analytics-flow.png")
    : "";
  const analyticsPerformanceImage = existsSync(
    join(process.cwd(), "public", "images", "analytics-quantitative-results.png"),
  )
    ? assetPath("/images/analytics-quantitative-results.png")
    : "";
  const asIsItems = [
    {
      title: "기본 회원 정보 중심 조회",
      description: "회원가입일, 주문내역 등 제한적인 조건으로 대상 추출",
    },
    {
      title: "일회성 캠페인 대상",
      description: "친구톡 발송 시점에만 사용되어 재사용과 확장이 어려움",
    },
    {
      title: "운영 DB 직접 조회",
      description: "대량 조건 조회 시 발송 지연과 DB 부하 발생",
    },
  ];
  const toBeItems = [
    {
      title: "행동 기반 고객군 생성",
      description: "로그인, 장바구니, 쿠폰 사용 등 행동 데이터 기반 추출",
    },
    {
      title: "저장형 CRM 그룹 활용",
      description: "저장된 그룹을 다양한 메시지 채널에서 재사용",
    },
    {
      title: "비동기 조회 구조 적용",
      description: "별도 저장소와 조회 API로 추출 시간과 부하를 완화",
    },
  ];
  const qualitativeResults = [
    "생성된 CRM 그룹을 재사용해 다양한 메시지 채널에서 마케팅 활용 가능",
    "주문 상태별 조건 추출 등 세부 행동 조건을 제공해 타사 대비 높은 정합성 확보",
    "외부 CRM 도구 의존도를 낮추고 솔루션 내장 CRM 기능 활용 기반 강화",
    "통합 메시지 개편과 CRM 마케팅 자동화 프로젝트의 기반 마련",
  ];
  const integratedSteps = [
    {
      label: "Step 1",
      title: "CRM 그룹 수신 대상 선택",
      description: "생성된 CRM 그룹을 메시지 발송 수신 대상으로 선택해 타겟 고객군을 재사용합니다.",
    },
    {
      label: "Step 2",
      title: "채널별 메시지 작성과 발송 설정",
      description: "SMS/LMS, 친구톡, 알림톡, 앱푸시 채널별 정책을 반영해 메시지 작성, 예약/반복 발송, 대체 메시지를 설정합니다.",
    },
    {
      label: "Step 3",
      title: "성과 기반 마케팅 인사이트 제공",
      description:
        "숏링크 기반으로 클릭 수, 로그인 수, 주문 금액 등 발송 성과를 확인하고, 메시지 내용과 타겟 조건을 개선할 수 있는 인사이트를 얻을 수 있습니다.",
    },
  ];
  const integratedAsIsItems = [
    {
      title: "채널별 분산 발송",
      description: "SMS/LMS, 친구톡, 알림톡, 앱푸시가 각각 다른 메뉴에서 독립적으로 운영됨",
    },
    {
      title: "캠페인 운영 한계",
      description: "반복 발송과 대체 메시지가 제한적이어서 자동화 캠페인 운영이 어려움",
    },
    {
      title: "발송 이력 중심 확인",
      description: "발송 이후 클릭, 로그인, 주문, 주문금액 등 후속 성과 확인이 어려움",
    },
  ];
  const integratedToBeItems = [
    {
      title: "모바일 메시지 발송부로 통합",
      description: "하나의 발송부에서 채널별 메시지를 발송·관리하고 CRM 그룹을 수신 대상으로 활용",
    },
    {
      title: "반복·대체 메시지 확장",
      description: "반복 발송과 실패 시 SMS/LMS 대체 발송으로 도달 가능성과 자동화 운영 기반 강화",
    },
    {
      title: "숏링크 기반 성과 추적",
      description: "도달률, 클릭률, 로그인수, 주문수, 주문금액을 확인해 마케팅 개선 인사이트 제공",
    },
  ];
  const keyOutcomes = [
    "분산된 메시지 채널을 하나의 발송 흐름으로 통합해 CRM 메시지 발송 관리 효율 개선",
    "CRM 그룹을 수신 대상으로 연계해 고객군별 타겟 메시지 발송 기반 마련",
    "반복 발송과 대체 메시지 기능을 통해 캠페인 운영과 메시지 도달률 상승",
    "숏링크 기반 성과 추적으로 메시지별 반응과 구매 전환 흐름을 확인할 수 있는 분석 구조 마련",
    "CRM 타겟팅 → 통합 메시지 → 성과 분석 → 리타겟팅으로 이어지는 마케팅 전환 루프 구축",
  ];
  const analyticsSteps = [
    {
      label: "Point 1",
      title: "종합 대시보드",
      description:
        "주문, 방문, 인기 상품 등 핵심 지표를 한 화면에서 제공해 쇼핑몰 운영 현황과 주요 변화를 빠르게 파악할 수 있습니다.",
    },
    {
      label: "Point 2",
      title: "방문 데이터 세분화",
      description:
        "페이지 방문 데이터를 기반으로 인기 상품, 인기 카테고리, 인기 게시글을 세분화해 고객 관심도와 콘텐츠 성과를 확인할 수 있습니다.",
    },
    {
      label: "Point 3",
      title: "유입·디바이스 분석",
      description:
        "방문자의 디바이스와 유입 경로를 확인해 검색엔진, SNS 등 채널별 마케팅 전략 수립에 활용할 수 있습니다.",
    },
  ];
  const analyticsAsIsItems = [
    {
      title: "운영 DB 직접 조회",
      description: "주문·방문 데이터가 많을수록 조회 시간이 길어지고 DB 부하가 발생",
    },
    {
      title: "제한적인 조회 기간",
      description: "기존 통계는 최대 3개월 조회에 그쳐 장기 추세 확인이 어려움",
    },
    {
      title: "기본 지표 중심의 통계",
      description: "방문자 수, 페이지뷰 중심으로 제공되어 유입·행동 흐름 분석 확장에 한계",
    },
  ];
  const analyticsToBeItems = [
    {
      title: "데이터레이크 기반 조회 구조",
      description: "웹로그 데이터를 별도 저장 구조로 전환해 조회 속도와 운영 DB 부하를 개선",
    },
    {
      title: "조회 기간 12개월 확대",
      description: "조회 기간을 12개월로 확대해 장기 추세와 월별 변화 확인 가능",
    },
    {
      title: "분석 확장 기반 마련",
      description: "referer, 디바이스 정보, 랜딩페이지, 최근 방문자 로그 등 후속 분석에 필요한 수집 항목을 확장",
    },
  ];
  const analyticsQualitativeResults = [
    "운영자가 방문, 주문, 회원, 유입, 페이지 데이터를 한 흐름에서 확인할 수 있는 분석 경험 제공",
    "운영 DB 직접 조회 부담을 줄이고 데이터레이크 기반 분석 구조로 전환",
    "검색로봇 방문 집계 제외 등 방문 데이터 신뢰도 개선",
    "referer, 디바이스 정보, 랜딩페이지 등 후속 분석 확장을 위한 수집 항목 확대",
    "UTM, 퍼널 분석, 사용자 이동 경로 분석 등 고도화 스펙으로 확장 가능한 기반 마련",
  ];
  const textFlow = "leading-[1.65] [word-break:keep-all] [overflow-wrap:break-word]";

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-[#E5E1D8] bg-[#FFFEFA] py-16 md:py-24">
          <div className="container">
            <Link href="/" className="text-sm font-bold text-[#00B894]">
              ← Back to Home
            </Link>
            <p className="mt-10 text-sm font-bold text-[#FF8A3D]">{eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight tracking-[0] text-[#111827] md:text-6xl">
              {project.title}
            </h1>
            {isIntegratedMessage ? (
              <p className={`mt-5 max-w-3xl text-lg text-[#6B7280] ${textFlow}`}>{integratedDescription}</p>
            ) : isAnalytics ? (
              <p className={`mt-5 max-w-3xl text-lg text-[#6B7280] ${textFlow}`}>{analyticsDescription}</p>
            ) : (
              <p className={`mt-5 max-w-3xl text-lg text-[#6B7280] ${textFlow}`}>{project.subtitle}</p>
            )}
          </div>
        </section>

        <section className="border-b border-[#E5E1D8] py-8">
          <div className="container grid gap-3 md:grid-cols-3">
            {isCrmGroup ? (
              <>
                <Info label="Period">
                  <div className="space-y-2">
                    <p>2024.10 ~ 현재</p>
                    <div className="space-y-1 text-[#6B7280]">
                      <p>서비스 베타 오픈 2025.01</p>
                      <p>서비스 정식 오픈 2025.05</p>
                    </div>
                  </div>
                </Info>
                <Info label="Role">
                  <div className="space-y-2">
                    <p>PM / Policy / UX / QA</p>
                    <p className={`font-medium text-[#6B7280] ${textFlow}`}>
                      서비스 정책 설계, 화면 기획, QA, 오픈 후 도메인 유지보수 대응까지
                    </p>
                  </div>
                </Info>
                <Info label="Guide">
                  <div>
                    <p>CRM 그룹 관리 가이드</p>
                    <a
                      href="https://manual.godomall.com/data/manual_view.php?category=crm__crm___crm_group"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex rounded-full bg-[#00B894] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#009f80]"
                    >
                      서비스 가이드 바로가기 →
                    </a>
                  </div>
                </Info>
              </>
            ) : isIntegratedMessage ? (
              <>
                <Info label="PERIOD">
                  <div className="space-y-2">
                    <p>2025.10 ~ 현재</p>
                    <p className="font-medium text-[#6B7280]">서비스 정식 오픈 2026.03</p>
                  </div>
                </Info>
                <Info label="ROLE">
                  <div className="space-y-2">
                    <p>PM / Policy / UX / QA</p>
                    <p className={`font-medium text-[#6B7280] ${textFlow}`}>
                      서비스 정책 설계, 화면 기획, QA, 오픈 후 도메인 유지보수 대응까지 담당
                    </p>
                  </div>
                </Info>
                <Info label="Guide">
                  <div>
                    <p>통합 메시지 활용 콘텐츠</p>
                    <a
                      href="https://www.godo.co.kr/main/blog/25/%EC%87%BC%ED%95%91%EB%AA%B0-%ED%9A%8C%EC%9B%90-%EC%A0%95%EB%B3%B4%EB%A1%9C-%EA%B3%A0%EA%B0%9D-%EC%84%B8%EA%B7%B8%EB%A8%BC%ED%8A%B8-%EC%89%BD%EA%B2%8C-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%B0%A9%EB%B2%95-1257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex rounded-full bg-[#00B894] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#009f80]"
                    >
                      활용 콘텐츠 바로가기
                    </a>
                  </div>
                </Info>
              </>
            ) : isAnalytics ? (
              <>
                <Info label="PERIOD">
                  <div className="space-y-2">
                    <p>2025.03 ~ 2025.09</p>
                    <p className="font-medium text-[#6B7280]">서비스 정식 오픈 2025.09</p>
                  </div>
                </Info>
                <Info label="Role">
                  <div className="space-y-2">
                    <p>PM / Policy / UX / QA</p>
                    <p className={`font-medium text-[#6B7280] ${textFlow}`}>
                      서비스 정책 설계, 화면 기획, 데이터 정합성 검토, QA
                    </p>
                  </div>
                </Info>
                <Info label="Guide">
                  <div>
                    <p>고도몰 애널리틱스 가이드</p>
                    <a
                      href="https://support-help.nhn-commerce.com/common/analytics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex rounded-full bg-[#00B894] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#009f80]"
                    >
                      서비스 가이드 바로가기 →
                    </a>
                  </div>
                </Info>
              </>
            ) : (
              <>
                <Info label="Organization">{project.period}</Info>
                <Info label="Role">{project.role}</Info>
                <Info label="Domain">CRM / Message / Analytics / Commerce Platform</Info>
              </>
            )}
          </div>
        </section>

        {isCrmGroup ? (
          <section className="border-b border-[#E5E1D8] bg-[#F8F7F2] py-12 md:py-16">
            <div className="container">
              <div className="mb-7 max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">User Flow</p>
                <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                  CRM 설정의 진입 장벽을 낮춘 사용자 흐름
                </h2>
                <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                  CRM 그룹을 처음 사용하는 상점도 쉽게 시작할 수 있도록, 활용도가 높은 세그먼트 패턴을 추천 타겟으로 제공했습니다.
                  운영자는 추천 타겟을 기반으로 고객군을 생성하거나 직접 조건을 조합해 CRM 그룹을 만들고, 추출된 고객을 확인한 뒤 메시지 발송까지 연결할 수 있습니다.
                </p>
              </div>

              <div className="mx-auto max-w-5xl rounded-[24px] border border-[#E5E1D8] bg-white p-3 shadow-[0_22px_54px_rgba(17,24,39,0.08)] md:p-4">
                <div className="flex items-center gap-2 border-b border-[#E5E1D8] px-3 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF8A3D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E5E1D8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00B894]" />
                  <span className="ml-3 hidden text-xs font-medium text-[#9CA3AF] sm:inline">
                    godomall CRM group preview
                  </span>
                </div>
                <div className="overflow-hidden rounded-[20px] bg-[#F8F7F2]">
                  {crmPreviewVideo ? (
                    <video
                      src={crmPreviewVideo}
                      className="block h-auto w-full rounded-[20px]"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={crmPreviewImage}
                    >
                      CRM 그룹 관리 제품 화면 미리보기 영상
                    </video>
                  ) : (
                    <img
                      src={crmPreviewImage}
                      alt="CRM 그룹 관리 제품 화면 미리보기"
                      className="block h-auto w-full rounded-[20px] object-contain"
                    />
                  )}
                </div>
              </div>

              <div className="mt-6">
                <div className="grid gap-3 md:grid-cols-3">
                {[
                  {
                    label: "Step 1",
                    title: "추천 타겟으로 시작",
                    description:
                      "CRM 마케팅 활용도가 높은 세그먼트 패턴을 추천 타겟으로 제공해, 처음 사용하는 상점도 쉽게 시작할 수 있도록 설계했습니다.",
                  },
                  {
                    label: "Step 2",
                    title: "CRM 그룹 직접 생성",
                    description:
                      "추천 타겟이 맞지 않는 경우, 운영자가 가입일·구매 이력·장바구니 등 조건을 조합해 직접 그룹을 생성할 수 있습니다.",
                  },
                  {
                    label: "Step 3",
                    title: "고객 확인 후 메시지 발송",
                    description:
                      "추출된 고객군과 인사이트를 확인하고, 필요 시 해당 CRM 그룹을 수신 대상으로 메시지 발송까지 연결할 수 있습니다.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.label}
                    className="relative rounded-lg border border-[#E5E1D8] bg-white px-4 py-4 text-sm leading-6 text-[#111827]"
                  >
                    {index < 2 ? (
                      <span className="absolute right-[-18px] top-1/2 z-10 hidden -translate-y-1/2 text-lg font-bold text-[#00B894]/45 md:block">
                        →
                      </span>
                    ) : null}
                    <p className="text-xs font-bold tracking-[0.14em] text-[#00B894]">{step.label}</p>
                    <p className="mt-2 font-bold text-[#111827]">{step.title}</p>
                    <p className={`mt-1 text-sm font-medium text-[#6B7280] ${textFlow}`}>{step.description}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {isIntegratedMessage ? (
          <section className="border-b border-[#E5E1D8] bg-[#F8F7F2] py-12 md:py-16">
            <div className="container">
              <div className="mb-7 max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">User Flow</p>
                <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                  CRM 그룹에서 메시지 발송, 성과 확인까지 이어지는 흐름
                </h2>
                <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                  CRM 그룹을 수신 대상으로 선택하고, 채널별 메시지 작성과 발송 설정을 거쳐 성과 확인까지 이어지는 흐름을 설계했습니다. 운영자는 타겟 고객군을 다시 설정하지 않아도 CRM 그룹을 기반으로 반복 발송, 대체 메시지, 숏링크 성과 추적을 활용할 수 있습니다.
                </p>
              </div>

              <div className="mx-auto max-w-5xl rounded-[24px] border border-[#E5E1D8] bg-white p-3 shadow-[0_22px_54px_rgba(17,24,39,0.08)] md:p-4">
                <div className="flex items-center gap-2 border-b border-[#E5E1D8] px-3 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF8A3D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E5E1D8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00B894]" />
                  <span className="ml-3 hidden text-xs font-medium text-[#9CA3AF] sm:inline">
                    godomall CRM message preview
                  </span>
                </div>
                <div className="overflow-hidden rounded-[20px] bg-[#F8F7F2]">
                  {integratedMessageVideo ? (
                    <video
                      src={integratedMessageVideo}
                      className="block h-auto w-full rounded-[20px] object-contain"
                      aria-label="통합 메시지 개편 사용자 흐름 영상"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={integratedMessageImage || undefined}
                    >
                      {integratedMessageImage ? (
                        <img src={integratedMessageImage} alt="통합 메시지 개편 사용자 흐름 영상" />
                      ) : (
                        "통합 메시지 개편 사용자 흐름 영상"
                      )}
                    </video>
                  ) : integratedMessageImage ? (
                    <img
                      src={integratedMessageImage}
                      alt="통합 메시지 발송 흐름"
                      className="block h-auto w-full rounded-[20px] object-contain"
                    />
                  ) : (
                    <div className="flex min-h-[320px] items-center justify-center px-5 py-12 text-center">
                      <div>
                        <p className="text-2xl font-bold text-[#111827]">통합 메시지 발송 흐름</p>
                        <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                          CRM 그룹 선택 → 메시지 작성 → 반복/대체 메시지 설정 → 성과 확인
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <div className="grid gap-3 md:grid-cols-3">
                  {integratedSteps.map((step, index) => (
                    <div
                      key={step.label}
                      className="relative rounded-lg border border-[#E5E1D8] bg-white px-4 py-4 text-sm leading-6 text-[#111827]"
                    >
                      {index < 2 ? (
                        <span className="absolute right-[-18px] top-1/2 z-10 hidden -translate-y-1/2 text-lg font-bold text-[#00B894]/45 md:block">
                          →
                        </span>
                      ) : null}
                      <p className="text-xs font-bold tracking-[0.14em] text-[#00B894]">{step.label}</p>
                      <p className="mt-2 font-bold text-[#111827]">{step.title}</p>
                      <p className={`mt-1 text-sm font-medium text-[#6B7280] ${textFlow}`}>{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {isAnalytics ? (
          <section className="border-b border-[#E5E1D8] bg-[#F8F7F2] py-12 md:py-16">
            <div className="container">
              <div className="mb-7 max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Key Features</p>
                <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                  쇼핑몰 운영 의사결정을 돕는 핵심 분석 기능
                </h2>
                <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                  애널리틱스는 주문, 방문, 상품, 유입 데이터를 수집하고, 방문자의 행동과 유입 경로를 세분화 가공하여 쇼핑몰 운영과 마케팅 판단에 활용할 수 있도록 설계했습니다.
                </p>
              </div>

              <div className="mx-auto max-w-5xl rounded-[24px] border border-[#E5E1D8] bg-white p-3 shadow-[0_22px_54px_rgba(17,24,39,0.08)] md:p-4">
                <div className="flex items-center gap-2 border-b border-[#E5E1D8] px-3 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF8A3D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E5E1D8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00B894]" />
                  <span className="ml-3 hidden text-xs font-medium text-[#9CA3AF] sm:inline">
                    godomall analytics preview
                  </span>
                </div>
                <div className="overflow-hidden rounded-[20px] bg-[#F8F7F2]">
                  {analyticsFlowVideo ? (
                    <video
                      src={analyticsFlowVideo}
                      className="block h-auto w-full rounded-[20px] object-contain"
                      aria-label="고도몰 애널리틱스 주요 기능 영상"
                      autoPlay
                      loop
                      muted
                      playsInline={false}
                      preload="metadata"
                      poster={analyticsFlowImage || undefined}
                    >
                      고도몰 애널리틱스 주요 기능 영상
                    </video>
                  ) : analyticsFlowImage ? (
                    <img
                      src={analyticsFlowImage}
                      alt="고도몰 애널리틱스 주요 기능 영상"
                      className="block h-auto w-full rounded-[20px] object-contain"
                    />
                  ) : (
                    <div className="flex min-h-[320px] items-center justify-center px-5 py-12 text-center">
                      <p className={`text-sm font-bold text-[#6B7280] ${textFlow}`}>
                        애널리틱스 주요 기능 영상을 불러올 수 없습니다.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <div className="grid gap-3 md:grid-cols-3">
                  {analyticsSteps.map((step) => (
                    <div
                      key={step.label}
                      className="relative rounded-lg border border-[#E5E1D8] bg-white px-4 py-4 text-sm leading-6 text-[#111827]"
                    >
                      <p className="text-xs font-bold tracking-[0.14em] text-[#00B894]">{step.label}</p>
                      <p className="mt-2 font-bold text-[#111827]">{step.title}</p>
                      <p className={`mt-1 text-sm font-medium text-[#6B7280] ${textFlow}`}>{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {isCrmGroup ? (
          <>
            <section className="section border-b border-[#E5E1D8]">
              <div className="container">
                <div className="mb-8 max-w-3xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">PROJECT GOAL</p>
                  <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                    일회성 타겟 추출에서 저장형 CRM 그룹으로
                  </h2>
                  <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                    기존에는 친구톡 캠페인 발송 시점마다 수신 대상을 일회성으로 추출했지만, CRM 그룹 관리에서는
                    고객 행동 데이터를 기반으로 그룹을 생성·저장하고 다양한 메시지 채널과 인사이트 확인에 활용할 수 있도록 설계했습니다.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_64px_1fr] lg:items-stretch">
                  <CompareCard title="AS-IS" tone="muted" items={asIsItems} />
                  <div className="flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E1D8] bg-white text-xl font-bold text-[#00B894] shadow-[0_10px_28px_rgba(17,24,39,0.06)] lg:h-14 lg:w-14">
                      →
                    </div>
                  </div>
                  <CompareCard title="TO-BE" tone="teal" items={toBeItems} />
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <div className="mb-8 max-w-3xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Results</p>
                  <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                    고객 맞춤 메시지 기반 구매 전환 유도
                  </h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#FF8A3D]">Quantitative Results</p>

                    <figure className="mt-8 rounded-[20px] border border-[#E5E1D8] bg-white p-2 shadow-[0_12px_30px_rgba(17,24,39,0.05)] sm:p-3">
                      {crmStoreGrowthImage ? (
                        <img
                          src={crmStoreGrowthImage}
                          alt="CRM 그룹 사용 상점 수 성장 그래프"
                          className="block h-auto w-full max-w-full rounded-[20px] object-contain"
                        />
                      ) : (
                        <div className="flex min-h-[220px] items-center justify-center rounded-[18px] border border-dashed border-[#E5E1D8] bg-[#F8F7F2] px-4 text-center text-sm font-bold text-[#6B7280]">
                          CRM 그룹 사용 상점 수 성장 그래프
                        </div>
                      )}
                    </figure>

                    <p className={`mt-6 text-sm font-medium text-[#6B7280] ${textFlow}`}>
                      CRM 그룹 오픈 전 친구톡 캠페인 기반 타겟 활용 상점은 11개였으며, CRM 그룹 베타 오픈과 정식 오픈을 거쳐 2026.05 기준 563개 상점이 사용하는 기능으로 성장했습니다.
                    </p>
                  </article>

                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#00B894]">Qualitative Results</p>
                    <ul className="mt-5 grid gap-3">
                      {qualitativeResults.map((result) => (
                        <li
                          key={result}
                          className="flex gap-3 rounded-md border border-[#E5E1D8] bg-[#F8F7F2] px-4 py-3 text-sm font-medium leading-7 text-[#4B5563]"
                        >
                          <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00B894]/12 text-xs font-bold text-[#00B894]">
                            ✓
                          </span>
                          <span className={textFlow}>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </section>
          </>
        ) : isIntegratedMessage ? (
          <>
            <section className="section border-b border-[#E5E1D8]">
              <div className="container">
                <div className="mb-8 max-w-3xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">PROJECT GOAL</p>
                  <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                    분산된 메시지 발송에서 CRM 기반 통합 메시지 운영으로
                  </h2>
                  <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                    기존에는 메시지 채널별로 메뉴와 정책이 분리되어 있었고, 발송 이후에는 이력 확인 중심으로만 관리되었습니다. 통합 메시지 개편에서는 모바일 메시지 발송부를 중심으로 채널, 대상, 반복 발송, 대체 메시지, 성과 추적을 하나의 운영 흐름으로 연결했습니다.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_64px_1fr] lg:items-stretch">
                  <CompareCard title="AS-IS" tone="muted" items={integratedAsIsItems} />
                  <div className="flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E1D8] bg-white text-xl font-bold text-[#00B894] shadow-[0_10px_28px_rgba(17,24,39,0.06)] lg:h-14 lg:w-14">
                      →
                    </div>
                  </div>
                  <CompareCard title="TO-BE" tone="teal" items={integratedToBeItems} />
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <div className="mb-8 max-w-3xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Results</p>
                  <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                    CRM 메시지부터 성과 분석, 리타겟팅까지 이어지는 마케팅 전환 루프 기반 마련
                  </h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#FF8A3D]">Quantitative Results</p>

                    <figure className="mt-8 rounded-[20px] border border-[#E5E1D8] bg-white p-2 shadow-[0_12px_30px_rgba(17,24,39,0.05)] sm:p-3">
                      {integratedStoreGrowthImage ? (
                        <img
                          src={integratedStoreGrowthImage}
                          alt="CRM 그룹 대상 메시지 발송 상점 수 증가 그래프"
                          className="block h-auto w-full max-w-full rounded-[20px] object-contain"
                        />
                      ) : (
                        <div className="flex min-h-[220px] items-center justify-center rounded-[18px] border border-dashed border-[#E5E1D8] bg-[#F8F7F2] px-4 text-center text-sm font-bold text-[#6B7280]">
                          CRM 그룹 대상 메시지 발송 상점 수 증가 그래프
                        </div>
                      )}
                    </figure>

                    <p className={`mt-6 text-sm font-medium text-[#6B7280] ${textFlow}`}>
                      통합 메시지 오픈 전 CRM 그룹을 수신 대상으로 발송한 상점 수는 56개였으며, 오픈 이후 2026.05 기준 76개 상점이 CRM 그룹 기반 메시지 발송을 활용했습니다.
                    </p>
                  </article>

                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#00B894]">Qualitative Results</p>
                    <ul className="mt-5 grid gap-3">
                      {keyOutcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-3 rounded-md border border-[#E5E1D8] bg-[#F8F7F2] px-4 py-3 text-sm font-medium leading-7 text-[#4B5563]"
                        >
                          <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00B894]/12 text-xs font-bold text-[#00B894]">
                            ✓
                          </span>
                          <span className={textFlow}>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </section>
          </>
        ) : isAnalytics ? (
          <>
            <section className="section border-b border-[#E5E1D8]">
              <div className="container">
                <div className="mb-8 max-w-3xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">PROJECT GOAL</p>
                  <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                    DB 직접 조회에서 데이터레이크 기반 애널리틱스로
                  </h2>
                  <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                    기존 통계는 운영 DB를 직접 조회해 정확성은 있었지만, 조회 속도와 조회 기간, 분석 확장성에 한계가 있었습니다. 애널리틱스 개편에서는 웹로그 데이터를 별도 저장 구조로 전환하고, 운영자가 더 빠르고 넓은 기간의 데이터를 확인할 수 있도록 설계했습니다.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_64px_1fr] lg:items-stretch">
                  <CompareCard title="AS-IS" tone="muted" items={analyticsAsIsItems} />
                  <div className="flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E1D8] bg-white text-xl font-bold text-[#00B894] shadow-[0_10px_28px_rgba(17,24,39,0.06)] lg:h-14 lg:w-14">
                      →
                    </div>
                  </div>
                  <CompareCard title="TO-BE" tone="teal" items={analyticsToBeItems} />
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <div className="mb-8 max-w-3xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Results</p>
                  <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">
                    통계 조회에서 데이터 기반 운영 분석으로 확장
                  </h2>
                  <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                    조회 속도와 조회 기간을 개선하는 데 그치지 않고, 방문·주문·상품·유입 데이터를 통합적으로 확인할 수 있는 애널리틱스 구조를 설계했습니다. 운영자는 고객 행동을 분석해 쇼핑몰 운영과 마케팅 전략을 데이터 기반으로 판단할 수 있습니다.
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#FF8A3D]">Quantitative Results</p>

                    <figure className="mt-8 rounded-[20px] border border-[#E5E1D8] bg-white p-2 shadow-[0_12px_30px_rgba(17,24,39,0.05)] sm:p-3">
                      {analyticsPerformanceImage ? (
                        <img
                          src={analyticsPerformanceImage}
                          alt="애널리틱스 사용 상점 수와 메뉴 클릭 수 증가 그래프"
                          className="block h-auto w-full max-w-full rounded-[20px] object-contain"
                        />
                      ) : (
                        <div className="flex min-h-[260px] items-center justify-center rounded-[18px] border border-dashed border-[#E5E1D8] bg-[#F8F7F2] px-5 py-12 text-center">
                          <div>
                            <p className="text-lg font-bold text-[#111827]">애널리틱스 정량 성과 그래프</p>
                            <p className={`mt-3 text-sm font-medium text-[#6B7280] ${textFlow}`}>
                              조회 속도, 조회 기간, 조회 상점 수 증가를 시각화한 그래프가 들어갈 영역입니다.
                            </p>
                          </div>
                        </div>
                      )}
                    </figure>

                    <p className={`mt-6 text-sm font-medium text-[#6B7280] ${textFlow}`}>
                      전년 동기 영업일 평균 기준, 애널리틱스 사용 상점 수는 기존 통계 메뉴 2,406개에서 애널리틱스 메뉴 3,568개로 약 42.4% 증가했습니다. 메뉴 클릭 수 역시 8,808회에서 11,574회로 약 31.4% 증가하며 운영자의 데이터 확인 사용량이 확대되었습니다.
                    </p>
                  </article>

                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#00B894]">Qualitative Results</p>
                    <ul className="mt-5 grid gap-3">
                      {analyticsQualitativeResults.map((result) => (
                        <li
                          key={result}
                          className="flex gap-3 rounded-md border border-[#E5E1D8] bg-[#F8F7F2] px-4 py-3 text-sm font-medium leading-7 text-[#4B5563]"
                        >
                          <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00B894]/12 text-xs font-bold text-[#00B894]">
                            ✓
                          </span>
                          <span className={textFlow}>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="section">
            <div className="container grid gap-5">
              {entries.map(([title, body], index) => (
                <article
                  key={title}
                  className="grid gap-5 rounded-lg border border-[#E5E1D8] bg-white p-6 md:grid-cols-[240px_1fr] md:p-8"
                >
                  <div>
                    <p className="text-sm font-bold text-[#00B894]">{String(index + 1).padStart(2, "0")}</p>
                    <h2 className="mt-2 text-xl font-bold text-[#111827]">{title}</h2>
                  </div>
                  <p className="text-base leading-8 text-[#4B5563]">{body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="border-t border-[#E5E1D8] py-10">
          <div className="container flex flex-col justify-between gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex justify-center rounded-full border border-[#111827] px-5 py-3 text-sm font-bold text-[#111827] transition hover:bg-[#111827] hover:text-white"
            >
              Back to Home
            </Link>
            {isAnalytics ? (
              <Link
                href="/projects/integrated-message"
                className="inline-flex justify-center rounded-full bg-[#00B894] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#009f80]"
              >
                Previous Project · 통합 메시지 개편
              </Link>
            ) : (
              <Link
                href={project.next.href}
                className="inline-flex justify-center rounded-full bg-[#00B894] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#009f80]"
              >
                Next Project · {project.next.label}
              </Link>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#E5E1D8] bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6B7280]">{label}</p>
      <div className="mt-3 text-sm font-bold leading-7 text-[#111827]">{children}</div>
    </div>
  );
}

function CompareCard({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "muted" | "teal";
  items: { title: string; description: string }[];
}) {
  const isTeal = tone === "teal";

  return (
    <article
      className={`rounded-lg border p-6 md:p-7 ${
        isTeal ? "border-[#00B894]/35 bg-white shadow-[0_18px_42px_rgba(0,184,148,0.08)]" : "border-[#E5E1D8] bg-white"
      }`}
    >
      <p className={`text-sm font-bold ${isTeal ? "text-[#00B894]" : "text-[#6B7280]"}`}>{title}</p>
      <ul className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <li
            key={item.title}
            className={`rounded-md border px-4 py-3 text-sm leading-6 ${
              isTeal
                ? "border-[#00B894]/20 bg-[rgba(0,184,148,0.06)] text-[#111827]"
                : "border-[#E5E1D8] bg-[#F8F7F2] text-[#4B5563]"
            }`}
          >
            <div className="flex gap-2">
              <span className={`font-bold ${isTeal ? "text-[#00B894]" : "text-[#9CA3AF]"}`}>{index + 1}.</span>
              <div>
                <p className="font-bold text-[#111827]">{item.title}</p>
                <p className="mt-1 text-sm font-medium leading-[1.65] text-[#6B7280] [overflow-wrap:break-word] [word-break:keep-all]">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
