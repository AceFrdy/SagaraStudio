import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Globe,
  Smartphone,
  Database,
  LayoutDashboard,
  LifeBuoy,
  Cloud,
  Shield,
  Sparkles,
  Users,
  FileText,
  Headphones,
  Layers,
  MessageSquare,
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Waves as WavesIcon,
  Quote,
  Rocket,
  Award,
  Zap,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Search,
  Lightbulb,
  Palette,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

/* ────────────────────────────────────────────────────────────────
 *  Reusable primitives
 * ──────────────────────────────────────────────────────────────── */

function WaveDivider({
  flip = false,
  from = "var(--surface)",
  to = "var(--background)",
}: {
  flip?: boolean;
  from?: string;
  to?: string;
}) {
  return (
    <div
      className="relative -mt-px h-16 w-full sm:h-24"
      style={{ background: from, transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z"
          style={{ fill: to }}
        />
        <path
          d="M0,80 C240,40 480,110 720,70 C960,30 1200,80 1440,72 L1440,120 L0,120 Z"
          style={{ fill: to, opacity: 0.55 }}
        />
      </svg>
    </div>
  );
}

function OceanBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />
      <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[oklch(0.78_0.14_195/0.35)] blur-3xl" />
      <div className="absolute -right-32 top-40 h-[460px] w-[460px] rounded-full bg-[oklch(0.55_0.14_235/0.35)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-background" />
      {/* particles */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(1 0 0 / 0.6) 1px, transparent 1.5px), radial-gradient(circle at 70% 80%, oklch(1 0 0 / 0.5) 1px, transparent 1.5px), radial-gradient(circle at 40% 70%, oklch(0.78 0.14 195 / 0.6) 1px, transparent 1.5px)",
          backgroundSize: "220px 220px, 340px 340px, 180px 180px",
        }}
      />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl ${
          invert ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            invert ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString("id-ID") + suffix);
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl gradient-accent text-accent-foreground shadow-glass">
        <WavesIcon className="h-5 w-5" />
        <span className="absolute -inset-1 -z-10 rounded-2xl bg-accent/30 blur-md" />
      </span>
      <div className="leading-tight">
        <div className="font-display text-base font-bold text-primary">SagaraStudio</div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Ocean · Digital
        </div>
      </div>
    </a>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Navbar
 * ──────────────────────────────────────────────────────────────── */

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#tentang", label: "About" },
  { href: "#layanan", label: "Services" },
  { href: "#portofolio", label: "Portfolio" },
  { href: "#proses", label: "Process" },
  { href: "#testimoni", label: "Testimonials" },
  { href: "#kontak", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5 sm:px-6">
      <div
        className={`mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "glass shadow-glass"
            : "border border-white/40 bg-white/50 backdrop-blur-md"
        }`}
      >
        <BrandMark />

        <nav className="hidden items-center gap-1 rounded-full border border-white/50 bg-white/40 px-2 py-1.5 backdrop-blur lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-3 py-1.5 text-sm font-medium text-primary/75 transition-colors hover:text-secondary"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full gradient-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="h-10 rounded-full gradient-accent px-5 text-accent-foreground shadow-glass hover:opacity-95"
          >
            <a href="#kontak">
              Let&apos;s Talk <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/50 bg-white/60 text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-0 -z-0 lg:hidden">
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-md" onClick={() => setOpen(false)} />
          <div className="absolute inset-x-4 top-20 rounded-2xl glass p-5 shadow-glass">
            <div className="space-y-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-primary hover:bg-white/60"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <Button asChild className="mt-3 w-full rounded-xl gradient-accent text-accent-foreground">
              <a href="#kontak" onClick={() => setOpen(false)}>
                Let&apos;s Talk
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Hero
 * ──────────────────────────────────────────────────────────────── */

const heroStats = [
  { value: 120, suffix: "+", label: "Projects" },
  { value: 60, suffix: "+", label: "Clients" },
  { value: 10, suffix: "+", label: "Years" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 lg:pb-32">
      <OceanBackdrop />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Eyebrow>Premium Digital Agency · Est. 2015</Eyebrow>
            <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-[4.25rem]">
              Crafting{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-br from-secondary via-[oklch(0.55_0.14_215)] to-accent bg-clip-text text-transparent">
                  deep-ocean
                </span>
                <svg
                  className="absolute -bottom-2 left-0 h-2 w-full text-accent/70"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 4 Q 50 -2 100 4 T 200 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              digital experiences for modern enterprises.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              SagaraStudio is a coastal technology studio building award-winning websites,
              applications, and information systems — engineered with enterprise-grade craft and
              elegant, immersive design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full gradient-accent px-6 text-accent-foreground shadow-glass hover:opacity-95"
              >
                <a href="#kontak">
                  Start a Project <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-primary/20 bg-white/70 px-6 text-primary backdrop-blur hover:bg-white"
              >
                <a href="#portofolio">View Portfolio</a>
              </Button>
            </div>

            {/* Floating trust chips */}
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium text-primary/70">
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 shadow-soft">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" /> ISO-Ready Security
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 shadow-soft">
                <Award className="h-3.5 w-3.5 text-secondary" /> Award-winning craft
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 shadow-soft">
                <Zap className="h-3.5 w-3.5 text-accent" /> 99.9% Uptime
              </span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              {/* mesh orb */}
              <div className="absolute inset-0 rounded-[42%_58%_45%_55%/55%_40%_60%_45%] gradient-mesh opacity-90 blur-[2px]" />
              <div className="absolute inset-6 rounded-[52%_48%_40%_60%/45%_55%_45%_55%] gradient-hero shadow-glass" />
              {/* animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-2 rounded-full border border-dashed border-accent/40" />
              </motion.div>

              {/* floating stat cards */}
              {heroStats.map((s, i) => {
                const pos = [
                  "left-0 top-6",
                  "right-0 top-16",
                  "left-4 bottom-10",
                  "right-6 bottom-0",
                ][i];
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className={`absolute ${pos}`}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-2xl glass px-4 py-3 shadow-glass"
                    >
                      <div className="font-display text-2xl font-bold text-primary">
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Client strip */}
        <div className="mt-16 rounded-2xl glass px-6 py-5 shadow-soft sm:mt-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Trusted by leading organisations
            </div>
            <div className="grid grow grid-cols-3 items-center gap-4 sm:grid-cols-6">
              {["Kominfo", "BUMD Jaya", "SMAN 1", "Koperasi Mitra", "PT Andalan", "Yayasan Cipta"].map(
                (n) => (
                  <div
                    key={n}
                    className="text-center text-sm font-bold tracking-tight text-primary/60"
                  >
                    {n}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  About
 * ──────────────────────────────────────────────────────────────── */

const values = [
  { icon: Shield, title: "Professional", text: "Enterprise-grade craft and delivery standards." },
  { icon: FileText, title: "Transparent", text: "Clear communication, milestones, and documentation." },
  { icon: Sparkles, title: "Innovative", text: "Modern stack and industry best practices." },
  { icon: Users, title: "Human-first", text: "Designed around real people, in every context." },
];

function About() {
  return (
    <section id="tentang" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              center={false}
              eyebrow="About"
              title="A coastal studio for enterprise transformation."
              desc="We combine the trust and rigor of government-grade delivery with the creativity of a premium digital agency — architected for scale, designed for delight."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="min-w-0 rounded-2xl glass p-5 shadow-soft">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  Vision
                </div>
                <p className="mt-2 break-words text-sm leading-relaxed text-foreground/80">
                  To be Indonesia&apos;s most trusted partner in digital transformation.
                </p>
              </div>
              <div className="min-w-0 rounded-2xl glass p-5 shadow-soft">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  Mission
                </div>
                <p className="mt-2 break-words text-sm leading-relaxed text-foreground/80">
                  Build secure, elegant, modern products that create real impact.
                </p>
              </div>
            </div>

            <div className="mt-6 min-w-0 rounded-2xl glass p-6 shadow-glass">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                Timeline
              </div>
              <ul className="mt-4 space-y-4">
                {[
                  ["2015", "Founded as a boutique web studio in Jakarta."],
                  ["2019", "Expanded into government digital services."],
                  ["2023", "Launched enterprise cloud & data practice."],
                ].map(([y, t]) => (
                  <li key={y} className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-9 w-14 shrink-0 place-items-center rounded-lg gradient-accent text-xs font-bold text-accent-foreground shadow-soft">
                      {y}
                    </span>
                    <span className="min-w-0 break-words text-sm text-foreground/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-[28px] border border-white/60 bg-white/70 p-7 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:shrink ${
                    i % 3 === 0 ? "rounded-tl-[8px]" : ""
                  } ${i % 3 === 1 ? "rounded-br-[8px]" : ""}`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl gradient-accent text-accent-foreground shadow-soft transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Large image */}
            <div className="relative mt-6 overflow-hidden rounded-[32px] border border-white/60 shadow-glass">
              <img
                src={p3}
                alt="Team collaborating on a digital product"
                className="h-64 w-full object-cover sm:h-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-primary-foreground">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
                    Studio
                  </div>
                  <div className="mt-1 font-display text-xl font-bold">
                    Jakarta · Bali · Remote worldwide
                  </div>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full glass-dark text-white">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Services
 * ──────────────────────────────────────────────────────────────── */

const services = [
  { icon: Globe, title: "Website & Portal", text: "Institutional sites and marketing portals with rock-solid accessibility.", size: "lg" },
  { icon: Smartphone, title: "Mobile Apps", text: "Native-quality iOS & Android apps for public services and business.", size: "sm" },
  { icon: Database, title: "Information Systems", text: "MIS, ERP, and internal platforms tailored to your workflow.", size: "md" },
  { icon: LayoutDashboard, title: "Dashboards & Data", text: "Real-time analytics and decision-support visualisations.", size: "md" },
  { icon: Cloud, title: "Cloud & Hosting", text: "Managed cloud infrastructure that scales with your growth.", size: "sm" },
  { icon: LifeBuoy, title: "Support & Maintenance", text: "24/7 monitoring, iteration, and technical operations.", size: "lg" },
];

function Services() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 gradient-ocean opacity-70" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end digital capability."
          desc="From strategy through launch and beyond, we deliver the full digital stack under one roof."
        />

        <div className="-mx-4 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:auto-rows-[minmax(220px,auto)] sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((s, i) => {
            const span =
              s.size === "lg"
                ? "lg:col-span-3"
                : s.size === "md"
                  ? "lg:col-span-2"
                  : "lg:col-span-1 lg:min-w-0";
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`${span} group relative w-[80%] shrink-0 snap-start overflow-hidden rounded-[28px] border border-white/60 bg-white/75 p-7 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 sm:w-auto sm:shrink`}
              >
                {/* gradient border wash */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-accent/20 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/25 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <motion.span
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      className="grid h-14 w-14 place-items-center rounded-2xl gradient-accent text-accent-foreground shadow-glass"
                    >
                      <s.icon className="h-6 w-6" />
                    </motion.span>
                    <span className="rounded-full border border-primary/10 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary/60">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <a
                    href="#kontak"
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-sm font-semibold text-secondary transition-colors hover:text-accent"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Portfolio (masonry)
 * ──────────────────────────────────────────────────────────────── */

const projects = [
  { img: p1, title: "Portal Kominfo", category: "Institutional", span: "lg:col-span-2 lg:row-span-2", aspect: "aspect-[4/5]" },
  { img: p2, title: "Layanan Publik App", category: "Mobile", span: "lg:col-span-2", aspect: "aspect-[16/10]" },
  { img: p3, title: "SIM Sekolah", category: "Systems", span: "lg:col-span-2", aspect: "aspect-[16/10]" },
  { img: p4, title: "Marketplace UMKM", category: "E-commerce", span: "lg:col-span-2 lg:row-span-2", aspect: "aspect-[4/5]" },
  { img: p5, title: "Manajemen Klinik", category: "Healthcare", span: "lg:col-span-2", aspect: "aspect-[16/10]" },
  { img: p6, title: "Dashboard Logistik", category: "Data", span: "lg:col-span-2", aspect: "aspect-[16/10]" },
];

const categories = ["All", "Institutional", "Mobile", "Systems", "E-commerce", "Healthcare", "Data"];

function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <section id="portofolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work."
          desc="A curated selection of institutional and enterprise projects delivered with care."
        />

        {/* Filter chips */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                active === c
                  ? "gradient-accent text-accent-foreground shadow-soft"
                  : "border border-primary/15 bg-white/70 text-primary/70 hover:text-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:auto-rows-[220px] sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`group relative aspect-[4/5] w-[80%] shrink-0 snap-start overflow-hidden rounded-[28px] border border-white/60 bg-primary shadow-glass sm:aspect-auto sm:w-auto sm:shrink ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-primary-foreground">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {p.category}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold sm:text-xl">{p.title}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full glass-dark text-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-45">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Why Us + Stats
 * ──────────────────────────────────────────────────────────────── */

const advantages = [
  { icon: Users, title: "Seasoned team", text: "Engineers & designers with deep enterprise experience.", pct: 96 },
  { icon: Shield, title: "Security first", text: "Audit-ready practices and encrypted-by-default systems.", pct: 99 },
  { icon: Layers, title: "Modern & responsive", text: "Clean UI, accessible, mobile-first.", pct: 94 },
  { icon: Headphones, title: "Post-launch support", text: "Continuous care and iteration after go-live.", pct: 98 },
];

function WhyUs() {
  return (
    <section id="keunggulan" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 gradient-ocean opacity-60" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Craft, care, and continuity — at enterprise scale."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative flex items-start gap-5 overflow-hidden rounded-[28px] border border-white/60 bg-white/75 p-6 shadow-glass backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/20 blur-3xl" />
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-accent text-accent-foreground shadow-soft">
                <a.icon className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-primary">{a.title}</h3>
                  <span className="text-sm font-bold text-secondary">{a.pct}%</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-primary/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${a.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full gradient-accent"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const bigStats = [
  { value: 120, suffix: "+", label: "Projects delivered", icon: Rocket },
  { value: 60, suffix: "+", label: "Happy clients", icon: Users },
  { value: 10, suffix: "+", label: "Years experience", icon: Award },
  { value: 98, suffix: "%", label: "Client satisfaction", icon: Sparkles },
];

function Stats() {
  return (
    <section className="relative -mt-10 pb-16">
      <WaveDivider from="var(--surface)" to="var(--background)" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {bigStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-[22px] border border-white/60 bg-white/80 p-4 shadow-glass backdrop-blur-md sm:aspect-auto sm:rounded-[26px] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/25 blur-2xl" />
              <s.icon className="h-5 w-5 text-secondary sm:h-6 sm:w-6" />
              <div>
                <div className="font-display text-3xl font-bold leading-none text-primary sm:mt-3 sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Process
 * ──────────────────────────────────────────────────────────────── */

const steps = [
  { n: "01", title: "Discovery", text: "Understand goals, users, and scope.", icon: Search },
  { n: "02", title: "Strategy", text: "Architecture, timeline, and cost planning.", icon: Lightbulb },
  { n: "03", title: "Design", text: "UX flows, systems, and premium visuals.", icon: Palette },
  { n: "04", title: "Build", text: "Iterative development with weekly reviews.", icon: Code2 },
  { n: "05", title: "Launch", text: "Managed deployment and team enablement.", icon: Rocket },
  { n: "06", title: "Support", text: "Continuous care and long-term evolution.", icon: Headphones },
];

function Process() {
  return (
    <section id="proses" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Process"
          title="A transparent journey — from brief to launch."
          desc="Six carefully orchestrated stages that keep your project on time, on scope, and on brand."
        />

        <div className="relative mt-16">
          {/* horizontal connector line (desktop) */}
          <div className="pointer-events-none absolute inset-x-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent lg:block" />

          {/* Desktop: 6-column grid */}
          <ol className="hidden lg:grid lg:grid-cols-6 lg:gap-5">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* node */}
                <div className="relative z-10 flex h-[104px] w-[104px] items-center justify-center rounded-full border-4 border-white shadow-glass transition-transform duration-500 group-hover:-translate-y-1 gradient-ocean">
                  <s.icon className="relative h-10 w-10 text-black drop-shadow-md" strokeWidth={2.2} />
                  <span className="absolute -inset-2 rounded-full border border-accent/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/50 bg-white/90 text-[10px] font-bold text-primary shadow-sm">
                    {s.n}
                  </span>
                </div>

                <div className="mt-6 w-full rounded-2xl border border-white/60 bg-white/70 px-4 py-5 shadow-glass/60 backdrop-blur-md transition-all duration-500 group-hover:border-accent/50 group-hover:bg-white/90">
                  <h3 className="font-display text-base font-bold text-primary">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* Mobile / tablet: horizontal snap scroller */}
          <div className="lg:hidden -mx-4 sm:-mx-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ol className="flex snap-x snap-mandatory gap-4 px-4 sm:px-6">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative w-[240px] shrink-0 snap-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white shadow-glass gradient-ocean">
                      <s.icon className="relative h-7 w-7 text-black drop-shadow" strokeWidth={2.2} />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/50 bg-white/90 text-[9px] font-bold text-primary shadow-sm">
                        {s.n}
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/60 to-transparent" />
                  </div>
                  <div className="mt-4 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-glass backdrop-blur-md">
                    <h3 className="font-display text-base font-bold text-primary">{s.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Testimonials carousel
 * ──────────────────────────────────────────────────────────────── */

const testimonials = [
  {
    name: "Surya Aditama",
    role: "Head of IT, Dinas Kominfo",
    quote:
      "SagaraStudio delivered a portal that meets our stringent government standards and remains a pleasure to use for our staff.",
    initials: "SA",
  },
  {
    name: "Ratih Pratiwi",
    role: "Director, PT Mitra Andalan",
    quote:
      "Clear communication and premium execution. Our internal systems are dramatically more efficient and auditable now.",
    initials: "RP",
  },
  {
    name: "Hendra Wijaya",
    role: "Principal, SMA Negeri 1",
    quote:
      "The school MIS transformed how our teachers, parents, and administration collaborate. A truly enterprise-grade product.",
    initials: "HW",
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="testimoni" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 gradient-ocean opacity-60" />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices from the ocean of our clients."
        />

        <div className="relative mt-14 h-[320px] sm:h-[280px]">
          {testimonials.map((t, i) => {
            const offset = (i - idx + testimonials.length) % testimonials.length;
            const active = offset === 0;
            return (
              <motion.figure
                key={t.name}
                animate={{
                  x: `${(offset - 1) * 4}%`,
                  scale: active ? 1 : 0.94,
                  opacity: active ? 1 : 0.35,
                  zIndex: active ? 10 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-x-0 mx-auto max-w-2xl rounded-[32px] border border-white/60 bg-white/85 p-8 shadow-glass backdrop-blur-md sm:p-10"
              >
                <Quote className="h-10 w-10 text-accent/50" />
                <blockquote className="mt-4 font-display text-lg leading-relaxed text-primary sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-accent text-sm font-bold text-accent-foreground shadow-soft">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-8 gradient-accent" : "w-2 bg-primary/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  CTA
 * ──────────────────────────────────────────────────────────────── */

function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] gradient-hero p-10 shadow-glass sm:p-16">
          {/* floating shapes */}
          <div className="pointer-events-none absolute -left-16 top-6 h-56 w-56 rounded-[45%_55%_50%_50%] bg-accent/25 blur-2xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[oklch(0.55_0.14_235/0.35)] blur-3xl" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-10 top-10 hidden h-16 w-16 rounded-2xl glass-dark md:block"
          />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-16 hidden h-10 w-10 rounded-full glass-dark md:block"
          />

          {/* subtle waves */}
          <svg
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-white/10"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C240,20 480,110 720,70 C960,30 1200,90 1440,60 L1440,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>

          <div className="relative mx-auto max-w-3xl text-center text-primary-foreground">
            <Eyebrow>Ready to sail?</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                extraordinary
              </span>{" "}
              together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              A free 30-minute consultation with our senior team — no strings attached.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-6 text-primary shadow-glass hover:bg-white/90"
              >
                <a href="#kontak">
                  Book Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/30 bg-white/10 px-6 text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                <a href="#portofolio">Explore Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Contact
 * ──────────────────────────────────────────────────────────────── */

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Message sent. Our team will reach out shortly.");
  };
  return (
    <section id="kontak" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-[36px] border border-white/60 bg-white/80 shadow-glass backdrop-blur-md">
          <div className="grid lg:grid-cols-12">
            <div className="relative overflow-hidden gradient-hero p-10 text-primary-foreground lg:col-span-5 lg:p-12">
              <div className="pointer-events-none absolute inset-0 opacity-30 gradient-mesh" />
              <div className="relative">
                <Eyebrow>Contact</Eyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                  Set sail on your next digital chapter.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                  Tell us about your project — we&apos;ll respond within one business day with a
                  clear proposal and next steps.
                </p>
                <ul className="mt-10 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl glass-dark">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-white/60">Email</div>
                      <div className="text-sm font-semibold">hello@sagarastudio.id</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl glass-dark">
                      <PhoneCall className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-white/60">
                        WhatsApp
                      </div>
                      <div className="text-sm font-semibold">+62 812 3456 7890</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl glass-dark">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-white/60">Studio</div>
                      <div className="text-sm font-semibold">
                        Jl. Inovasi No. 12, Jakarta Selatan
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <form onSubmit={onSubmit} className="p-10 lg:col-span-7 lg:p-12">
              <h3 className="font-display text-2xl font-bold text-primary">Start a conversation</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Share a few details and we&apos;ll get back to you shortly.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Your name" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Organisation</Label>
                  <Input id="org" name="org" placeholder="Company / institution" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input id="phone" name="phone" placeholder="08xx" className="rounded-xl" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Project brief</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="rounded-xl"
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="mt-8 h-12 w-full rounded-full gradient-accent text-accent-foreground shadow-glass sm:w-auto sm:px-8"
              >
                {submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <MessageSquare className="ml-1.5 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Footer
 * ──────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* wave top */}
      <svg
        className="absolute inset-x-0 top-0 h-16 w-full -translate-y-px text-primary"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,110 480,0 720,50 C960,110 1200,20 1440,60 L1440,0 L0,0 Z"
          fill="var(--background)"
        />
        <path
          d="M0,80 C240,20 480,110 720,60 C960,10 1200,80 1440,50 L1440,0 L0,0 Z"
          fill="var(--surface)"
          opacity="0.35"
        />
      </svg>

      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 pt-32 pb-10 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-accent text-accent-foreground shadow-glass">
                <WavesIcon className="h-5 w-5" />
              </span>
              <div className="font-display text-lg font-bold">SagaraStudio</div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              A coastal-tech digital agency crafting elegant, enterprise-grade digital experiences
              for governments, institutions, and modern businesses.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/15"
                  aria-label="Social link"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                Navigate
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.slice(0, 5).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/80 hover:text-accent">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                Services
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.slice(0, 5).map((s) => (
                  <li key={s.title} className="text-white/80">
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                Contact
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                <li>hello@sagarastudio.id</li>
                <li>+62 812 3456 7890</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
              Newsletter
            </div>
            <p className="mt-4 text-sm text-white/70">
              Field notes from the studio — thoughtful, occasional, never spam.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Subscribed — welcome aboard.");
                (e.target as HTMLFormElement).reset();
              }}
              className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur"
            >
              <input
                required
                type="email"
                placeholder="you@domain.com"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button className="gradient-accent px-4 text-sm font-semibold text-accent-foreground">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <div>© {new Date().getFullYear()} SagaraStudio. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────
 *  Page composition
 * ──────────────────────────────────────────────────────────────── */

export function LandingPage() {
  return (
    <div className="relative overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Stats />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default LandingPage;