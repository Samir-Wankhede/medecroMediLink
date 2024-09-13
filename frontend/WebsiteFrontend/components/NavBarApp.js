"use client"
import Link from 'next/link';
import { useLogout } from '@/hooks/useLogout'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useEffect, useState } from 'react';

const NavBarApp = () => {
  const {logout} = useLogout();
  const {user} = useAuthContext();
  const [available, setAvailable] = useState(false);
  const handleLogout = () => {
    logout();
    setAvailable(false);
  }
  useEffect(()=>{
    if(user){
      setAvailable(true);
    }else{
      setAvailable(false);
    }
  },[user])
  return (
    <nav className="bg-blue-600 text-white py-3 px-4 sm:px-6 md:px-10 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-5xl font-bold">
          MediLink
        </Link>
        {available &&
        <div className='flex gap-2'>
          <span>{user.name}</span>
          <button onClick={handleLogout}>Log Out</button>
        </div>
        }
      </div>
    </nav>
  );
};

export default NavBarApp;

