import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const SECTION_IDS = [
  { id: "balance", label: "Cán cân" },
  { id: "hero", label: "Khảo sát" },
  { id: "section1", label: "Dân tộc" },
  { id: "section2", label: "Mác-Lênin" },
  { id: "section3", label: "Việt Nam" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = SECTION_IDS.map((n) => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(SECTION_IDS[i].id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeIndex = SECTION_IDS.findIndex((n) => n.id === active);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/15 backdrop-blur-xl border-b border-white/20"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-11">
          {/* Left: Title + active section indicator */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-[10px] font-bold tracking-[0.25em] uppercase text-white hover:text-white/80 transition-colors"
            >
              Chính trị học
            </Link>
            {activeIndex >= 0 && (
              <motion.span
                key={active}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] tracking-wider text-white/80 hidden sm:block"
              >
                — {SECTION_IDS[activeIndex].label}
              </motion.span>
            )}
          </div>

          {/* Right: Nav items */}
          <div className="flex items-center gap-0.5">
            {/* Khám phá dân tộc */}
            <Link
              to="/ethnic-distribution"
              className="group relative px-2.5 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-300 text-white/80 hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Khám phá dân tộc
              </span>
            </Link>

            {/* Separator */}
            <div className="w-px h-4 bg-border/30 mx-2" />

            {/* Khai báo AI */}
            <Link
              to="/ai-declaration"
              className="group relative px-2.5 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-300 text-white/80 hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Khai báo AI
              </span>
            </Link>

            {/* Trò chơi */}
            <a
              href="https://thi-truong-thinh-vuong.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-2.5 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-300 text-white/80 hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Trò chơi
              </span>
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
