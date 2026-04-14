import HeroSurvey from "@/components/HeroSurvey";
import BalanceScale from "@/components/BalanceScale";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <HeroSurvey />
      <div className="w-full h-px bg-border" />
      <BalanceScale />
      <div className="w-full h-px bg-border" />
      <Section1 />
      <div className="w-full h-px bg-border" />
      <Section2 />
      <div className="w-full h-px bg-border" />
      <Section3 />
    </main>
  );
}
