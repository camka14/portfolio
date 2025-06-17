import React from 'react';

const PersonalWebsite = () => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <nav className="flex flex-col md:flex-row justify-between items-center p-4 md:px-8 gap-4 md:gap-0">
          <div className="nav-brand">
            <h2 className="text-xl font-bold">Samuel Razumovskiy</h2>
          </div>
          <ul className="flex list-none gap-4 md:gap-8">
            <li><a href="#about" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">About</a></li>
            <li><a href="#app" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">App</a></li>
            <li><a href="#sdk" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">SDK Work</a></li>
            <li><a href="#contact" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-32 pb-20 px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Samuel Razumovskiy</h1>
            <h3 className="text-xl md:text-2xl mb-4">Kotlin Multiplatform Developer & Open Source Contributor</h3>
            <p className="text-lg mb-8">Building cross-platform solutions and contributing to the Appwrite ecosystem</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#app" className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700">View My App</a>
              <a href="https://github.com/camka14" className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-600">GitHub Profile</a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/path-to-your-photo.jpg" alt="Samuel Razumovskiy" className="w-72 h-72 rounded-full object-cover border-4 border-white/20" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">
                I'm a passionate developer specializing in Kotlin Multiplatform development and 
                open source contributions. My work focuses on creating efficient cross-platform 
                solutions and expanding the Appwrite ecosystem through SDK development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Kotlin Multiplatform</li>
                <li>Android & iOS Development</li>
                <li>Compose Multiplatform</li>
                <li>Next.js & React</li>
                <li>Appwrite Integration</li>
                <li>Open Source Contribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">My MVP App</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kotlin Multiplatform MVP Application</h3>
              <p className="text-lg mb-6">
                A cross-platform mobile application built with Kotlin Multiplatform, 
                demonstrating modern mobile development principles with shared code 
                architecture between Android and iOS platforms.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cross-platform compatibility (Android & iOS)</li>
                  <li>Compose Multiplatform for shared UI components</li>
                  <li>Clean architecture with commonMain and platform-specific modules</li>
                  <li>Modern Kotlin ecosystem integration</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Technology Stack:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Kotlin Multiplatform</li>
                  <li>Compose Multiplatform</li>
                  <li>SwiftUI (iOS specific)</li>
                  <li>Android Jetpack Compose</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://github.com/camka14/mvp-app" className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700">
                  View Source Code
                </a>
                <a href="#demo" className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white">Live Demo</a>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <img src="/path-to-android-screenshot.png" alt="Android App Screenshot" className="w-full rounded-lg shadow-lg" />
                  <p className="mt-2 font-medium">Android Version</p>
                </div>
                <div className="text-center">
                  <img src="/path-to-ios-screenshot.png" alt="iOS App Screenshot" className="w-full rounded-lg shadow-lg" />
                  <p className="mt-2 font-medium">iOS Version</p>
                </div>
                <div className="text-center md:col-span-2 lg:col-span-1 xl:col-span-2">
                  <video controls poster="/path-to-video-thumbnail.png" className="w-full rounded-lg shadow-lg">
                    <source src="/path-to-app-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="mt-2 font-medium">App Demo Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Generator Section */}
      <section id="sdk" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Appwrite SDK Generator Contribution</h2>
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Kotlin Multiplatform SDK for Appwrite</h3>
              <p className="text-lg max-w-4xl mx-auto">
                Contributing to the Appwrite ecosystem by developing and maintaining 
                the Kotlin Multiplatform SDK, enabling developers to use Appwrite 
                services across multiple Kotlin platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">SDK Project: "sdk-for-kmp"</h4>
                <p className="mb-4">
                  An unofficial but significant contribution to the Appwrite ecosystem, 
                  providing Kotlin Multiplatform support for Appwrite's backend services.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>GPL-3.0 Licensed</li>
                  <li>Modern Kotlin libraries integration</li>
                  <li>Cross-platform compatibility</li>
                  <li>Active maintenance and updates</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">Technical Implementation</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Kotlinx Serialization:</strong> JSON handling and data serialization</li>
                  <li><strong>Ktor:</strong> HTTP client functionality for API communication</li>
                  <li><strong>Kotlinx Coroutines:</strong> Asynchronous operations management</li>
                  <li><strong>Kotlinx DateTime:</strong> Date and time operations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">Impact & Benefits</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Expands Appwrite's platform support</li>
                  <li>Benefits the Kotlin developer community</li>
                  <li>Enables cross-platform backend integration</li>
                  <li>Reduces development time for Kotlin projects</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://github.com/camka14/sdk-for-kmp" className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700">
                  View SDK Repository
                </a>
                <a href="#pull-request-link" className="inline-block py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
                  View Pull Request
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-lg mb-6">
                Interested in collaboration or discussing Kotlin Multiplatform development? 
                Feel free to reach out!
              </p>
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> samuel.razumovskiy@gmail.com
                </div>
                <div>
                  <strong>GitHub:</strong> 
                  <a href="https://github.com/camka14" className="text-blue-600 hover:text-blue-800 ml-2">github.com/camka14</a>
                </div>
                <div>
                  <strong>Location:</strong> [Your Location]
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <textarea placeholder="Your Message" rows={5} required className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-6 rounded-md font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="max-w-6xl mx-auto px-5">
          <p className="mb-4">&copy; 2025 Samuel Razumovskiy. Built with React and Next.js</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/camka14" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
            <a href="#linkedin" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
            <a href="#twitter" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
