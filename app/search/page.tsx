import SearchForm from "./SearchForm"

const suggestions = ["React", "Next.js", "Intelligence artificielle", "Startup", "Web3", "TypeScript"]

export default function SearchPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="text-center mb-10">
        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-widest mb-3">
          Recherche
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Quel sujet tu veux suivre ?
        </h1>
        <p className="text-gray-500 text-sm">
          Entre un mot-clé pour voir les dernières news
        </p>
      </div>

      <SearchForm />

      <div className="mt-8">
        <p className="text-xs text-gray-400 dark:text-gray-600 mb-3 text-center">Suggestions</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suggestions.map((s) => (
            <a
              key={s}
              href={`/topic/${s.toLowerCase()}`}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 px-3 py-1.5 rounded-lg transition-all"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}