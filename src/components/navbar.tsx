import { Flame, Heart, HomeIcon, Search, User } from 'lucide-react'
import Link from 'next/link'
import React, { ElementType } from 'react'

// Define the type for the nav icons
type NavIcon = {
    Icon: ElementType;  // A React component type (like Lucide icons)
    key: string;
};

// Define the array with types
const navIcons: NavIcon[] = [
    { Icon: Search, key: "search" },
    { Icon: Heart, key: "heart" },
    { Icon: User, key: "user" },
];


const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            {/* Logo Section */}
            <Link href='/' className='flex items-center gap-2'>
                <Flame className='w-10 h-10 text-red-600 rounded-3xl bg-red-300 p-2'/>
                <p className='text-3xl font-bold'>
                    Market<span className='text-red-600'>eer</span>
                </p>
            </Link>

            {/* Navigation Icons */}
            <div className='flex items-center gap-4'>
                {navIcons.map(({ Icon, key }) => (
                    <Link href='/' key={key} className='p-2 rounded-lg hover:bg-gray-200'>
                        <Icon className="w-6 h-6 text-gray-600" />
                    </Link>
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
