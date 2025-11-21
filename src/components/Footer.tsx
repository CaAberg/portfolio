import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Carl Åberg
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Full Stack Developer passionate about creating efficient and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors text-sm"
              >
                Home
              </Link>
              <Link 
                href="/cv" 
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors text-sm"
              >
                CV
              </Link>
              <Link 
                href="/contact" 
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/CaAberg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/carl-åberg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="mailto:Caaberg99@gmail.com"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            © {currentYear} Carl Åberg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
