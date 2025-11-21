import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV & Resume",
  description: "View Carl Åberg's professional experience, skills, and education. From Sous Chef to Full Stack Developer specializing in React and Next.js.",
  openGraph: {
    title: "Carl Åberg - CV & Resume",
    description: "Professional experience, skills, and education of Carl Åberg, Full Stack Developer.",
    url: "https://portfolio-caaberg.vercel.app/cv",
  },
};

export default function CV() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            Carl Åberg
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Full Stack Developer | UI/UX Enthusiast
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
            About Me
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
           I am a passionate developer with experience in building web applications using modern technologies.
           I enjoy creating user-friendly interfaces and efficient back-end systems.
           My goal is to deliver high-quality software that meets user needs and business objectives.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Studying Front-end Development - FutureGames
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                Nov 2023 - Present
              </p>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Learning modern front-end technologies and frameworks.</li>
                <li>Building projects to enhance practical skills.</li>
                <li>Collaborating with peers on group assignments and projects.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Sous chef - Restaurang Astrids 
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                July 2020 - June 2023
              </p>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Managed kitchen operations and ensured food quality.</li>
                <li>Trained and supervised kitchen staff.</li>
                <li>Maintained inventory and ordered supplies.</li>
                <li>Ensured compliance with health and safety regulations.</li>
                <li>Made sure everyone was happy and motivated.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Line chef - Restaurang Astrids 
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                January 2019 - July 2020
              </p>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Prepared and cooked menu items to order.</li>
                <li>Maintained cleanliness and organization of the kitchen station.</li>
                <li>Collaborated with team members to ensure timely service.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Prep Chef - Hotel Yasuragi
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                January 2018 - June 2018
              </p>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Prepared ingredients for daily menu items.</li>
                <li>Assisted chefs in cooking and plating dishes.</li>
                <li>Maintained cleanliness and organization of the kitchen.</li>
              </ul>
            </div>
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML/CSS", "Git", "Tailwind CSS", "Supabase", "tanStack", "Agile methodology", ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-block px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors font-medium"
          >
            Download CV (PDF)
          </a>
        </section>
      </div>
    </main>
  );
}
