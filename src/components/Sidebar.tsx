import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SIDEBAR_ITEMS = [
  { id: "home", label: "Trang chủ", icon: "🏠" },
  { id: "balance", label: "Cán cân ", icon: "⚖️" },
  { id: "hero", label: "Khảo sát Dân tộc", icon: "📊" },
  { id: "section1", label: "Dân tộc", icon: "🌍" },
  { id: "section2", label: "Mác-Lênin", icon: "📖" },
  { id: "section3", label: "Việt Nam", icon: "🇻🇳" },
];

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      // Check if at top (home section)
      if (window.scrollY < 100) {
        setActive("home");
        return;
      }
      
      const sections = SIDEBAR_ITEMS.slice(1).map((n) => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(SIDEBAR_ITEMS[i + 1].id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Sidebar - Always visible on right */}
      <motion.aside
        className="fixed right-0 top-0 w-20 h-screen bg-transparent  z-30 overflow-visible pt-16"
      >
        <div className="px-2 py-4">
          {/* Menu items - icons only */}
          <nav className="space-y-3">
            {SIDEBAR_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <div key={item.id} className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => scrollTo(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`w-full flex items-center justify-center p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/20 border border-primary/40"
                        : "border border-transparent hover:bg-foreground/5"
                    }`}
                  >
                    <span 
                      className={`text-2xl transition-all ${
                        item.id === "section3" ? "text-white drop-shadow-lg" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                  </motion.button>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap z-[100] pointer-events-none"
                      >
                        <div className="relative px-3 py-2 rounded-md bg-white/5 backdrop-blur-sm text-white text-xs font-semibold shadow-2xl border border-white/20">
                          {item.label}
                          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white/90 rotate-45" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>
      </motion.aside>
    </>
  );
}
