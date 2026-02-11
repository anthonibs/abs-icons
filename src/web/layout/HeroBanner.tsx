import { useState } from "react";

const HeroBanner = () => {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    const command = "npm i @anthonibs/abs-icons";
    navigator.clipboard.writeText(command).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      },
    );
  }

  return (
    <section id="hero-banner" className="border-b border-abs-card-border-dark bg-abs-background-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
        <div className="absolute top-[-50%] left-[20%] w-96 h-96 bg-abs-brand-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-abs-text-main tracking-tight relative inline-block">
            Legendary Icons for{" "}
            <span className="text-abs-brand-primary">React.</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-transparent via-abs-brand-primary to-transparent opacity-70 blur-[1px]"></span>
          </h1>
          <p className="text-lg text-abs-text-muted max-w-2xl">
            A powerful collection of refined SVG icons crafted for modern React
            interfaces. Precision-built, lightweight, and ready for production.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            <a
              href="https://github.com/anthonibs/abs-lib-icons"
              rel="noopener noreferrer"
              className="px-6 cursor-pointer py-2.5 text-sm font-semibold rounded-lg flex h-13.75 items-center gap-2 text-abs-background-dark bg-abs-brand-primary hover:bg-abs-brand-primary-hover transition-all shadow-[0_0_15px_-3px_rgba(212,175,55,0.4)] duration-300 hover:shadow-[0_0_20px_-3px_rgba(212,175,55,0.6)]"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fillRule="evenodd"
                ></path>
              </svg>
              GitHub Documentation
            </a>

            <div className="group relative flex items-center bg-abs-card-background border border-abs-brand-primary  rounded-lg px-5 py-2 transition-colors hover:bg-abs-card-dark/80 shadow-[0_0_15px_-3px_rgba(212,175,55,0.2)]">
              <div className="flex flex-col items-start mr-3">
                <span className="text-[10px] uppercase font-bold text-abs-brand-primary tracking-wider mb-0.5">
                  NPM Downloads
                </span>
                <span className="text-xl font-bold text-abs-text-main leading-none">
                  245k+
                </span>
              </div>
              <div className="h-8 w-px bg-abs-card-border mx-3 shrink-0"></div>

              <div className="flex items-center">
                <code className="text-sm font-mono text-abs-text-muted mr-3 select-all">
                  npm i @anthonibs/abs-icons
                </code>

                <button
                  onClick={copyToClipboard}
                  className="p-1 rounded-full cursor-pointer  text-abs-text-muted hover:text-abs-brand-primary transition-colors"
                  title="Copy command"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
