import Link from "next/link";
import { ArrowRight, Bot, Box, Building2, Coins, Film, Gamepad2, Headphones, Megaphone, Newspaper, PackageOpen, Shirt, ShoppingBag, Utensils } from "lucide-react";
import type { Company } from "@/data/companies";

const iconMap = {
  "pub-ia": Bot, "pub-3d": Box, "pub-records": Headphones, "pub-films": Film,
  "pub-imoveis": Building2, pubet: Gamepad2, "pub-food": Utensils, "pub-ecom": ShoppingBag,
  "pub-lancamentos": Megaphone, "pub-media": Newspaper, "pub-crypto": Coins,
  "pub-trade": PackageOpen, "pub-textil": Shirt,
};

export function CompanyCard({ company, index }: { company: Company; index: number }) {
  const Icon = iconMap[company.id as keyof typeof iconMap] ?? Box;
  return (
    <article className="company-card">
      <div className="company-card-top"><span className="company-icon"><Icon size={19} /></span><span className="company-index">{String(index + 1).padStart(2, "0")}</span></div>
      <span className="company-category">{company.category}</span>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <Link href={`/empresas/${company.id}`} className="text-link">Ver detalhes <ArrowRight size={14} /></Link>
    </article>
  );
}
