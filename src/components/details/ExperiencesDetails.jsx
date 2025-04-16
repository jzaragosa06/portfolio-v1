import React from 'react';
import { FaGithub, FaLink, FaCalendarAlt, FaCircle } from 'react-icons/fa';

function ExperienceDetail({ experience }) {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Main Content Row */}
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-2/3'>
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-1">{experience.title}</h1>
                        <h2 className="text-xl text-gray-600 mb-2">{experience.subtitle}</h2>

                        <div className="flex items-center text-gray-500 mb-4">
                            <FaCalendarAlt className="mr-2" />
                            <span>{experience.startDate} - {experience.endDate}</span>
                        </div>

                        <div className="prose text-gray-700 mb-6">
                            <p>{experience.fullDescription}</p>
                        </div>
                    </div>

                    {/* Responsibilities Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                        <ul className="space-y-4 relative pl-6 border-l-2 border-gray-200">
                            {experience.responsibilities.map((item, idx) => (
                                <li key={idx} className="relative">
                                    <div className="absolute -left-7 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-4 border-blue-100"></div>
                                    <p className="text-gray-700">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievements Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Notable Achievements</h3>
                        <ul className="space-y-4 relative pl-6 border-l-2 border-gray-200">
                            {experience.achievements.map((item, idx) => (
                                <li key={idx} className="relative">
                                    <div className="absolute -left-7 top-1.5 w-3 h-3 rounded-full bg-green-500 border-4 border-green-100"></div>
                                    <p className="text-gray-700">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects Section */}
                    {experience.projects && experience.projects.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Projects</h3>
                            <div className="space-y-6">
                                {experience.projects.map((project, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-gray-800 mb-1">{project.title}</h4>
                                        <p className="text-gray-600 mb-3">{project.description}</p>
                                        <div className="flex gap-4">
                                            {project.repository && (
                                                <a
                                                    href={project.repository}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
                                                >
                                                    <FaGithub className="text-lg" />
                                                    <span>View Code</span>
                                                </a>
                                            )}
                                            {project.source && (
                                                <a
                                                    href={project.source}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
                                                >
                                                    <FaLink className="text-lg" />
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="md:w-1/3 space-y-8">
                    {/* Company Info */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img
                                src={experience.image}
                                alt={`Logo of ${experience.company}`}
                                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm"
                            />
                            <h3 className="text-lg font-medium text-gray-800 text-center">
                                {experience.company}
                            </h3>
                            <p className='text-sm text-gray-500'>{experience.companyInfo}</p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className='flex flex-col items-center'>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {experience.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    {(experience.repository || experience.deployment) && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Links</h3>
                            <div className="space-y-3">
                                {experience.repository && (
                                    <a
                                        href={experience.repository}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors p-3 bg-gray-50 rounded-lg"
                                    >
                                        <FaGithub className="text-xl" />
                                        <span>Repository</span>
                                    </a>
                                )}
                                {experience.deployment && (
                                    <a
                                        href={experience.deployment}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors p-3 bg-gray-50 rounded-lg"
                                    >
                                        <FaLink className="text-xl" />
                                        <span>Live Deployment</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ExperienceDetail;