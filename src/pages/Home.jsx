import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import user from '../data/user';
import Animated from '../components/Animated';
import { FaMedium } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';


const Header = () => {
    const openResume = () => {
        window.open("/portfolio-v1/resume.pdf", "_blank")
    }

    return (
        <div className="flex justify-between items-center p-4 text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
                <HiOutlineMail />
                <span>{user.email}</span>
            </div>
            <div className="flex items-center space-x-6">
                <Link to="/works">Works</Link>
                <p onClick={openResume} className="hover:underline">Resume</p>
                <FiSettings />
            </div>
        </div>
    );
};

const SocialIcons = () => (
    <div className="flex flex-col space-y-4">
        <a href={user.linkedin}><FaLinkedin className="text-xl hover:text-blue-500" /></a>
        <a href={user.github}><FaGithub className="text-xl hover:text-gray-800" /></a>
        <a href={user.medium}><FaMedium className="text-xl hover:text-gray-800" /></a>
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

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8">
                    {user.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="text-xs flex justify-center items-center p-0.5 border font-medium border-gray-700 text-gray-600 text-center rounded-lg hover:bg-black hover:text-white transition duration-300"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

                <Link to="/works">
                    <div className="flex justify-center items-center mt-6 animate-bounce">
                        <div className="flex items-center gap-2 border border-black rounded-2xl px-4 py-2 text-black font-medium text-sm transition-all duration-300 hover:text-white hover:bg-black">
                            Explore
                            <FiArrowRight className="text-base" />
                        </div>
                    </div>
                </Link>

            </div>

            {/* Animated container */}
            <div className="w-1/2">
                <Animated />
            </div>
        </div>
    </div>
);


export default function Home() {
    return (
        <div className="h-screen bg-gray-50 flex justify-center items-start pt-10">
            <div className="bg-white rounded-lg shadow-md w-full max-w-6xl">
                <Header />
                <InfoSection />
            </div>
        </div>
    );
}
