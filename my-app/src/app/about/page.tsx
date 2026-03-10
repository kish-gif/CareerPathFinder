import Link from "next/link";
import StartCareerTestButton from "@/components/StartCareerTestButton";

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Career Path Finder</h1>
          <p className="text-xl text-muted-foreground">
            Helping students and young professionals discover their ideal Career Paths
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
            Career Path Finder is dedicated to guiding students and young professionals in discovering meaningful career paths through a comprehensive, data‑driven assessment. We believe that every learner deserves clear, accessible guidance in choosing a future that aligns with their skills, interests, and values. By combining structured questions, AI‑powered analysis, and an engaging interface, our mission is to empower users to make confident decisions about their academic and professional journeys.
            </p>
            <p className="text-lg text-muted-foreground">
              Our platform not only suggests career options but also provides valuable information about careeer details, roles, salary range, and growth paths, making the journey to a fulfilling career smoother and more informed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Take the Test</h3>
                <p className="text-muted-foreground">
                  Complete our 20 skills and scenario-based question designed to assess your strengths, interests, and working style.
                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
                <p className="text-muted-foreground">
                Our AI analyzes each response using advanced algorithms and a structured dataset to generate career path suggestions that align with the user’s unique profile.
                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Explore Options</h3>
                <p className="text-muted-foreground">
                  Discover detailed information about each recommended career, including roles, salary range, and growth paths.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">AI‑Driven Career Insights</h2>
            <p className="text-lg text-muted-foreground mb-4">
Personalized guidance powered by data and hybrid intelligence, helping you discover career paths that truly fit your strengths and interests.            </p>
            <div className="space-y-4">
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">How Our AI Works</h3>
                <p className="text-muted-foreground">
Our AI analyzes your responses to skills and scenario‑based questions, evaluates them against key traits, and uses a hybrid recommendation engine to suggest career paths that truly fit you. By combining machine learning with rule‑based logic, it delivers accurate, personalized, and easy‑to‑understand results.                </p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Smarter Career Recommendations</h3>
                <p className="text-muted-foreground">
Career Path Finder connects recommended careers to real academic and professional pathways, presenting results through clear charts and visuals for easy understanding.                 </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Career?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Take our career test today and start your journey toward a fulfilling career that matches your unique profile.
            </p>
           <StartCareerTestButton label="Start Career Test" />
          </section>
        </div>
      </div>
    </div>
  );
} 