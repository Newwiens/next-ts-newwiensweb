import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-foreground text-background"
    >
      <div className="site-container relative flex min-h-[480px] flex-col justify-between pt-20 pb-8">
        {/* Naam en functie */}
        <div className="relative z-10 flex items-start gap-8">
          <p className="mt-3 shrink-0 text-sm leading-tight">
            Web <br />
            designer <br />& developer
          </p>

          <h1 className="flex w-fit flex-col text-center text-[150px] leading-[0.75] font-black tracking-tighter uppercase">
            <span>Thang</span>
            <span>Nguyen</span>
          </h1>
        </div>

        {/* Profielfoto */}
        <div
          className="
  pointer-events-none absolute bottom-0 z-20
  left-160 
  h-[420px] w-[420px] overflow-hidden
"
        >
          <Image
            src="/images/profile/my-photo.png"
            alt="Thang Nguyen"
            fill
            sizes="420px"
            className="origin-top scale-125 object-contain object-top"
            priority
          />
        </div>

        {/* Beschrijving en CTA */}
        <div className="relative z-30 max-w-[320px]">
          <p className="mb-5 text-base leading-tight">
            I design & build modern websites that help businesses stand out.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 font-semibold"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-300 text-2xl text-black">
              →
            </span>
            Work with me
          </Link>
        </div>
      </div>
    </section>
  );
}
