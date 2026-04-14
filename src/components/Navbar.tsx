import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { id: "hero", label: "Khảo sát", num: "01" },
  { id: "balance", label: "Cán cân", num: "02" },
  { id: "section1", label: "Dân tộc", num: "03" },
  { id: "section2", label: "Mác-Lênin", num: "04" },
  { id: "section3", label: "Việt Nam", num: "05" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(NAV_ITEMS[i].id);
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

  const activeIndex = NAV_ITEMS.findIndex((n) => n.id === active);

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
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-11">
          {/* Left: Title + active section indicator */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground/70">
              Chính trị học
            </span>
            {activeIndex >= 0 && (
              <motion.span
                key={active}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] tracking-wider text-muted-foreground/50 hidden sm:block"
              >
                — {NAV_ITEMS[activeIndex].num}/{String(NAV_ITEMS.length).padStart(2, "0")}
              </motion.span>
            )}
          </div>

          {/* Right: Nav items */}
          <div className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item, i) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`group relative px-2.5 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground/60 hover:text-foreground/80"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-x-1 -bottom-[1px] h-[1.5px] bg-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span
                      className={`text-[9px] font-mono transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-muted-foreground/30 group-hover:text-muted-foreground/50"
                      }`}
                    >
                      {item.num}
                    </span>
                    {item.label}
                  </span>
                </button>
              );
            })}
            {/* Separator */}
            <div className="w-px h-4 bg-border/30 mx-2" />
            {/* External page link */}
            <Link
              to="/ethnic-distribution"
              className="group relative px-2.5 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-300 text-muted-foreground/60 hover:text-foreground/80"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="text-[9px] font-mono transition-colors duration-300 text-muted-foreground/30 group-hover:text-muted-foreground/50">
                  06
                </span>
                Khám phá dân tộc
              </span>
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
