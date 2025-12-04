import Image from "next/image";

interface GitHubStatsProps {
  username?: string;
}

export default function GitHubStats({ username = "CaAberg" }: GitHubStatsProps) {
  return (
    <div className="space-y-6">
      {/* GitHub Streak */}
      <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 overflow-hidden">
        <Image
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=52525b&ring=18181b&fire=18181b&currStreakNum=18181b&sideNums=18181b&currStreakLabel=52525b&sideLabels=52525b&dates=52525b&background=ffffff00`}
          alt="GitHub Streak"
          width={800}
          height={200}
          className="w-full h-auto dark:hidden"
          unoptimized
        />
        <Image
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=a1a1aa&ring=fafafa&fire=fafafa&currStreakNum=fafafa&sideNums=fafafa&currStreakLabel=a1a1aa&sideLabels=a1a1aa&dates=a1a1aa&background=ffffff00`}
          alt="GitHub Streak"
          width={800}
          height={200}
          className="w-full h-auto hidden dark:block"
          unoptimized
        />
      </div>

      {/* Link to GitHub Profile */}
      <div className="text-center">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View Full GitHub Profile
        </a>
      </div>
    </div>
  );
}
