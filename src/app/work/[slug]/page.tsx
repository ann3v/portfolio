import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study";
import { projects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/work/${project.slug}`);
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
