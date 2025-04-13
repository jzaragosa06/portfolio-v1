import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function ProjectDetail({ project })
{
    return (
        <div className="max-w-6xl mx-auto p-6 md:p-8">
            {/* Main Content Row */}
            <div className='flex flex-col md:flex-row gap-8'>
                {/* Left Content - Project Info */}
                <div className='md:w-3/4'>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.title}</h1>
                    <p className="text-gray-600 text-lg mb-6">{project.subtitle}</p>

                    <div className="prose text-gray-700 mb-8 space-y-4">
                        {project.fullDescription}
                    </div>

                    <div className="flex gap-4 mb-8">
                        <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                        >
                            <FaGithub className="text-xl" />
                            <span>View Code</span>
                        </a>
                        {project.deployment && (
                            <a
                                href={project.deployment}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                            >
                                <FaLink className="text-xl" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Content - Skills */}
                <div className="md:w-1/4">
                    <h3 className="text-lg font-semibold text-gray-800">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
                <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-auto object-contain max-h-[400px] mx-auto"
                />
            </div>
        </div>
    );
}

export default ProjectDetail;