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
  Building2,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroImg from "@/assets/hero-dashboard.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#proses", label: "Proses" },
  { href: "#kontak", label: "Kontak" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md shadow-soft"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-hero text-primary-foreground shadow-soft">
            <Building2 className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-primary">SagaraStudio</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Digital Agency
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" className="text-foreground/80 hover:text-accent">
            <a href="#kontak">Hubungi Kami</a>
          </Button>
          <Button asChild className="gradient-accent text-accent-foreground shadow-soft hover:opacity-95">
            <a href="#kontak">
              Konsultasi Gratis <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background/80 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full gradient-accent text-accent-foreground">
              <a href="#kontak" onClick={() => setOpen(false)}>
                Konsultasi Gratis
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
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

const stats = [
  { value: 50, suffix: "+", label: "Proyek Selesai" },
  { value: 20, suffix: "+", label: "Instansi & Perusahaan" },
  { value: 24, suffix: "/7", label: "Layanan Dukungan" },
  { value: 99, suffix: "%", label: "Kepuasan Klien" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,oklch(0.55_0.21_264/0.18),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.92 0.012 255) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.92 0.012 255) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 75%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-secondary backdrop-blur">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-3 w-3" />
              </span>
              Dipercaya instansi pemerintah & perusahaan
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
              Membangun Solusi Digital yang{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Andal dan Terpercaya
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              SagaraStudio membantu instansi dan bisnis melakukan transformasi digital melalui
              aplikasi, website, dan sistem informasi modern — dirancang dengan standar enterprise.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="gradient-accent h-12 px-6 text-accent-foreground shadow-soft hover:opacity-95"
              >
                <a href="#kontak">
                  Konsultasi Gratis <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-border bg-background px-6 text-primary hover:bg-muted"
              >
                <a href="#portofolio">Lihat Portofolio</a>
              </Button>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-primary sm:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative lg:col-span-6"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] gradient-hero opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elev">
              <img
                src={heroImg}
                alt="Dashboard sistem informasi modern"
                width={1280}
                height={960}
                className="h-auto w-full"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-border bg-background/95 p-3.5 shadow-elev backdrop-blur md:flex"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-success/15 text-success">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-medium text-muted-foreground">Sertifikasi</div>
                <div className="text-sm font-semibold text-primary">Keamanan ISO-Ready</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -top-5 -right-5 hidden items-center gap-3 rounded-xl border border-border bg-background/95 p-3.5 shadow-elev backdrop-blur md:flex"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-medium text-muted-foreground">Uptime</div>
                <div className="text-sm font-semibold text-primary">99.9% Stabil</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <div className="mt-20 border-t border-border pt-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Dipercaya oleh instansi pemerintah, sekolah, UMKM & perusahaan
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
            {["Dinas Kominfo", "BUMD Jaya", "SMA Negeri 1", "Koperasi Mitra", "PT Andalan", "Yayasan Cipta"].map(
              (n) => (
                <div
                  key={n}
                  className="text-center text-sm font-semibold tracking-tight text-muted-foreground"
                >
                  {n}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent`}
      >
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{desc}</p>
      )}
    </div>
  );
}

const values = [
  { icon: Shield, title: "Profesional", text: "Tim berpengalaman dengan standar pengerjaan enterprise." },
  { icon: FileText, title: "Transparan", text: "Komunikasi jelas, dokumentasi lengkap, milestone terukur." },
  { icon: Sparkles, title: "Inovatif", text: "Teknologi modern dan praktik terbaik industri terkini." },
  { icon: Users, title: "Layanan Publik", text: "Berorientasi pada kebutuhan masyarakat dan instansi." },
  { icon: Database, title: "Keamanan Data", text: "Enkripsi, audit, dan kepatuhan standar keamanan." },
];

function About() {
  return (
    <section id="tentang" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              center={false}
              eyebrow="Tentang Kami"
              title="Mitra digital untuk instansi dan bisnis modern"
              desc="SagaraStudio adalah agency teknologi yang fokus membangun solusi digital terpercaya — dari portal instansi hingga sistem informasi internal yang kompleks."
            />
            <div className="mt-8 grid gap-4">
              <Card className="rounded-xl border-border p-5 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">Visi</div>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                  Menjadi mitra transformasi digital terpercaya bagi instansi dan bisnis di Indonesia.
                </p>
              </Card>
              <Card className="rounded-xl border-border p-5 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">Misi</div>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                  Menghadirkan produk digital yang aman, modern, dan berdampak — didukung tim ahli
                  serta proses kerja yang transparan.
                </p>
              </Card>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="group h-full rounded-xl border-border p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elev">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-primary">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Globe,
    title: "Website Instansi",
    text: "Portal resmi yang aksesibel, cepat, dan sesuai standar pemerintah.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    text: "Aplikasi Android & iOS untuk layanan publik atau bisnis Anda.",
  },
  {
    icon: Database,
    title: "Sistem Informasi",
    text: "SIM, ERP, dan sistem internal terintegrasi sesuai workflow Anda.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Data",
    text: "Visualisasi data dan dashboard pengambilan keputusan real-time.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    text: "Pemeliharaan rutin, monitoring, dan dukungan teknis 24/7.",
  },
  {
    icon: Cloud,
    title: "Cloud & Hosting",
    text: "Integrasi cloud, hosting terkelola, dan infrastruktur skalabel.",
  },
];

function Services() {
  return (
    <section id="layanan" className="relative bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan"
          title="Solusi digital end-to-end"
          desc="Dari perencanaan hingga peluncuran, kami menyediakan layanan menyeluruh sesuai kebutuhan instansi maupun perusahaan."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Card className="group relative h-full overflow-hidden rounded-xl border-border bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elev">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-accent transition-transform duration-300 group-hover:scale-x-100" />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Pelajari <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const advantages = [
  { icon: Users, title: "Tim Berpengalaman", text: "Engineer & designer dengan jam terbang tinggi." },
  { icon: Shield, title: "Keamanan Terjamin", text: "Audit, enkripsi, dan best practice keamanan." },
  { icon: Layers, title: "Modern & Responsif", text: "UI bersih, aksesibel, dan mobile-friendly." },
  { icon: FileText, title: "Dokumentasi Lengkap", text: "Setiap modul terdokumentasi dengan rapi." },
  { icon: Headphones, title: "Support Pasca Peluncuran", text: "Dukungan teknis berkelanjutan." },
  { icon: Database, title: "Skalabel", text: "Arsitektur siap berkembang seiring kebutuhan." },
];

function Advantages() {
  return (
    <section id="keunggulan" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              center={false}
              eyebrow="Keunggulan"
              title="Alasan instansi memilih SagaraStudio"
              desc="Kami menggabungkan standar pengerjaan enterprise dengan pendekatan modern — memberikan rasa aman sekaligus pengalaman digital yang menyenangkan."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elev"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary/10 text-secondary">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display font-semibold text-primary">{a.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{a.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    img: p1,
    title: "Portal Dinas Kominfo",
    category: "Website Instansi",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
  },
  {
    img: p2,
    title: "Mobile App Layanan Publik",
    category: "Aplikasi Mobile",
    tech: ["React Native", "Node.js", "Firebase"],
  },
  {
    img: p3,
    title: "SIM Sekolah Terpadu",
    category: "Sistem Informasi",
    tech: ["Laravel", "MySQL", "Vue"],
  },
  {
    img: p4,
    title: "Marketplace UMKM",
    category: "E-Commerce",
    tech: ["Next.js", "Stripe", "Supabase"],
  },
  {
    img: p5,
    title: "Sistem Manajemen Klinik",
    category: "Healthcare",
    tech: ["React", "Express", "PostgreSQL"],
  },
  {
    img: p6,
    title: "Dashboard Logistik",
    category: "Data & Analytics",
    tech: ["TypeScript", "Mapbox", "Recharts"],
  },
];

function Portfolio() {
  return (
    <section id="portofolio" className="relative bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portofolio"
          title="Proyek pilihan kami"
          desc="Beberapa karya yang telah membantu instansi dan bisnis bertransformasi secara digital."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group overflow-hidden rounded-xl border border-border bg-background shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elev"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.category}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-primary">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-medium text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Konsultasi", text: "Memahami kebutuhan, sasaran, dan ruang lingkup." },
  { n: "02", title: "Perencanaan", text: "Arsitektur sistem, timeline, dan estimasi biaya." },
  { n: "03", title: "Pengembangan", text: "Implementasi iteratif dengan review berkala." },
  { n: "04", title: "Pengujian", text: "QA fungsional, performa, dan keamanan." },
  { n: "05", title: "Peluncuran", text: "Deployment terkelola dan pelatihan pengguna." },
  { n: "06", title: "Support", text: "Pemeliharaan, monitoring, dan pengembangan lanjutan." },
];

function Workflow() {
  return (
    <section id="proses" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Alur Kerja"
          title="Proses kami, transparan dari awal hingga akhir"
          desc="Enam tahap kerja yang menjamin proyek terlaksana terstruktur dan tepat waktu."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-xl border border-border bg-background p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elev"
            >
              <div className="font-display text-5xl font-extrabold text-accent/15">{s.n}</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Bapak Surya Aditama",
    role: "Kepala Bidang TI, Dinas Kominfo",
    quote:
      "SagaraStudio sangat profesional. Portal yang dibuat memenuhi standar pemerintahan dan mudah digunakan oleh staf kami.",
    initials: "SA",
  },
  {
    name: "Ibu Ratih Pratiwi",
    role: "Direktur, PT Mitra Andalan",
    quote:
      "Komunikasi jelas, hasil sesuai ekspektasi. Sistem internal kami sekarang jauh lebih efisien dan mudah diaudit.",
    initials: "RP",
  },
  {
    name: "Pak Hendra Wijaya",
    role: "Kepala Sekolah, SMA Negeri 1",
    quote:
      "SIM Sekolah yang dikembangkan membantu administrasi dan komunikasi guru–orangtua menjadi sangat mudah.",
    initials: "HW",
  },
];

function Testimonials() {
  return (
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa kata klien kami"
          desc="Dipercaya oleh instansi pemerintah, lembaga pendidikan, dan perusahaan swasta."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card className="flex h-full flex-col rounded-xl border-border bg-background p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elev">
                <Quote className="h-8 w-8 text-accent/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-hero text-sm font-semibold text-primary-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Pesan terkirim. Tim kami akan menghubungi Anda segera.");
  };
  return (
    <section id="kontak" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-elev">
          <div className="grid lg:grid-cols-12">
            <div className="relative gradient-hero p-10 text-primary-foreground lg:col-span-5 lg:p-12">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 10%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                  Kontak
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                  Siap memulai transformasi digital Anda?
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                  Tim kami akan membantu menyusun solusi terbaik sesuai kebutuhan instansi atau
                  bisnis Anda. Konsultasi awal gratis.
                </p>
                <ul className="mt-10 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 backdrop-blur">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/60">Email</div>
                      <div className="text-sm font-semibold">halo@kabinetsengkuni.id</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 backdrop-blur">
                      <PhoneCall className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/60">WhatsApp</div>
                      <div className="text-sm font-semibold">+62 812 3456 7890</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 backdrop-blur">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/60">Alamat</div>
                      <div className="text-sm font-semibold">
                        Jl. Inovasi No. 12, Jakarta Selatan, Indonesia
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <form onSubmit={onSubmit} className="p-10 lg:col-span-7 lg:p-12">
              <h3 className="font-display text-2xl font-bold text-primary">Form Konsultasi</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Ceritakan kebutuhan Anda, kami akan merespons dalam 1×24 jam.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" name="name" required placeholder="Nama Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Instansi / Perusahaan</Label>
                  <Input id="org" name="org" placeholder="Nama instansi" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="email@domain.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">No. WhatsApp</Label>
                  <Input id="phone" name="phone" placeholder="08xx" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Kebutuhan / Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Ceritakan kebutuhan proyek Anda..."
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="mt-8 w-full gradient-accent text-accent-foreground shadow-soft sm:w-auto"
              >
                {submitting ? (
                  "Mengirim..."
                ) : (
                  <>
                    Kirim Pesan <MessageSquare className="ml-1.5 h-4 w-4" />
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

function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                <Building2 className="h-5 w-5" />
              </span>
              <div className="font-display text-base font-bold">SagaraStudio</div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Agency teknologi yang membangun aplikasi, website, dan sistem informasi modern untuk
              instansi pemerintah, UMKM, sekolah, dan perusahaan.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Navigasi
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.slice(0, 4).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/80 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Layanan
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.slice(0, 4).map((s) => (
                  <li key={s.title} className="text-white/80">{s.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Kontak
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                <li>halo@kabinetsengkuni.id</li>
                <li>+62 812 3456 7890</li>
                <li>Jakarta Selatan, ID</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} SagaraStudio. All rights reserved.</div>
          <div>Built with care for Indonesia&apos;s digital future.</div>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Portfolio />
        <Workflow />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}