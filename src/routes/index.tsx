import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SagaraStudio — Agency Teknologi & Solusi Digital" },
      { name: "description", content: "SagaraStudio membangun aplikasi, website, dan sistem informasi modern untuk instansi pemerintah, UMKM, sekolah, dan perusahaan." },
      { property: "og:title", content: "SagaraStudio — Agency Teknologi & Solusi Digital" },
      { property: "og:description", content: "Transformasi digital yang andal dan terpercaya untuk instansi dan bisnis." },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
