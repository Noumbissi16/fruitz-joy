import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { contact, flavours } from "@/lib/flavours";
import {
  Apple,
  Coins,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";

const facts = [
  { value: "100 %", label: "naturel" },
  { value: "0", label: "conservateur, colorant ou arôme artificiel" },
  { value: "6 mois", label: "de conservation, au minimum" },
  { value: "33 cl", label: "en bouteille de verre" },
];

const reasons = [
  { icon: Heart, text: "vous voulez prendre soin de votre santé." },
  { icon: Leaf, text: "nos produits sont naturels." },
  { icon: Star, text: "votre satisfaction est notre priorité." },
  { icon: Coins, text: "nos prix sont abordables." },
  { icon: Apple, text: "vous aimez la diversité." },
];

const values = [
  {
    title: "Créativité",
    text: "Nous nous inspirons des goûts et des envies de nos clients.",
  },
  {
    title: "Qualité",
    text: "Nous sélectionnons les meilleurs fruits, tout simplement.",
  },
  {
    title: "Diversité",
    text: "Des jus simples aux cocktails explosifs, en passant par les sirops et les confitures.",
  },
  {
    title: "Contribution",
    text: "Une alternative saine pour les amateurs de jus lassés des boissons gazeuses.",
  },
  {
    title: "Dévouement",
    text: "Nous donnons le meilleur de nous-mêmes à chaque bouteille.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <section aria-label="L’essentiel" className="border-b border-border">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {fact.value}
                </dt>
                <dd className="mt-1 max-w-52 text-muted-foreground">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="jus" className="scroll-mt-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight text-balance sm:text-6xl">
                Six recettes, aucun détour.
              </h2>
              <p className="max-w-sm text-lg text-muted-foreground">
                La composition de chaque bouteille tient en une ligne. Vous
                pouvez la lire ici.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {flavours.map((flavour) => (
                <li key={flavour.slug} >
                  <article>
                    <div
                      className="flex aspect-[5/4] items-end overflow-hidden rounded-3xl px-5 pt-8"
                      style={{ backgroundColor: flavour.tint }}
                    >
                      <Image
                        src={flavour.image.src}
                        alt={flavour.image.alt}
                        width={flavour.image.width}
                        height={flavour.image.height}
                        loading="lazy"
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                        className="max-h-full w-full object-contain object-bottom"
                      />
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl font-bold tracking-tight">
                        {flavour.name}
                      </h3>
                      <span className="shrink-0 text-sm text-muted-foreground">
                        33&nbsp;cl
                      </span>
                    </div>
                    <p className="mt-1 text-muted-foreground">
                      {flavour.composition}
                    </p>
                  </article>
                </li>
              ))}
            </ul>

            <p className="mt-12 border-t border-border pt-6 text-lg">
              Nous préparons aussi des{" "}
              <strong className="font-semibold">sirops</strong> et des{" "}
              <strong className="font-semibold">confitures de fruits</strong>.{" "}
              <a
                href="#contact"
                className="font-semibold underline underline-offset-4"
              >
                Demandez-nous ce qui est disponible
              </a>
              .
            </p>
          </div>
        </section>

        <section id="pourquoi" className="scroll-mt-6 bg-secondary/15 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight text-balance sm:text-5xl">
              Pourquoi choisir Fruitzy-Joy&nbsp;?
            </h2>
            <ul>
              {reasons.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-5 border-t border-foreground/20 py-6 last:border-b"
                >
                  <Icon aria-hidden className="mt-1.5 size-6 shrink-0" />
                  <p className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    <span className="text-rust">Parce que </span>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="histoire"
          className="scroll-mt-6 bg-primary py-20 text-primary-foreground sm:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <Image
              src="/images/annie.webp"
              alt="Annie Stève Monthé, fondatrice de Fruitzy-Joy"
              width={1098}
              height={770}
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="w-full rounded-3xl"
            />
            <div>
              <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight text-balance sm:text-5xl">
                Tout est parti d’un constat tout simple.
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed">
                <p>
                  Dans les cérémonies comme dans les points de vente, on ne
                  trouvait presque que des boissons gazeuses. Je me suis formée
                  à la transformation des fruits en jus, en confitures et en
                  sirops pour proposer une alternative saine.
                </p>
                <p>
                  Fruitzy-Joy est née en 2023 à Simbock, à Yaoundé. Depuis, nous
                  mettons en bouteille des fruits locaux, à des prix abordables,
                  avec l’ambition de créer des emplois ici.
                </p>
              </div>
              <p className="mt-6 font-semibold">
                Annie Stève Monthé
                <span className="block font-normal opacity-80">
                  Promotrice de Fruitzy-Joy
                </span>
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="valeurs" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2
              id="valeurs"
              className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl"
            >
              Nos valeurs
            </h2>
            <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="border-t-2 border-foreground pt-4"
                >
                  <dt className="font-display text-xl font-bold tracking-tight">
                    {value.title}
                  </dt>
                  <dd className="mt-2 text-muted-foreground">{value.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="scroll-mt-6 bg-secondary py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-end">
            <div>
              <h2 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-7xl">
                On trinque&nbsp;?
              </h2>
              <p className="mt-5 max-w-md text-lg">
                Pour une commande, une cérémonie ou votre point de vente,
                appelez-nous ou écrivez-nous.
              </p>
            </div>
            <ul className="text-lg font-semibold sm:text-xl">
              <li className="border-t border-foreground/40">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-4 py-5 underline-offset-4 hover:underline"
                >
                  <Phone aria-hidden className="size-6 shrink-0" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="border-t border-foreground/40">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 break-all py-5 underline-offset-4 hover:underline"
                >
                  <Mail aria-hidden className="size-6 shrink-0" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-4 border-y border-foreground/40 py-5">
                <MapPin aria-hidden className="size-6 shrink-0" />
                {contact.location}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
