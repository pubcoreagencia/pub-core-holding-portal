import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompanyDetail } from "@/components/company-detail";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { companies, getCompany } from "@/data/companies";

export function generateStaticParams() {
  return companies.map(company => ({ slug: company.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  return company ? { title: company.name, description: company.description } : {};
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();
  return <main><Header /><CompanyDetail company={company} /><Footer /></main>;
}
