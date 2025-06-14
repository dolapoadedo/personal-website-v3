'use client'

import { useEffect, useState, useRef } from 'react';
import { 
  ChevronDown,
  Brain,
  Bot,
  Settings,
  Workflow
} from "lucide-react";

// Custom hook for scroll animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible] as const;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [howItWorksRef, howItWorksVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 text-sm">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 transition-colors duration-300 py-3 px-4 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50">
        <div className="container mx-auto flex justify-between items-center">
          <button type="button" className="">
            <div className="flex items-center gap-2">
              <Brain className="text-indigo-400" size={20} />
              <span className="font-bold tracking-tight text-base">KogniLabs</span>
            </div>
          </button>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/dolapoadedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded text-sm"
                >
                  Book Call
                </a>
              </li>
            </ul>
          </nav>
          {/* Mobile CTA */}
          <div className="md:hidden">
            <a 
              href="https://calendly.com/dolapoadedo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded text-sm"
            >
              Book Call
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="top" className="pt-24 pb-16 px-4 min-h-screen flex items-center relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight transition-all duration-600 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Your Partner in
                <span className="text-indigo-400 block sm:inline"> AI and Systems Automation</span>
              </h1>
              
              <div className={`mb-8 sm:mb-12 text-zinc-300 text-sm sm:text-base md:text-lg transition-all duration-600 ease-out delay-150 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="leading-relaxed">
                  We build hands-off growth systems – streamline your content with AI, automate your lead acquisition, & solve your project management woes.
                </p>
                <p className="mt-3 sm:mt-4 font-medium">
                  All with top talent from <span className="text-indigo-400">MIT</span>.
                </p>
              </div>
              <div className={`flex gap-3 sm:gap-4 justify-center flex-col sm:flex-row transition-all duration-600 ease-out delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <a 
                  href="https://calendly.com/dolapoadedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 sm:px-8 py-3 rounded transition-colors text-sm sm:text-base"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="#services"
                  className="border border-zinc-700 hover:border-indigo-500 text-zinc-100 font-medium px-6 sm:px-8 py-3 rounded transition-colors text-sm sm:text-base"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
            <ChevronDown className="w-6 h-6 text-zinc-400 animate-bounce" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 px-4 bg-zinc-900/50" ref={servicesRef}>
          <div className="container mx-auto">
            <div className={`max-w-3xl mx-auto mb-8 sm:mb-12 text-center transition-all duration-500 ease-out ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 tracking-tight">Our Services</h2>
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
                From AI strategy to custom development and seamless integration – we deliver intelligent automation solutions that transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className={`border border-zinc-800 p-6 sm:p-8 hover:border-indigo-500 transition-all duration-400 ease-out group ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: servicesVisible ? '100ms' : '0ms' }}>
                <div className="text-indigo-400 mb-4 sm:mb-6">
                  <Brain size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">AI Strategy Consulting</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  We help you identify the best AI solutions for your business needs, creating strategic roadmaps that maximize ROI and competitive advantage.
                </p>
              </div>
              
              <div className={`border border-zinc-800 p-6 sm:p-8 hover:border-indigo-500 transition-all duration-400 ease-out group ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: servicesVisible ? '150ms' : '0ms' }}>
                <div className="text-indigo-400 mb-4 sm:mb-6">
                  <Bot size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Custom AI Development</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Our experts build tailored AI solutions to automate your processes, from machine learning models to intelligent chatbots and decision systems.
                </p>
              </div>

              <div className={`border border-zinc-800 p-6 sm:p-8 hover:border-indigo-500 transition-all duration-400 ease-out group ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: servicesVisible ? '200ms' : '0ms' }}>
                <div className="text-indigo-400 mb-4 sm:mb-6">
                  <Settings size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">AI Integration</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Seamlessly integrate AI technologies into your existing systems without disrupting operations, ensuring smooth adoption and maximum efficiency.
                </p>
              </div>

              <div className={`border border-zinc-800 p-6 sm:p-8 hover:border-indigo-500 transition-all duration-400 ease-out group ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: servicesVisible ? '250ms' : '0ms' }}>
                <div className="text-indigo-400 mb-4 sm:mb-6">
                  <Workflow size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Automation Integration</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Enhance your business with intelligent automation—streamlining repetitive tasks, reducing errors, and boosting productivity with cutting-edge automation tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="about" className="py-20 px-6" ref={howItWorksRef}>
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center transition-all duration-500 ease-out ${
                howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                How it Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`text-center transition-all duration-400 ease-out ${
                  howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: howItWorksVisible ? '100ms' : '0ms' }}>
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Onboarding</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Onboarding takes less than 30 minutes. We can set one up as soon as tomorrow.
                  </p>
                </div>
                
                <div className={`text-center transition-all duration-400 ease-out ${
                  howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: howItWorksVisible ? '150ms' : '0ms' }}>
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Plan</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We will architect a solution, create a roadmap, and clear timeline to deliver your system with the best possible experience.
                  </p>
                </div>

                <div className={`text-center transition-all duration-400 ease-out ${
                  howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: howItWorksVisible ? '200ms' : '0ms' }}>
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Updates + Delivery</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We provide a weekly 30 minute consultation for brainstorming, discussion, and any re-prioritization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-zinc-900/50" ref={contactRef}>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight transition-all duration-500 ease-out ${
                contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>Ready to Automate Your Growth?</h2>
              <p className={`text-zinc-400 text-base mb-12 transition-all duration-500 ease-out delay-100 ${
                contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Let&apos;s discuss how AI and automation can streamline your operations, boost productivity, and scale your business effortlessly.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 ease-out delay-200 ${
                contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <a 
                  href="https://calendly.com/dolapoadedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 text-base transition-colors inline-flex items-center justify-center rounded"
                >
                  Schedule a Call
                </a>
                <a 
                  href="mailto:dolapo@kognilabs.com" 
                  className="border border-zinc-700 hover:border-indigo-500 text-zinc-100 font-medium px-8 py-4 text-base transition-colors inline-flex items-center justify-center rounded"
                >
                  dolapo@kognilabs.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="text-indigo-400" size={20} />
              <span className="font-bold tracking-tight">KogniLabs</span>
            </div>
            <div className="text-xs text-zinc-400">
              © 2025 KogniLabs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
