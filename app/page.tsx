import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import InteractiveHeader from './components/InteractiveHeader';
import ContactForm from './components/ContactForm';

export const metadata: Metadata = {
  title: 'Samuel Razumovskiy - Portfolio',
  description:
    'Portfolio of Samuel Razumovskiy featuring BracketIQ web/mobile and ProQuote products.',
};

export default function PersonalWebsite() {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <InteractiveHeader />

      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-32 pb-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Samuel Razumovskiy</h1>
            <h3 className="text-xl md:text-2xl mb-4">
              C#/.NET/Kotlin Multiplatform Developer & Product Builder
            </h3>
            <p className="text-lg mb-8">
              Building BracketIQ and ProQuote across web and mobile, with a focus on practical,
              production-ready user workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href="https://github.com/camka14"
                target="_blank"
                rel="noreferrer"
                className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-600"
              >
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/profile/profile.jpg"
              alt="Samuel Razumovskiy"
              width={288}
              height={288}
              className="rounded-full object-cover border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 space-y-20">
          <h2 className="text-3xl font-bold text-center">Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h3 className="text-3xl font-bold">BracketIQ Web</h3>
              <p className="text-lg text-gray-700">
                Tournament and league management web platform for creating events, handling teams,
                scheduling games, and managing brackets in one place.
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-2">Stack</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Next.js + TypeScript</li>
                  <li>Appwrite backend services</li>
                  <li>Stripe payment flows</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://bracket-iq.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
                >
                  Visit bracket-iq.com
                </a>
                <a
                  href="https://github.com/camka14/mvp-site"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  View Source
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="/images/projects/org_home_web.png"
                alt="BracketIQ web dashboard screenshot"
                width={1919}
                height={909}
                className="w-full rounded-xl shadow-xl border border-gray-200"
                priority
              />
              <Image
                src="/images/projects/bracket_screenshot_web.png"
                alt="BracketIQ web bracket management screenshot"
                width={1919}
                height={906}
                className="w-full rounded-xl shadow-xl border border-gray-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 lg:order-2">
              <h3 className="text-3xl font-bold">BracketIQ Mobile (mvp-app)</h3>
              <p className="text-lg text-gray-700">
                Kotlin Multiplatform mobile app for BracketIQ with shared business logic and
                native experiences for Android and iOS.
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Kotlin Multiplatform shared architecture</li>
                  <li>Realtime event participation and scheduling views</li>
                  <li>Production app distribution pipelines for mobile stores</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/camka14/mvp-app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
                >
                  View Source
                </a>
              </div>
              <h4 className="text-xl font-semibold">Download</h4>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.razumly.mvp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/buttons/googlePlay.svg"
                    alt="Get it on Google Play"
                    width={200}
                    height={64}
                    className="h-16 w-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/app/razumly-mvp/id123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/buttons/appStore.svg"
                    alt="Download on the App Store"
                    width={200}
                    height={64}
                    className="h-16 w-auto"
                  />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:order-1">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                <Image
                  src="/images/projects/discover_screen_mobile.png"
                  alt="BracketIQ mobile discover screen screenshot"
                  width={1280}
                  height={2856}
                  className="w-full rounded-xl"
                />
                <p className="mt-3 text-center font-medium">Discover</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                <Image
                  src="/images/projects/schedule_mobile.png"
                  alt="BracketIQ mobile schedule screenshot"
                  width={1280}
                  height={2856}
                  className="w-full rounded-xl"
                />
                <p className="mt-3 text-center font-medium">Schedule</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h3 className="text-3xl font-bold">ProQuote</h3>
              <p className="text-lg text-gray-700">
                AI-assisted estimating platform focused on contractor workflows and fast,
                structured quote generation.
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-2">Focus Areas</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Project intake and structured scope capture</li>
                  <li>Live budget calculations and quote breakdowns</li>
                  <li>Clean handoff from estimate to final quote</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://pro-quote.razumly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
                >
                  Visit pro-quote.razumly.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-widest text-blue-100">Current Product</p>
              <h4 className="text-3xl font-bold mt-3">ProQuote</h4>
              <p className="mt-4 text-blue-50">
                Built for field teams and estimators who need a fast path from requirements to
                clear, professional quote output.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/15 p-4">
                  <p className="text-2xl font-bold">AI</p>
                  <p className="text-sm text-blue-100 mt-1">Estimate Assist</p>
                </div>
                <div className="rounded-lg bg-white/15 p-4">
                  <p className="text-2xl font-bold">Web</p>
                  <p className="text-sm text-blue-100 mt-1">Production Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">
                I build full-stack and cross-platform products with a focus on reliable user flows,
                mobile-first experiences, and maintainable architecture. My recent work centers on
                BracketIQ and ProQuote, plus open source contributions around Appwrite tooling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Kotlin Multiplatform</li>
                <li>Android & iOS Development</li>
                <li>Compose Multiplatform</li>
                <li>Next.js & React</li>
                <li>C#/.NET</li>
                <li>Appwrite Integration</li>
                <li>RESTful APIs</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
              <p className="text-lg mb-6">
                Interested in collaborating on web or mobile products? Reach out and let&apos;s
                talk.
              </p>
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> samuel.razumovskiy@gmail.com
                </div>
                <div>
                  <strong>GitHub:</strong>
                  <a
                    href="https://github.com/camka14"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 ml-2"
                  >
                    github.com/camka14
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="max-w-6xl mx-auto px-5">
          <p className="mb-4">&copy; 2026 Samuel Razumovskiy. Built with React and Next.js</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/camka14" className="text-gray-300 hover:text-white transition-colors">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samuelraz/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
