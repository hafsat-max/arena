import { Featured } from "@/components";
import { Brands } from "../components/home/brands";
import { Hero } from "../components/home/hero";
import { CustomerExperience } from "@/components/home/customer-experience";


export default function HomePage() {
  return (
    <main>
       <Hero />
      <Brands />
      <Featured/>
      <CustomerExperience />
    </main>
  );
}
