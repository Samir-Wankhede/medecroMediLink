import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-4 sm:px-6 md:px-28 shadow-lg">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link href="/" className="text-2xl font-bold">
          MediLink
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="/auth/SignUp" className="px-4 py-2 text-sm sm:text-base bg-transparent border border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            SignUp
          </Link>
          <Link href="/auth/Login" className="px-4 py-2 text-sm sm:text-base bg-transparent border border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            LogIn
          </Link>
        </div>
      </div>
    </nav>
  );
}
