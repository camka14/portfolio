import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "./components/ContactForm";
import InteractiveHeader from "./components/InteractiveHeader";
import PortfolioMotion from "./components/PortfolioMotion";

export const metadata: Metadata = {
  title: "Samuel Razumovskiy | Product Builder",
  description:
    "Samuel Razumovskiy builds production web, mobile, and AI-assisted products across BracketIQ, ProQuote, Kotlin Multiplatform, Next.js, and .NET.",
};

const craftItems = [
  "Kotlin Multiplatform",
  "Compose Multiplatform",
  "Next.js",
  "React",
  "C# and .NET",
  "Stripe",
  "Appwrite",
  "CI/CD",
];

const accordionItems = [
  {
    title: "Event operations",
    copy: "Registration, schedules, brackets, teams, and payments for sports organizers.",
    image: "/images/projects/org_home_web.png",
  },
  {
    title: "Mobile parity",
    copy: "Shared logic with native-feeling Android and iOS surfaces for participants.",
    image: "/images/projects/discover_screen_mobile.png",
  },
  {
    title: "Quote workflows",
    copy: "Structured intake and fast estimate paths for contractors and field teams.",
    image: "/images/profile/profile.jpg",
  },
];

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-zinc-900/10 bg-white/70 py-5 dark:border-white/10 dark:bg-zinc-950/70">
      <div className="marquee-track flex w-max gap-10 text-sm font-medium text-zinc-600 dark:text-zinc-300">
        {[...craftItems, ...craftItems].map((item, index) => (
          <span key={`${item}-${index}`} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PersonalWebsite() {
  return (
    <PortfolioMotion>
      <div className="min-h-dvh overflow-x-hidden bg-[#f5f7ef] text-zinc-950 selection:bg-lime-300 selection:text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <InteractiveHeader />

        <main id="main-content" className="w-full max-w-full overflow-x-hidden">
          <section className="relative isolate min-h-[100dvh] px-5 pb-16 pt-28 sm:px-8 lg:pt-24">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(132,204,22,0.22),transparent_31%),radial-gradient(circle_at_10%_20%,rgba(39,39,42,0.12),transparent_26%)] dark:bg-[radial-gradient(circle_at_78%_18%,rgba(132,204,22,0.18),transparent_31%),radial-gradient(circle_at_10%_20%,rgba(244,244,245,0.08),transparent_26%)]"
            />
            <div className="mx-auto grid min-h-[calc(100dvh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.45fr_0.55fr]">
              <div className="max-w-6xl">
                <p className="mb-6 max-w-xl text-base font-medium text-zinc-600 dark:text-zinc-300">
                  Full-stack and cross-platform product engineering.
                </p>
                <h1 className="max-w-6xl text-[clamp(2.9rem,6.8vw,5.8rem)] font-semibold leading-[0.95] text-zinc-950 dark:text-zinc-50">
                  <span data-hero-word className="inline-block">
                    I build
                  </span>{" "}
                  <span data-hero-word className="inline-block">
                    products
                  </span>{" "}
                  <span
                    aria-hidden="true"
                    className="motion-image inline-block h-12 w-28 translate-y-1 rounded-full bg-cover bg-center align-middle ring-2 ring-lime-300/80 sm:h-14 sm:w-36"
                    style={{ backgroundImage: "url('/images/projects/org_home_web.png')" }}
                  />{" "}
                  <span data-hero-word className="inline-block">
                    for web and mobile.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  Recent work spans BracketIQ, ProQuote, Kotlin Multiplatform,
                  Next.js, and practical workflows that survive real users.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-lime-300 px-6 text-sm font-semibold text-zinc-950 transition duration-300 ease-out hover:bg-lime-200 active:translate-y-px"
                  >
                    View Projects
                  </a>
                  <a
                    href="https://github.com/camka14"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-950/20 bg-white/60 px-6 text-sm font-semibold text-zinc-950 backdrop-blur transition duration-300 ease-out hover:border-zinc-950 hover:bg-white active:translate-y-px dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-sm">
                <div className="motion-image group overflow-hidden rounded-[2rem] border border-zinc-950/10 bg-white/60 p-3 shadow-[0_30px_90px_rgba(39,39,42,0.18)] backdrop-blur dark:border-white/10 dark:bg-white/10">
                  <Image
                    src="/images/profile/profile.jpg"
                    alt="Samuel Razumovskiy"
                    width={720}
                    height={900}
                    priority
                    className="aspect-[4/5] w-full rounded-[1.45rem] object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </section>

          <Marquee />

          <section id="projects" className="px-5 py-24 sm:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-6xl">
                  Selected products with real distribution paths.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  The work is strongest where product design, architecture, payments,
                  and mobile delivery meet.
                </p>
              </div>

              <div className="mt-14 grid grid-flow-dense grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-rows-2">
                <article className="group motion-image overflow-hidden rounded-[1.5rem] border border-zinc-950/10 bg-white p-5 shadow-[0_24px_80px_rgba(39,39,42,0.12)] dark:border-white/10 dark:bg-white/10 lg:col-span-3 lg:row-span-2">
                  <div className="overflow-hidden rounded-[1rem] bg-zinc-100 dark:bg-zinc-900">
                    <Image
                      src="/images/projects/org_home_web.png"
                      alt="BracketIQ organization dashboard"
                      width={1919}
                      height={909}
                      className="w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold">BracketIQ Web</h3>
                    <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                      Tournament and league management for events, teams, schedules,
                      brackets, rentals, and payments.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href="https://bracket-iq.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                      >
                        Visit BracketIQ
                      </a>
                      <a
                        href="https://github.com/camka14/mvp-site"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-950/20 px-5 text-sm font-semibold text-zinc-950 transition hover:border-zinc-950 dark:border-white/20 dark:text-white dark:hover:border-white"
                      >
                        View Source
                      </a>
                    </div>
                  </div>
                </article>

                <article className="group motion-image overflow-hidden rounded-[1.5rem] border border-zinc-950/10 bg-[#e9f2d8] p-5 dark:border-white/10 dark:bg-lime-950/30 lg:col-span-3">
                  <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="overflow-hidden rounded-[1rem] bg-white p-2 dark:bg-zinc-900">
                        <Image
                          src="/images/projects/discover_screen_mobile.png"
                          alt="BracketIQ mobile discover screen"
                          width={1280}
                          height={2856}
                          className="w-full rounded-[0.75rem] transition duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="overflow-hidden rounded-[1rem] bg-white p-2 dark:bg-zinc-900">
                        <Image
                          src="/images/projects/schedule_mobile.png"
                          alt="BracketIQ mobile schedule screen"
                          width={1280}
                          height={2856}
                          className="w-full rounded-[0.75rem] transition duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">BracketIQ Mobile</h3>
                      <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                        Kotlin Multiplatform app with shared logic and native store
                        distribution for Android and iOS.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href="https://github.com/camka14/mvp-app"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                        >
                          View Source
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.razumly.mvp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center"
                        >
                          <Image
                            src="/images/buttons/googlePlay.svg"
                            alt="Get it on Google Play"
                            width={156}
                            height={46}
                            className="h-11 w-auto"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="motion-image rounded-[1.5rem] border border-zinc-950/10 bg-zinc-950 p-6 text-white dark:border-white/10 lg:col-span-2">
                  <h3 className="text-2xl font-semibold">ProQuote</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-300">
                    AI-assisted estimating for contractors, from intake to clear
                    quote output.
                  </p>
                  <a
                    href="https://pro-quote.razumly.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-lime-300 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200 active:translate-y-px"
                  >
                    Visit ProQuote
                  </a>
                </article>

                <article className="motion-image rounded-[1.5rem] border border-zinc-950/10 bg-white p-6 dark:border-white/10 dark:bg-white/10 lg:col-span-1">
                  <h3 className="text-2xl font-semibold">Stack</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    Web, mobile, backend, payments, and release pipelines.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="px-5 py-24 sm:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Product work across the full path.
              </h2>
              <div className="mt-10 flex flex-col overflow-hidden rounded-[1.5rem] border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-white/10 md:h-[28rem] md:flex-row">
                {accordionItems.map((item) => (
                  <article
                    key={item.title}
                    className="group relative isolate min-h-72 flex-1 overflow-hidden border-b border-zinc-950/10 transition-[flex] duration-500 ease-out last:border-b-0 hover:flex-[1.65] focus-within:flex-[1.65] dark:border-white/10 md:border-b-0 md:border-r md:last:border-r-0"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 34vw, 100vw"
                      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35 grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-55 group-hover:grayscale-0 dark:opacity-25"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-zinc-950/10" />
                    <div className="flex h-full flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-200">
                        {item.copy}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="px-5 py-24 sm:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                  Built for the parts users actually touch.
                </h2>
              </div>
              <div className="space-y-8">
                <p className="scrub-copy text-2xl leading-10 text-zinc-700 dark:text-zinc-300">
                  {"I build full-stack and cross-platform products with reliable user flows, mobile-first execution, maintainable architecture, and enough product judgment to keep the interface honest."
                    .split(" ")
                    .map((word, index) => (
                      <span data-scrub-word key={`${word}-${index}`} className="inline-block pr-2">
                        {word}
                      </span>
                    ))}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {craftItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-zinc-950/10 bg-white/70 px-4 py-3 text-sm font-medium text-zinc-800 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="px-5 py-24 sm:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-zinc-950/10 bg-white p-6 shadow-[0_24px_80px_rgba(39,39,42,0.10)] dark:border-white/10 dark:bg-white/10 md:grid-cols-[0.85fr_1.15fr] md:p-10">
              <div>
                <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                  Let&apos;s build the next product path.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  Send the product context, repo, or workflow problem. I&apos;ll
                  respond with the clearest next step.
                </p>
                <div className="mt-8 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <p>
                    <span className="font-semibold text-zinc-950 dark:text-white">Email:</span>{" "}
                    <a className="underline decoration-zinc-400 underline-offset-4" href="mailto:samuel.razumovskiy@gmail.com">
                      samuel.razumovskiy@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-950 dark:text-white">GitHub:</span>{" "}
                    <a
                      href="https://github.com/camka14"
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-zinc-400 underline-offset-4"
                    >
                      github.com/camka14
                    </a>
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="px-5 pb-10 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-zinc-950/10 pt-8 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Samuel Razumovskiy. Built with React and Next.js.</p>
            <div className="flex gap-5">
              <a href="https://github.com/camka14" className="transition hover:text-zinc-950 dark:hover:text-white">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/samuelraz/"
                className="transition hover:text-zinc-950 dark:hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </PortfolioMotion>
  );
}
