import Link from "next/link";
import { Footer, Header } from "@/components/Header";
import { Pill, Section } from "@/components/Section";
import { assetPath } from "@/lib/paths";
import {
  additionalProjects,
  competencies,
  keywords,
  metrics,
  processSteps,
  selectedProjects,
  tools,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="soft-grid border-b border-[#E5E1D8]">
          <div className="container grid min-h-[calc(100svh-64px)] content-center gap-10 py-20 md:min-h-[720px] md:grid-cols-[1.25fr_0.75fr] md:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#E5E1D8] bg-white px-4 py-2 text-sm font-semibold text-[#00B894]">
                Commerce Platform Planner
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-[0] text-[#111827] md:text-6xl">
                커머스 운영자의 고객 관리, 메시지 발송, 데이터 분석 경험을 제품화합니다.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4B5563]">
                NHN커머스 고도몰 기획팀에서 회원/CRM/메시지/통계/API 연동 도메인을 담당하며,
                쇼핑몰 운영자의 타겟팅 → 발송 → 성과 분석 흐름을 개선해왔습니다.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-[#6B7280]">
                <span>NHN Commerce · Godomall Planning Team · Assistant Manager</span>
                <span className="hidden text-[#E5E1D8] sm:inline">|</span>
                <span>CRM / Message / Analytics / API Integration</span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex justify-center rounded-full bg-[#00B894] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#009f80]"
                >
                  프로젝트 보기
                </Link>
                <a
                  href={assetPath("/resume-placeholder.pdf")}
                  className="inline-flex justify-center rounded-full border border-[#111827] px-6 py-3 text-sm font-bold text-[#111827] transition hover:bg-[#111827] hover:text-white"
                >
                  경력기술서 다운로드
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-[#E5E1D8] bg-[#FFFEFA] p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]">
              <p className="text-sm font-bold text-[#6B7280]">Planning Domains</p>
              <div className="mt-6 grid gap-3">
                {["CRM Group", "Integrated Message", "Analytics", "Server API / Webhook"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-md border border-[#E5E1D8] bg-[#F8F7F2] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#00B894]">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-[#111827]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#E5E1D8] py-8">
          <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-[#E5E1D8] bg-white p-5">
                <p className="text-3xl font-bold text-[#111827]">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Section id="about" eyebrow="About" title="운영자 경험을 제품 흐름으로 정리하는 기획자">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5 text-base leading-8 text-[#4B5563]">
              <p>저는 커머스 솔루션의 운영자 경험을 기획하는 플랫폼 기획자입니다.</p>
              <p>
                현재 NHN커머스 고도몰 기획팀에서 회원, CRM, 메시지, 통계, API 연동 도메인을
                담당하고 있습니다. 쇼핑몰 운영자가 고객을 더 잘 이해하고, 적절한 메시지를 보내고,
                성과를 확인할 수 있도록 타겟팅부터 발송, 분석까지 이어지는 제품 흐름을 설계해왔습니다.
              </p>
              <p>
                이전에는 웹에이전시에서 PM, UX/BX, 서비스 기획, 제안 업무를 수행하며 다양한 산업군의
                웹/서비스 구축 프로젝트를 리드했습니다. 요구사항 정의, 정책 설계, 화면 설계, 개발 협업,
                QA, 운영 대응까지 제품 기획의 전 과정을 연결해 실행합니다.
              </p>
            </div>
            <div className="flex content-start flex-wrap gap-3">
              {keywords.map((keyword) => (
                <Pill key={keyword}>{keyword}</Pill>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Core Competency" title="정책, 데이터, 운영 흐름을 잇는 역량">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {competencies.map((item) => (
              <article key={item.title} className="card-hover rounded-lg border border-[#E5E1D8] bg-white p-6">
                <h3 className="text-lg font-bold text-[#111827]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6B7280]">{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected Projects" title="CRM 마케팅 루프를 만드는 대표 프로젝트">
          <div className="grid gap-5">
            {selectedProjects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="card-hover grid gap-6 rounded-lg border border-[#E5E1D8] bg-white p-6 md:grid-cols-[1fr_260px]"
              >
                <div>
                  <p className="text-sm font-bold text-[#FF8A3D]">{project.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#111827]">{project.title}</h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-[#6B7280]">{project.summary}</p>
                </div>
                <div className="rounded-md bg-[#F8F7F2] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Impact</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#111827]">
                    {project.impact.map((impact) => (
                      <li key={impact}>{impact}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="CRM Marketing Flow"
          title="CRM 그룹 → 통합 메시지 → 성과 추적 → CRM 레시피"
          description="CRM 그룹으로 고객군을 정의하고, 통합 메시지로 타겟 메시지를 발송하며, 숏링크 기반 성과 추적으로 주문과 매출을 확인합니다. 이후 CRM 레시피를 통해 반복 발송과 자동화 시나리오로 확장하고 있습니다."
        >
          <div className="overflow-x-auto rounded-lg border border-[#E5E1D8] bg-white p-4">
            <div className="grid min-w-[720px] grid-cols-4 gap-3">
              {["CRM 그룹", "통합 메시지", "성과 추적", "CRM 레시피"].map((step, index) => (
                <div key={step} className="rounded-md border border-[#E5E1D8] bg-[#F8F7F2] p-5">
                  <p className="text-sm font-bold text-[#00B894]">0{index + 1}</p>
                  <p className="mt-3 text-lg font-bold text-[#111827]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Additional Projects" title="연동, 자동화, 구축 경험">
          <div className="grid gap-4 md:grid-cols-3">
            {additionalProjects.map((project) => (
              <article key={project.title} className="rounded-lg border border-[#E5E1D8] bg-white p-6">
                <p className="text-sm font-bold text-[#FF8A3D]">{project.subtitle}</p>
                <h3 className="mt-2 text-xl font-bold text-[#111827]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6B7280]">{project.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="Work Process"
          title="문제를 정책과 흐름으로 바꾼 뒤 구현까지 연결합니다"
          description="저는 문제를 기능으로 바로 옮기기보다, 운영자의 업무 흐름과 정책 조건을 먼저 구조화합니다."
        >
          <div className="grid gap-3 md:grid-cols-6">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-lg border border-[#E5E1D8] bg-white p-4">
                <p className="text-sm font-bold text-[#00B894]">0{index + 1}</p>
                <p className="mt-3 text-sm font-bold leading-6 text-[#111827]">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-base leading-8 text-[#6B7280]">
            요구사항을 수집한 뒤 문제를 정의하고, 조건값·상태값·권한·예외 케이스를 정리한 후 화면과
            플로우로 구체화합니다. 이후 개발 협의, QA, 운영 데이터를 통해 기능이 실제로 사용되는지
            확인하고 다음 개선점으로 연결합니다.
          </p>
        </Section>

        <Section id="tools" eyebrow="Tools" title="문서화, 협업, 검증 도구">
          <div className="overflow-x-auto rounded-lg border border-[#E5E1D8] bg-white">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <tbody>
                {tools.map(([name, description]) => (
                  <tr key={name} className="border-b border-[#E5E1D8] last:border-b-0">
                    <th className="w-64 px-5 py-4 font-bold text-[#111827]">{name}</th>
                    <td className="px-5 py-4 text-[#6B7280]">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="커머스 플랫폼과 데이터 기반 서비스 기획에 관심이 있습니다.">
          <div className="rounded-lg border border-[#E5E1D8] bg-white p-6 md:p-8">
            <p className="max-w-2xl text-base leading-8 text-[#6B7280]">
              커머스 플랫폼, 백오피스, CRM, 데이터 기반 서비스 기획에 관심이 있습니다.
            </p>
            <a
              href="mailto:wongt93@naver.com"
              className="mt-6 inline-flex rounded-full bg-[#111827] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#00B894]"
            >
              wongt93@naver.com
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
