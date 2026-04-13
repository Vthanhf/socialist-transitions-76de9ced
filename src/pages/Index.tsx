import HeroSurvey from "@/components/HeroSurvey";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Index() {
  return (
    <main className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <HeroSurvey />
      <Section1 />
      <Section2 />
      <Section3 />
      <footer className="px-6 md:px-16 lg:px-24 py-16 border-t-2 border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Kinh tế chính trị Mác — Lênin
          </p>
          <p className="text-xs text-muted-foreground">
            Bài thuyết trình nhóm — 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
