export default function VideoSection() {
  return (
    <>
      <section className="bg-[var(--bg-primary)] px-6 py-16 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto">
          <iframe
            className="w-full aspect-video rounded-2xl border border-[var(--border)]"
            src="https://www.youtube.com/embed/JfkQNn1ty3M"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <span className="text-[var(--text-secondary)] text-base mt-2 block text-center">
            FONTE: ONSV.ORG
          </span>
        </div>
      </section>

      <div className="h-px bg-[var(--border)] max-w-[1280px] mx-auto" />
    </>
  );
}
