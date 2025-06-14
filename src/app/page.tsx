'use client'

import { useEffect, useState } from 'react';
import { 
  Zap, 
  Search, 
  Shield, 
  FileWarning, 
  Database,
  ChevronDown,
  Brain,
  Lightbulb,
  TrendingUp,
  Users,
  Bot,
  Settings,
  Workflow,
  Cpu
} from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 text-sm">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 transition-colors duration-300 py-4 px-6 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50">
        <div className="container mx-auto flex justify-between items-center">
          <button type="button" className="">
            <div className="flex items-center gap-2">
              <Brain className="text-indigo-400" size={24} />
              <span className="font-bold tracking-tight text-lg">KogniLabs</span>
            </div>
          </button>
          <nav>
            <ul className="flex gap-8">
              <li>
                                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/dolapoadedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="top" className="pt-32 pb-20 px-6 min-h-screen flex items-center relative">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Your Partner in
                <span className="text-indigo-400"> AI and Systems Automation</span>
              </h1>
              
              <div className={`mb-12 text-zinc-300 text-base md:text-lg transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p>
                  We build hands-off growth systems – streamline your content with AI, automate your lead acquisition, & solve your project management woes.
                </p>
                <p className="mt-4 font-medium">
                  All with top talent from <span className="text-indigo-400">MIT</span>.
                </p>
              </div>
              <div className={`flex gap-4 justify-center flex-col sm:flex-row transition-all duration-1000 ease-out delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <a 
                  href="https://calendly.com/dolapoadedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3 rounded transition-colors"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="#services"
                  className="border border-zinc-700 hover:border-indigo-500 text-zinc-100 font-medium px-8 py-3 rounded transition-colors"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-6 h-6 text-zinc-400 animate-bounce" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-zinc-900/50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Our Services</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                From AI strategy to custom development and seamless integration – we deliver intelligent automation solutions that transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border border-zinc-800 p-8 hover:border-indigo-500 transition-colors group">
                <div className="text-indigo-400 mb-6">
                  <Brain size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Strategy Consulting</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We help you identify the best AI solutions for your business needs, creating strategic roadmaps that maximize ROI and competitive advantage.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-8 hover:border-indigo-500 transition-colors group">
                <div className="text-indigo-400 mb-6">
                  <Bot size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom AI Development</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our experts build tailored AI solutions to automate your processes, from machine learning models to intelligent chatbots and decision systems.
                </p>
              </div>

              <div className="border border-zinc-800 p-8 hover:border-indigo-500 transition-colors group">
                <div className="text-indigo-400 mb-6">
                  <Settings size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Integration</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Seamlessly integrate AI technologies into your existing systems without disrupting operations, ensuring smooth adoption and maximum efficiency.
                </p>
              </div>

              <div className="border border-zinc-800 p-8 hover:border-indigo-500 transition-colors group">
                <div className="text-indigo-400 mb-6">
                  <Workflow size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Automation Integration</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Enhance your business with intelligent automation—streamlining repetitive tasks, reducing errors, and boosting productivity with cutting-edge automation tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-center">
                How it Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Onboarding</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Onboarding takes less than 30 minutes. We can set one up as soon as tomorrow.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Plan</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We will architect a solution, create a roadmap, and clear timeline to deliver your system with the best possible experience.
                  </p>
                </div>

                <div className="text-center">
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
        <section id="contact" className="py-20 px-6 bg-zinc-900/50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
                             <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Ready to Automate Your Growth?</h2>
              <p className="text-zinc-400 text-base mb-12">
                Let's discuss how AI and automation can streamline your operations, boost productivity, and scale your business effortlessly.
              </p>
                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
