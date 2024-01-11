function Main({ children }) {
  return (
    <main className="mx-auto flex flex-col gap-8 pt-24 text-white sm:h-screen sm:justify-evenly lg:flex-wrap lg:gap-4 lg:py-20">
      {children}
    </main>
  )
}

export default Main
