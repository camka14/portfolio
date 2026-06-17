import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "./components/ContactForm";
import InteractiveHeader from "./components/InteractiveHeader";
import PortfolioMotion from "./components/PortfolioMotion";

export const metadata: Metadata = {
  title: "Samuel Razumovskiy | Product Builder",
  description:
    "Samuel Razumovskiy builds BracketIQ across mvp-site and mvp-app, combining Next.js, Prisma, Stripe, Kotlin Multiplatform, and Compose Multiplatform.",
};

const craftItems = [
  "Next.js App Router",
  "Mantine UI",
  "Prisma",
  "Postgres",
  "Stripe",
  "Kotlin Multiplatform",
  "Compose Multiplatform",
  "Ktor client",
];

const accordionItems = [
  {
    title: "Organization operations",
    copy: "Facilities manage public pages, users, staff roles, fields, finance settings, and payments in mvp-site.",
    image: "/images/projects/org_home_web.png",
  },
  {
    title: "Schedules and brackets",
    copy: "Event pages cover leagues, tournaments, matches, divisions, scoring, standings, and field assignments.",
    image: "/images/projects/schedule_mobile.png",
  },
  {
    title: "Mobile companion",
    copy: "mvp-app brings search, event detail, teams, profile schedule, match detail, and chat flows into Kotlin Multiplatform.",
    image: "/images/projects/discover_screen_mobile.png",
  },
];

const webHighlights = [
  "Organization dashboards, public organization pages, staff roles, fields, finance settings, files, and documents.",
  "Event registration, league and tournament scheduling, bracket views, calendar views, scoring, divisions, and team compliance.",
  "Participant paths for discovery, teams, my schedule, public embeds, and payment-backed products or subscriptions.",
];

const mobileHighlights = [
  "Shared Compose Multiplatform code in mvp-app with Android and iOS targets.",
  "Mobile screens for event search, event detail, event create, organization detail, team management, match detail, chat, and profile schedule.",
  "Repository layer for events, teams, fields, billing, matches, users, images, sports, push notifications, and app updates.",
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
                  Recent work is centered on BracketIQ: a Next.js web platform in
                  mvp-site and a Kotlin Multiplatform mobile app in mvp-app.
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
                    className="aspect-[4/5] w-full rounded-[1.45rem] object-cover transition duration-700 ease-out group-hover:scale-105"
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
                  BracketIQ across web and mobile.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  The portfolio focuses on the actual BracketIQ repos: mvp-site for
                  facility and event operations, and mvp-app for participant mobile
                  workflows.
                </p>
              </div>

              <div className="mt-14 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
                <article className="group motion-image overflow-hidden rounded-[1.5rem] border border-zinc-950/10 bg-white p-5 shadow-[0_24px_80px_rgba(39,39,42,0.12)] dark:border-white/10 dark:bg-white/10">
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
                      mvp-site is the web platform for facilities, clubs, and event
                      organizers running multi-sport operations.
                    </p>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      {webHighlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

                <div className="grid items-start gap-5">
                  <article className="group motion-image overflow-hidden rounded-[1.5rem] border border-zinc-950/10 bg-[#e9f2d8] p-5 dark:border-white/10 dark:bg-lime-950/30">
                    <div className="grid gap-5 sm:grid-cols-[0.78fr_1.22fr] sm:items-center">
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
                          mvp-app is the Kotlin Multiplatform companion for BracketIQ,
                          sharing Compose Multiplatform code across Android and iOS.
                        </p>
                        <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                          {mobileHighlights.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-lime-300"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
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

                  <div className="grid items-start gap-5 sm:grid-cols-[2fr_1fr]">
                    <article className="motion-image rounded-[1.5rem] border border-zinc-950/10 bg-zinc-950 p-6 text-white dark:border-white/10">
                      <h3 className="text-2xl font-semibold">mvp-site</h3>
                      <p className="mt-3 text-base leading-7 text-zinc-300">
                        Next.js App Router app with Mantine UI, Prisma, Postgres,
                        Stripe, file routes, organization pages, public embeds, and
                        event scheduling surfaces.
                      </p>
                    </article>

                    <article className="motion-image rounded-[1.5rem] border border-zinc-950/10 bg-white p-6 dark:border-white/10 dark:bg-white/10">
                      <h3 className="text-2xl font-semibold">mvp-app</h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                        KMP project with shared composeApp code, Android target, iOS
                        framework targets, and an iosApp entry point.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 py-24 sm:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Product work across BracketIQ&apos;s full path.
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
                  {"I build the web and mobile pieces around real BracketIQ workflows: organization operations, event creation, schedules, brackets, scoring, teams, payments, documents, and participant mobile screens."
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
