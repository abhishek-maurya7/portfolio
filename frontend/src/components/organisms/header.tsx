import { getStrapiData } from "@/lib/strapi/client";
import { GET_NAVIGATION_QUERY } from "@/lib/strapi/queries";
import Logo from "../atoms/logo";
import Navbar from "../molecules/navbar";

export default async function Header() {
  const { navigation } = await getStrapiData(GET_NAVIGATION_QUERY);

  return (
    <header className="flex justify-between items-center py-2 md:py-3 relative">
      <Logo />
      <Navbar navigation={navigation} />
    </header>
  );
}
