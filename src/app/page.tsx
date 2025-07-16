import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <header className="h-dvh w-full bg-primary p-6">
        <div className="flex items-center justify-center h-full w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4 justify-between w-full max-w-3xl">
            {/* <h1 className="text-2xl font-bold text-white">{t("title")}</h1> */}

            <div className="relative text-white p-6">
              <h1 className="text-5xl font-extrabold">Savourez la Nature</h1>
              <p className="text-lg mt-3">
                Découvrez nos jus naturels faits avec amour et passion.
              </p>
              <Button variant={"outline"}>
                Explorer nos saveurs
              </Button>
            </div>
            <Image
              src="/images/pack-bottle.png"
              alt="Fruitzy Logo"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </header>
    </main>
  );
}
