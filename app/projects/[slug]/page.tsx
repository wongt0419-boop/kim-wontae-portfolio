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
            <p className="mt-10 text-sm font-bold text-[#FF8A3D]">Project Case Study</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight tracking-[0] text-[#111827] md:text-6xl">
              {project.title}
            </h1>
            <p className={`mt-5 max-w-3xl text-lg text-[#6B7280] ${textFlow}`}>{project.subtitle}</p>
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
                <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                  CRM 그룹을 처음 사용하는 상점도 쉽게 시작할 수 있도록, 활용도가 높은 세그먼트 패턴을 추천 타겟으로 제공했습니다.
                  운영자는 추천 타겟을 바로 사용하거나 직접 CRM 그룹을 생성하고, 추출된 고객을 확인한 뒤 메시지 발송까지 연결할 수 있습니다.
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
                <p className="text-sm font-bold text-[#00B894]">Steps</p>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                {[
                  {
                    label: "01",
                    title: "추천 타겟으로 시작",
                    description:
                      "CRM 마케팅 활용도가 높은 세그먼트 패턴을 추천 타겟으로 제공해, 처음 사용하는 상점도 쉽게 시작할 수 있도록 설계했습니다.",
                  },
                  {
                    label: "02",
                    title: "CRM 그룹 직접 생성",
                    description:
                      "추천 타겟이 맞지 않는 경우, 운영자가 가입일·구매 이력·장바구니 등 조건을 조합해 직접 그룹을 생성할 수 있습니다.",
                  },
                  {
                    label: "03",
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

        {isCrmGroup ? (
          <>
            <section className="section border-b border-[#E5E1D8]">
              <div className="container">
                <div className="mb-8 max-w-3xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">AS-IS / TO-BE</p>
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
                  <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">Project Results</h2>
                  <p className={`mt-4 text-base text-[#6B7280] ${textFlow}`}>
                    저장형 CRM 그룹 전환 후, 사용 상점 수가 약 51.2배 증가했습니다.
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#FF8A3D]">Store Usage Growth</p>

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
            <Link
              href={project.next.href}
              className="inline-flex justify-center rounded-full bg-[#00B894] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#009f80]"
            >
              Next Project · {project.next.label}
            </Link>
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
