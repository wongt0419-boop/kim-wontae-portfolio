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
  const asIsItems = [
    "친구톡 캠페인 생성 시점마다 DB 조회로 수신 대상 추출",
    "추출된 대상은 일회성으로 사용되고 재활용이 어려움",
    "친구톡 중심의 발송 대상 설정에 머물러 확장성이 낮음",
  ];
  const toBeItems = [
    "고객 정보와 행동 조건을 조합해 CRM 그룹으로 저장",
    "저장된 그룹을 메시지 발송, 반복 마케팅, 인사이트 확인에 재사용",
    "SMS/LMS, 친구톡, 알림톡, 앱푸시 등 다양한 발송 채널과 연계 가능한 기반 마련",
  ];
  const qualitativeImpact = [
    "일회성 수신 대상 추출 구조를 저장·재사용 가능한 CRM 그룹 구조로 전환",
    "CRM 그룹을 메시지 발송과 고객 인사이트 확인의 출발점으로 확장",
    "통합 메시지 개편과 CRM 레시피 자동화 프로젝트의 기반 기능으로 연결",
    "서드파티 CRM/마케팅 도구 의존도를 낮추고 솔루션 자체 CRM 기능 활용 기반 마련",
  ];

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
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6B7280]">{project.subtitle}</p>
          </div>
        </section>

        <section className="border-b border-[#E5E1D8] py-8">
          <div className="container grid gap-3 md:grid-cols-3">
            {isCrmGroup ? (
              <>
                <Info label="Period">
                  <div className="space-y-2">
                    <p>2024.10 ~ 현재</p>
                    <p className="text-[#6B7280]">
                      서비스 베타 오픈 2025.01
                      <br />
                      서비스 정식 오픈 2025.05
                    </p>
                  </div>
                </Info>
                <Info label="Role">
                  <div className="space-y-2">
                    <p>PM / Policy / UX / QA</p>
                    <p className="font-medium text-[#6B7280]">
                      서비스 정책 설계, 화면 기획, QA,
                      <br />
                      오픈 후 도메인 유지보수 운영까지 담당
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
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Product Preview</p>
                <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-3xl">CRM 그룹 관리 화면</h2>
                <p className="mt-4 text-base leading-7 text-[#6B7280]">
                  쇼핑몰 운영자가 추천 타겟 그룹을 확인하고, 생성된 CRM 그룹을 메시지 발송에 활용할 수
                  있는 관리 화면입니다.
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

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {[
                  "고객 행동 기반 추천 타겟 그룹 제공",
                  "생성된 CRM 그룹 리스트 관리",
                  "CRM 그룹에서 메시지 발송으로 바로 연결",
                ].map((point) => (
                  <div key={point} className="rounded-lg border border-[#E5E1D8] bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#111827]">
                    {point}
                  </div>
                ))}
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
                  <p className="mt-4 text-base leading-7 text-[#6B7280]">
                    기존에는 메시지 발송 시점마다 수신 대상을 추출하는 구조였지만, CRM 그룹 관리에서는
                    고객군을 저장·재사용하고 메시지 발송과 인사이트 확인으로 확장할 수 있도록 설계했습니다.
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
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Impact</p>
                  <h2 className="text-2xl font-bold tracking-[0] text-[#111827] md:text-4xl">Impact</h2>
                  <p className="mt-4 text-base leading-7 text-[#6B7280]">
                    CRM 그룹 관리는 단순한 대상 추출 기능을 넘어, 고도몰 내장 CRM 기능의 사용성과 확장
                    가능성을 확인한 프로젝트입니다.
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#FF8A3D]">Quantitative Impact</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <MetricBlock value="30개" label="출시월 사용 상점" />
                      <MetricBlock value="200개" label="2026.04 기준 약" />
                      <MetricBlock value="6.7배" label="사용 상점 증가" />
                    </div>
                    <p className="mt-6 text-sm font-medium leading-7 text-[#6B7280]">
                      1차 오픈 이후 정식 오픈과 리뉴얼을 거치며 지속적으로 사용 상점이 확대되었습니다.
                    </p>
                  </article>

                  <article className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
                    <p className="text-sm font-bold text-[#00B894]">Qualitative Impact</p>
                    <ul className="mt-5 grid gap-3">
                      {qualitativeImpact.map((impact) => (
                        <li key={impact} className="flex gap-3 text-sm font-medium leading-7 text-[#4B5563]">
                          <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00B894]/12 text-xs font-bold text-[#00B894]">
                            ✓
                          </span>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>

                <div className="mt-5 rounded-lg border border-[#E5E1D8] bg-[#FFFEFA] p-5">
                  <p className="text-sm font-medium leading-7 text-[#6B7280]">
                    복잡한 고객 조건을 단순히 많이 제공하는 것보다, 운영자가 실제 마케팅 액션으로 연결할
                    수 있는 고객군 단위로 구조화하는 것이 중요하다는 점을 배웠습니다.
                  </p>
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

function CompareCard({ title, tone, items }: { title: string; tone: "muted" | "teal"; items: string[] }) {
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
            key={item}
            className={`rounded-md border px-4 py-3 text-sm font-semibold leading-6 ${
              isTeal
                ? "border-[#00B894]/18 bg-[#00B894]/6 text-[#111827]"
                : "border-[#E5E1D8] bg-[#F8F7F2] text-[#4B5563]"
            }`}
          >
            <span className={isTeal ? "mr-2 text-[#00B894]" : "mr-2 text-[#9CA3AF]"}>{index + 1}.</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function MetricBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-[#E5E1D8] bg-[#F8F7F2] p-4">
      <p className="text-3xl font-bold text-[#111827] md:text-4xl">{value}</p>
      <p className="mt-2 text-xs font-semibold leading-5 text-[#6B7280]">{label}</p>
    </div>
  );
}
