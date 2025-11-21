import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Carl Åberg. Whether you have a project in mind or just want to connect, feel free to reach out via email, LinkedIn, or GitHub.",
  openGraph: {
    title: "Contact Carl Åberg",
    description: "Get in touch with Carl Åberg, Full Stack Developer. Available for freelance projects and opportunities.",
    url: "https://portfolio-caaberg.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
