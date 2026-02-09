export const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-1 px-4 py-6 text-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ritu Singh</p>
        <p className="text-sm text-gray-500">
          Built with <span className="font-medium text-pink-500">Next.js</span> & Tailwind
        </p>
      </div>
    </footer>
  )
}