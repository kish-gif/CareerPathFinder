import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import StartCareerTestButton from "@/components/StartCareerTestButton";
import GradientBackground from "@/components/GradientBackground";
import careerLogo from "./Career_Pathfinder_Logo.png";



export default function Home() {
  return (

    <>
      <GradientBackground />

      <div className="relative">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Find Your Perfect Career Path
              </h1>
              <p className="text-xl md:text-2xl text-black max-w-3xl">
                Experts say that knowing yourself will help you make better career choices. Find out what career path is best-suited for you when you take the Career Path Finder for free now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <StartCareerTestButton label="Start Career Test" />
                <Link
                  href="/about"
                  className="px-8 py-3 text-lg font-medium border-black rounded-md hover:bg-accent transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
         <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10">
    
    {/* Left side: Image */}
     <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={careerLogo}
                alt="Career Path Finder illustration"
                width={600}
                height={500}
                className="rounded-lg"

              />
            </div>


    {/* Right side: Explanation */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-4xl font-bold mb-6">
        What is Career Path Finder?
      </h3>
      <p className="text-lg mb-4">
      The Career Path Finder is designed to help students make informed decisions about their future. It combines data and design to identify careers that best match your skills, interests, and strengths.      </p>
      <p className="text-lg mb-4">
      At the core of the system is a validated career test, where each question is mapped to traits and career domains to ensure results are accurate, fair, and meaningful.
      </p>
      <p className="text-lg mb-4">
      In just a few minutes, you’ll receive personalized recommendations backed by AI‑driven analysis. These insights show not only which careers fit you, but also why they fit — giving you clarity and confidence in your choices.
      </p>
      <p className="text-lg mb-4">
      With a step‑by‑step interface, progress indicators, and an easy‑to‑use dashboard, Career Path Finder makes career exploration engaging and stress‑free.
      </p>
      <p className="text-lg">
        It’s more than a test — it’s a trusted companion for self‑discovery and success.
      </p>
    </div>

  </div>
</section>


{/* Features Section */}
<section className="py-20">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
      How Career Path Finder Helps You
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                 {/* icon */}
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Career Recommendations</h3>
                <p className="text-muted-foreground">
                Our AI-powered test analyzes your traits and strengths to suggest careers that truly match your personality and skills.                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">2</span>

                  {/* icon */}
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Path Guidance</h3>
                <p className="text-muted-foreground">
Get comprehensive information about your recommended career, including typical job roles, expected salary ranges, and potential growth paths.                 </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary">3</span>

                  {/* icon */}
                </div>
                <h3 className="text-xl font-semibold mb-2">Results Made for You</h3>
                <p className="text-muted-foreground">
                View your career test results in a clear, visual format with charts, confidence scores, and detailed explanations of your strengths.                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Ready to Discover Your Career Path?
              </h2>
              <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
Take our career test today and unlock personalized recommendations designed to guide you toward success.              </p>
              <StartCareerTestButton label="Start Career Test" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}