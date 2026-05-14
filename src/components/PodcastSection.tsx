import Image from "next/image";
import Link from "next/link";

export default function PodcastSection() {
  return (
    <>
      <section className="bg-[var(--bg-primary)] px-6 py-16 transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto rounded-2xl overflow-hidden border border-[var(--border)] flex flex-col md:flex-row md:h-[260px]">
          <div className="relative w-full h-[200px] md:w-[25%] md:h-full bg-[#111111] shrink-0 overflow-hidden">
            <Image
              src="/podcastHost.png"
              alt="Host do Podcast Na Pista"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-top"
            />
          </div>

          <Link
            href="/categoria/podcast"
            className="group flex flex-col justify-center flex-1 px-8 py-10 md:px-12 md:py-0 bg-[var(--accent)] no-underline transition-colors duration-200 hover:bg-[var(--accentH)] gap-2"
          >
            <span
              className="text-white font-extrabold leading-tight"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
            >
              Ouça agora nossos podcasts
            </span>

            <span className="mt-2 inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase border-b border-white/50 pb-0.5 w-fit transition-transform duration-200 group-hover:translate-x-1">
              Ver todos os episódios →
            </span>
          </Link>
        </div>
      </section>

      <div className="h-px bg-[var(--border)] max-w-[1440px] mx-auto" />
    </>
  );
}
