"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { flavours } from "@/lib/flavours";
import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATE_MS = 4500;

const Hero = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAutoplay(false);
    }
  }, []);

  useEffect(() => {
    if (!autoplay || hovering) return;
    const timer = setInterval(
      () => setActive((current) => (current + 1) % flavours.length),
      ROTATE_MS,
    );
    return () => clearInterval(timer);
  }, [autoplay, hovering]);

  return (
    <header
      className="relative flex min-h-dvh flex-col overflow-hidden pt-20 transition-colors duration-700"
      style={{ backgroundColor: flavours[active].tint }}
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div className="pt-6 lg:pb-12 lg:pt-0">
          <p className="text-sm font-semibold tracking-wide">
            Jus et nectars naturels, faits à Yaoundé
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.75rem,6.4vw,5.5rem)] font-extrabold leading-[0.98] tracking-tight text-balance">
            Le fruit d’ici, le sourire en plus.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed">
            Des fruits locaux de premier choix, transformés sans conservateur,
            sans colorant et sans arôme artificiel.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
              <a href="#jus">Découvrir nos jus</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-5 text-base underline underline-offset-4 hover:bg-foreground/10"
            >
              <a href="#contact">Commander</a>
            </Button>
          </div>
        </div>

        <div className="relative h-[42vh] min-h-64 self-end lg:h-[72vh]">
          {flavours.map((flavour, index) => (
            <Image
              key={flavour.slug}
              src={flavour.image.src}
              alt={index === active ? flavour.image.alt : ""}
              aria-hidden={index !== active}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className={cn(
                "object-contain object-bottom transition-all duration-700 ease-out",
                index === active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            />
          ))}
        </div>
      </div>

      <div
        role="group"
        aria-label="Choisir une saveur"
        className="relative border-t-2 border-foreground"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 sm:px-8 lg:grid-cols-6">
          {flavours.map((flavour, index) => (
            <button
              key={flavour.slug}
              type="button"
              aria-pressed={index === active}
              onClick={() => {
                setActive(index);
                setAutoplay(false);
              }}
              className={cn(
                "min-h-14 cursor-pointer px-2 py-3 text-center text-sm leading-tight transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground sm:text-base",
                index === active
                  ? "bg-foreground font-semibold text-background hover:bg-foreground"
                  : "font-medium",
              )}
            >
              {flavour.shortName}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
