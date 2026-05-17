import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/Header";
import { projectDetails, type ProjectSlug } from "@/lib/data";

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
            <Info label="Organization" value={project.period} />
            <Info label="Role" value={project.role} />
            <Info label="Domain" value="CRM / Message / Analytics / Commerce Platform" />
          </div>
        </section>

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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#E5E1D8] bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6B7280]">{label}</p>
      <p className="mt-3 text-sm font-bold leading-6 text-[#111827]">{value}</p>
    </div>
  );
}
