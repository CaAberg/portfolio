import GitHubStats from "@/components/GitHubStats";

export default function Home() {
  const projects = [
    {
      title: "FisherDB",
      description: "A simple reddit clone built with Next.js and TypeScript, using supabase for the backend. it features user authentication, post creation, editing, and commenting functionalities.",
      link: "https://fisherdb.vercel.app",
      tags: ["Typescript", "Zod", "Supabase", "Next.js", "TailwindCSS"]
    },
    {
      title: "Motorcycle Repair Finder",
      description: "A web application to find motorcycle repair shops nearby. Built with Next, utilizing Google Maps API, and using Claude Sonnet to generate the website from scratch to full function in less than 45 minutes",
      link: "https://motorcycle-repair-finder.vercel.app",
      tags: ["AI", "API's", "Supabase", "Next.js", "TailwindCSS"]
    },
    {
      title: "Fishing Store",
      description: "A mockup e-commerce site for fishing gear built with Next.js and Tailwind CSS. This project was made for an exam project, and focuses on testing using msw, jest, and react-testing-library.",
      link: "https://tackleboxed2-0.vercel.app",
      tags: ["MSW", "Jest", "RTL", "Next.js", "TailwindCSS"]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Welcome to Carl Åberg's Portfolio
          </h1>
          <p className="text-zinc-900 dark:text-zinc-50">(that's me!)</p>
          <p className="text-xl pt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            I'm a developer passionate about building functional and efficient web applications.
            Explore my projects below or check out my CV and get in touch.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            About Me
          </h2>
          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-8">
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <p className="text-lg leading-relaxed">
                My journey into software development is a bit unconventional.
                <br />
                I spent years working in professional kitchens, rising from prep chef to sous chef at Restaurang Astrids in Stockholm.
                <br />
                The kitchen taught me discipline, attention to detail, and how to perform under pressure—skills that translate well to coding.
                <br />
                It also taught me the importance of teamwork and communication, which are crucial in any development environment.
                <br />
                But most importantly, it taught me to be kind, respectful and considerate to those around me—values I carry with me into my work as a developer.
              </p>
              <p className="text-lg leading-relaxed">
                In 2023, I made the decision to pursue my passion for technology and enrolled in FutureGames' Front-end Development program. 
                <br />
                What drew me to development was the creative problem-solving aspect—much like crafting a perfect dish,
                building software requires combining the right ingredients (technologies) in the right way 
                to create something both functional and elegant.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in building modern web applications using <span className="font-semibold text-zinc-900 dark:text-zinc-50">React</span>, 
                <span className="font-semibold text-zinc-900 dark:text-zinc-50"> Next.js</span>, and 
                <span className="font-semibold text-zinc-900 dark:text-zinc-50"> TypeScript</span>. I'm particularly interested 
                in creating intuitive user interfaces and writing clean, maintainable code. My background in hospitality has 
                given me a strong focus on user experience—whether it's a customer in a restaurant or a user on a website, 
                the goal is the same: deliver an exceptional experience.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you might find me exploring new technologies, making video games, fishing 
                or occasionally returning to the kitchen to cook for friends and family.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
            GitHub Activity
          </h2>
          <GitHubStats username="CaAberg" />
        </section>
      </div>
    </main>
  );
}
