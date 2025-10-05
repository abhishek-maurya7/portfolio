import Hero from "@/components/organisms/hero";
import type { HeroSectionProps } from "@/types/components/hero.types";
import { getStrapiData } from "@/lib/strapi/client";
import { GET_HERO_QUERY } from "@/lib/strapi/queries";
import { Metadata } from "next";
import { Typography } from "@/components/atoms";
import Navbar from "@/components/molecules/navbar";

export const metadata: Metadata = {
  title: "Abhishek Maurya | Frontend Developer",
};

export const revalidate = false;

export default async function Home() {
  const { hero } = (await getStrapiData(GET_HERO_QUERY)) as {
    hero: HeroSectionProps;
  };

  return (
    <main className="">
      <Hero {...hero} />
    </main>
  );
}
