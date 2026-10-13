"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LIENS = [
  { href: "/", libelle: "Nouvelle fiche" },
  { href: "/fiches", libelle: "Mes fiches" },
];

function estActif(chemin: string, href: string) {
  return href === "/" ? chemin === "/" : chemin.startsWith(href);
}

export default function EnTete() {
  const chemin = usePathname();

  return (
    <header className="sans-impression border-b-2 border-filet">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 no-underline"
          aria-label="Revizator, accueil"
        >
          <span className="archivo-large text-lg font-extrabold tracking-tight min-[400px]:text-xl sm:text-2xl">
            Revizator
          </span>
          {/* Gamme quadri, comme en marge d'une page imprimée : en carré 2×2 sur petit écran */}
          <span className="grid grid-cols-2 sm:flex" aria-hidden="true">
            <span className="size-1.5 bg-essentiel transition-transform duration-300 ease-sortie group-hover:-translate-y-1 sm:size-2.5" />
            <span className="size-1.5 bg-teste transition-transform delay-[40ms] duration-300 ease-sortie group-hover:-translate-y-1 sm:size-2.5" />
            <span className="size-1.5 bg-surligneur transition-transform delay-[80ms] duration-300 ease-sortie group-hover:-translate-y-1 sm:size-2.5" />
            <span className="size-1.5 bg-encre transition-transform delay-[120ms] duration-300 ease-sortie group-hover:-translate-y-1 sm:size-2.5" />
          </span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-1 sm:gap-2">
            {LIENS.map(({ href, libelle }) => {
              const actif = estActif(chemin, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={actif ? "page" : undefined}
                    className={`relative block px-2 py-2 text-[0.95rem] font-semibold whitespace-nowrap no-underline transition-colors sm:px-3 ${
                      actif ? "text-encre" : "text-encre-2 hover:text-encre"
                    }`}
                  >
                    {libelle}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-2 -bottom-[14px] h-1 bg-encre transition-transform duration-300 ease-sortie sm:inset-x-3 ${
                        actif ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
