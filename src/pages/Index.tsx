import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSurvey from "@/components/HeroSurvey";
import BalanceScale from "@/components/BalanceScale";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="w-full h-px bg-border" />
      <div id="balance"><BalanceScale /></div>
      <div className="w-full h-px bg-border" />
      <div id="hero"><HeroSurvey /></div>
      <div className="w-full h-px bg-border" />
      <div id="section1"><Section1 /></div>
      <div className="w-full h-px bg-border" />
      <div id="section2"><Section2 /></div>
      <div className="w-full h-px bg-border" />
      <div id="section3"><Section3 /></div>
    </main>
  );
}
