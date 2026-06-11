import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Music, Sun, Moon } from "lucide-react";
import { NAV, SITE } from "../lib/site";
import { useTheme } from "../lib/ThemeContext";
import logo from "../assets/logo.jpeg";

const musicSymbols = ["♩", "♪", "♫", "♬"];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-gold)] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-[var(--color-gold)]" />
      ) : (
        <Moon className="h-4 w-4 text-[var(--color-gold)]" />
      )}
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="navbar-floating">
        <div className="navbar-inner">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setOpen(false)}
          >
            {/* PERFECTLY ROUND LOGO */}
            <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full overflow-hidden bg-[var(--color-gold)] shrink-0 ring-2 ring-[var(--color-gold)]/20 group-hover:ring-[var(--color-gold)]/40 transition-all">
              <img
                src={logo}
                alt="UBY'S String Academy"
                className="h-full w-full object-cover rounded-full"
                style={{ clipPath: "circle(50%)" }}
              />
            </span>
            <span className="font-display leading-tight">
              <span className="block font-semibold tracking-wide text-primary text-sm md:text-base">
                UBY'S
              </span>
              <span className="block text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[var(--color-gold)]">
                String Academy
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-[var(--color-gold)]/10 font-medium"
                      : "text-foreground/70 hover:text-primary hover:bg-white/5"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-hero btn-hero-hover text-xs px-4 py-2"
            >
              Enroll Now
            </a>
          </div>

          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 text-primary relative"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu-overlay" onClick={() => setOpen(false)}>
          <div
            className="mobile-menu-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Decorative note */}
            <div className="absolute top-3 right-6 text-[var(--color-gold)] opacity-[0.06] text-6xl pointer-events-none select-none">
              ♪
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Music className="h-4 w-4 text-[var(--color-gold)]" />
                <span className="font-display text-sm text-[var(--color-primary-heading)]">
                  Navigation
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] transition hover:bg-[var(--color-gold)]/20"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV.map((n, i) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--color-gold)]/12 text-[var(--color-primary-heading)] font-semibold"
                        : "text-foreground/70 hover:text-primary hover:bg-white/[0.03]"
                    }`
                  }
                >
                  <span className="text-[var(--color-gold)]/30 text-sm w-4 text-center font-mono">
                    {musicSymbols[i % musicSymbols.length]}
                  </span>
                  <span>{n.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Theme toggle + CTA in mobile menu */}
            <div className="mt-5 pt-4 border-t border-[var(--color-border)] space-y-3">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/30 transition-all"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 text-[var(--color-gold)]" />
                    Switch to Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-[var(--color-gold)]" />
                    Switch to Dark Mode
                  </>
                )}
              </button>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-hero btn-hero-hover w-full justify-center text-sm"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}