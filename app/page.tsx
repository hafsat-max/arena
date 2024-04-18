import { Featured } from "@/components";
import { Brands } from "../components/home/brands";
import { Hero } from "../components/home/hero";


export default function HomePage() {
  return (
    <main>
       <Hero />
      <Brands />
      <Featured/>
    </main>
  );
}
