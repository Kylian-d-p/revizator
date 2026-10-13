import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import AffichageFiche from "@/components/AffichageFiche";
import BoutonImprimer from "@/components/BoutonImprimer";
import Icone from "@/components/Icone";
import type { FicheEnregistree } from "@/lib/fiche";
import { creerClientSupabase } from "@/lib/supabase";

// Partagé entre generateMetadata et la page : une seule requête par rendu.
const chargerFiche = cache(async (id: string) => {
  const supabase = creerClientSupabase();
  const { data: fiche } = await supabase
    .from("fiches")
    .select("id, titre, synthese, questions, created_at")
    .eq("id", id)
    .maybeSingle<FicheEnregistree>();

  return fiche;
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const fiche = await chargerFiche(id);
  return { title: fiche?.titre ?? "Fiche introuvable" };
}

export default async function DetailFiche({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fiche = await chargerFiche(id);

  if (!fiche) {
    notFound();
  }

  // Numéro de la fiche dans le sommaire (la plus ancienne porte le n° 1)
  const supabase = creerClientSupabase();
  const { count: numero } = await supabase
    .from("fiches")
    .select("id", { count: "exact", head: true })
    .lte("created_at", fiche.created_at);

  const dateCreation = new Date(fiche.created_at).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });

  return (
    <main className="mx-auto max-w-6xl px-5 pt-8 pb-20 sm:px-8 sm:pt-10">
      <Link
        href="/fiches"
        className="sans-impression inline-flex items-center gap-2 font-semibold text-encre-2 no-underline hover:text-encre"
      >
        <Icone nom="retour" className="size-4" />
        Mes fiches
      </Link>

      <header className="mt-6 flex items-start gap-5 border-b-2 border-filet pb-7 sm:mt-8 sm:gap-7">
        {numero ? (
          <span
            aria-hidden="true"
            className="archivo-large flex size-14 shrink-0 items-center justify-center bg-essentiel text-2xl font-extrabold tabular-nums sm:size-24 sm:text-5xl"
          >
            {numero}
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <h1 className="archivo-large text-[clamp(1.875rem,4.6vw,3.25rem)] leading-[1.04] font-extrabold tracking-tight break-words">
            {fiche.titre}
          </h1>
          <p className="chiffres mt-3 text-encre-2">
            {numero ? `Fiche n° ${numero} · ` : ""}créée le {dateCreation}
          </p>
        </div>
        <BoutonImprimer className="hidden md:inline-flex" />
      </header>

      <div className="mt-8 sm:mt-10">
        <AffichageFiche fiche={fiche} />
      </div>
    </main>
  );
}
