import ProfilePic from "@/components/ProfilePic";
import Link from 'next/link';

const NavBarApp = () => {
  return (
    <nav className="bg-blue-600 text-white py-3 px-4 sm:px-6 md:px-10 shadow-lg border-b-4 border-green-500">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-2xl font-bold">
          MediLink
        </Link>

        {/* Profile Pic */}
        <div className="flex items-center">
          <ProfilePic />
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;
