import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "hero", label: "Khảo sát" },
  { id: "balance", label: "Cán cân" },
  { id: "section1", label: "Dân tộc" },
  { id: "section2", label: "Mác-Lênin" },
  { id: "section3", label: "Việt Nam" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-12">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          Chính trị học
        </span>
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-sm ${
                active === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-accent rounded-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
