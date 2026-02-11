const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-abs-card-border/50 bg-abs-background/80 backdrop-blur-sm ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              alt="Abs-Icons Logo"
              className="h-20 w-20 object-contain"
              src="/logo-abs-icons.webp"
            />
            <span className="font-bold text-lg tracking-tight text-abs-brand-primary">
              Abs Icons
            </span>
            <span className="inline-flex items-center px-2 py-0.5 bg-abs rounded text-[10px] font-medium bg-abs-card-background text-abs-text-muted border border-abs-card-border">
              v1.0
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              className="text-sm font-medium text-abs-text-muted hover:text-abs-brand-primary transition-colors"
              href="https://github.com/anthonibs/abs-lib-icons/blob/main/README.md"
              rel="noopener noreferrer"
              target="_blank"
            >
              Docs
            </a>
            <a
              className="text-sm font-medium text-abs-text-muted hover:text-abs-brand-primary transition-colors"
              href="https://github.com/anthonibs/abs-lib-icons/blob/main/LICENSE"
              rel="noopener noreferrer"
              target="_blank"
            >
              License
            </a>

            <div className="flex items-center border-l border-abs-card-border pl-6 space-x-4">
              <a
                className="text-abs-text-muted hover:text-abs-brand-primary transition-colors"
                href="https://github.com/anthonibs/abs-lib-icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
