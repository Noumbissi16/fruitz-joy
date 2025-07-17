import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <header className="bg-primary relative w-full h-dvh flex flex-col items-center overflow-hidden">
        {/* <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/or2.png"
            alt="Fruit Decor 1"
            width={70}
            height={70}
            className="absolute top-[30%] left-[10%] rotate-[20deg]"
          />
          <Image
            src="/images/or2.png"
            alt="Fruit Decor 2"
            width={60}
            height={60}
            className="absolute top-[28%] left-[30%] rotate-[-10deg]"
          />
          <Image
            src="/images/or2.png"
            alt="Fruit Decor 3"
            width={90}
            height={90}
            className="absolute top-[42%] left-[5%] rotate-[15deg]"
          />
          <Image
            src="/images/or2.png"
            alt="Fruit Decor 4"
            width={90}
            height={90}
            className="absolute top-[42%] right-[5%] rotate-[-15deg]"
          />
          <Image
            src="/images/or2.png"
            alt="Fruit Decor 5"
            width={65}
            height={65}
            className="absolute top-[30%] right-[30%] rotate-[30deg]"
          />
          <Image
            src="/images/or2.png"
            alt="Fruit Decor 6"
            width={70}
            height={70}
            className="absolute top-[58%] left-[8%] rotate-[-5deg]"
          />
          <Image
            src="/images/or2.png"
            alt="Fruit Decor 7"
            width={70}
            height={70}
            className="absolute top-[58%] right-[8%] rotate-[5deg]"
          />
        </div> */}

        <div className="relative text-center text-white px-4 mt-36 max-md:mt-20">
          <h1 className="text-6xl max-sm:text-4xl font-extrabold max-w-2xl">
            Bienvenue dans l&apos;univers des jus naturels
          </h1>
          <p className="text-lg mt-4">Fruitzy-Joy, la fraîcheur au naturel</p>
          <Button className="mt-6" variant={"secondary"}>
            Explorer nos saveurs
          </Button>
        </div>

        <div className="mt-8 flex justify-center !gap-6 max-w-4xl max-sm:hidden">
          <div className="w-fit flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-orange-600">8+</h2>
            <p>Varieter de fruit</p>
          </div>
          <div className="w-fit flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-orange-600">1000</h2>
            <p>Vente par semaine</p>
          </div>
          <div className="w-fit flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-orange-600">38+</h2>
            <p>Boutique dans le monde</p>
          </div>
        </div>

        <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4 max-w-5xl w-full absolute -bottom-60 max-md:-bottom-12 max-sm:-bottom-40 ">
          <Image
            src="/images/single-bottle.png"
            alt="Fruitzy Logo"
            width={400}
            height={400}
            className="h-[600px] object-contain mx-auto "
          />
          <Image
            src="/images/single-bottle.png"
            alt="Fruitzy Logo"
            width={400}
            height={400}
            className="h-[600px] object-contain mx-auto "
          />
          <Image
            src="/images/single-bottle.png"
            alt="Fruitzy Logo"
            width={400}
            height={400}
            className="h-[600px] object-contain mx-auto max-sm:hidden"
          />
        </div>
      </header>
    </main>
  );
}
