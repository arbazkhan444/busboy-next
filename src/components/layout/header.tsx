export function Header() {
    return (
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-royalblue-100">
                BusBoy
              </a>
            </div>
            <nav className="flex items-center space-x-4">
              <a href="/login" className="text-sm text-gray-600 hover:text-royalblue-100">
                Login
              </a>
              <a href="/signup" className="text-sm text-gray-600 hover:text-royalblue-100">
                Sign Up
              </a>
            </nav>
          </div>
        </div>
      </header>
    )
  }