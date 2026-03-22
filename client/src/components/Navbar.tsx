import { Link, useNavigate } from 'react-router-dom';
import { DollarSignIcon, FolderEditIcon, GalleryHorizontal, GalleryHorizontalEnd, MenuIcon, SparkleIcon, XIcon } from 'lucide-react';
import { GhostButton, PrimaryButton } from './Buttons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useClerk, useUser, UserButton } from '@clerk/react';
export default function Navbar() {
    const navigate = useNavigate();
    const {user} = useUser() ; 
    const {openSignIn,openSignUp} = useClerk();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/#' },
        { name: 'Create', href: '/generate' },
        { name: 'Community', href: '/community' },
        { name: 'Plans', href: '/plans' },
    ];

    return (
        <motion.nav className='fixed top-5 left-0 right-0 z-50 px-4'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
        >
            <div className='max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3'>
                <Link to='/' onClick={()=>scrollTo(0,0)}>
                    <img src={assets.navLogo} alt="logo" className="h-8" />
                </Link>

                <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
                    {navLinks.map((link) => (
                        <Link onClick={()=>scrollTo(0,0)} to={link.href} key={link.name} className="hover:text-white transition">
                            {link.name}
                        </Link>
                    ))}
                </div>
                {!user ? (
                  <div className='hidden md:flex items-center gap-3'>
                    <button onClick={()=>openSignIn()} className='text-sm font-medium text-gray-300 hover:text-white transition max-sm:hidden'>
                        Sign in
                    </button>
                    <PrimaryButton onClick={()=>openSignUp()} className='max-sm:text-xs hidden sm:inline-block'>Get Started</PrimaryButton>
                </div>
                ):(
                  <div className='flex gap-2'>
                    <GhostButton onClick={()=>navigate('/plans')} className='border-none text-gray-300 sm:py-1.5'>
                      Credits:
                    </GhostButton>
                    <UserButton>
                      <UserButton.MenuItems>
                        <UserButton.Action
                        label='Generate'
                        labelIcon = {<SparkleIcon size={14}/>}
                        onClick={()=>navigate('/generate')}
                        />
                        <UserButton.Action
                        label='My Generations'
                        labelIcon = {<FolderEditIcon size={14}/>}
                        onClick={()=>navigate('/my-generations')}
                        />
                        <UserButton.Action
                        label='Community'
                        labelIcon = {<GalleryHorizontalEnd size={14}/>}
                        onClick={()=>navigate('/community')}
                        />
                        <UserButton.Action
                        label='Plans'
                        labelIcon = {<DollarSignIcon size={14}/>}
                        onClick={()=>navigate('/plans')}
                        />
                      </UserButton.MenuItems>
                    </UserButton>
                  </div>
                )}
                
                {!user && <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                    <MenuIcon className='size-6' />
                </button>}
                
            </div>
            <div className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}

                <button onClick={() => {setIsOpen(false); openSignIn()}} className='font-medium text-gray-300 hover:text-white transition'>
                    Sign in
                </button>
                <PrimaryButton onClick={() => {setIsOpen(false); openSignUp()}}>Get Started</PrimaryButton>

                <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
                >
                    <XIcon />
                </button>
            </div>
        </motion.nav>
    );
};