export default function PortfolioPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Portfolio
      </h1>
      <div className="flex flex-col space-y-6">
        <a 
          href="https://double-sidebar.thisishannon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex justify-between items-baseline">
            <span className="text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors font-semibold">
              Double Sidebar
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">
              2025
            </span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Demo of a frontend double sidebar component to separate different product offering features.
          </p>
        </a>

        <a 
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex justify-between items-baseline">
            <span className="text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors font-semibold">
              Ai Video Speech Infill
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">
              2025
            </span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Coming Soon: Demo of replacing speech in a video using AI.
          </p>
        </a>
      </div>
    </section>
  )
}