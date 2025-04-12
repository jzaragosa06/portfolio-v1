import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import user from '../data/user';
import Animated from '../components/Animated';

const Header = () => (
    <div className="flex justify-between items-center p-4 text-gray-700 text-sm">
        <div className="flex items-center space-x-2">
            <HiOutlineMail />
            <span>{user.email}</span>
        </div>
        <div className="flex items-center space-x-6">
            <Link to="/works">Works</Link>
            <a href="#" className="hover:underline">Resume</a>
            <FiSettings />
        </div>
    </div>
);

const SocialIcons = () => (
    <div className="flex flex-col space-y-4 mt-4">
        <a href={user.linkedin}><FaLinkedin className="text-xl hover:text-blue-500" /></a>
        <a href={user.github}><FaGithub className="text-xl hover:text-gray-800" /></a>
        <a href={user.twitter}><FaTwitter className="text-xl hover:text-blue-400" /></a>
    </div>
);

const InfoSection = () => (
    <div className="flex items-start space-x-10 p-10">
        <SocialIcons />
        {/* two containers should be in the same row */}
        <div className="flex w-full gap-6">
            {/* User container */}
            <div className="w-1/2">
                <div className="bg-black text-white px-2 py-1 rounded mb-3 w-max text-xs">It's me</div>
                <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                    {user.firstNameShort} <br /> {user.lastName}
                </h1>
                <h2 className="text-sm mt-2 text-gray-600 font-semibold">{user.title}</h2>
                <p className="mt-4 max-w-md text-sm text-gray-600">
                    {user.about}
                </p>
            </div>
            {/* Animated container */}
            <div className="w-1/2">
                <Animated />
            </div>
        </div>
    </div>
);


export default function Home()
{
    return (
        <div className="h-screen bg-gray-50 flex justify-center items-start pt-10">
            <div className="bg-white rounded-lg shadow-md w-full max-w-6xl">
                <Header />
                <InfoSection />
            </div>
        </div>
    );
}
