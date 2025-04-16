import React, { useState } from 'react';
import { FaGithub, FaLink, FaTimes } from 'react-icons/fa';

function ExperienceDetail({ experience }) {
    return (
        <div className="max-w-6xl mx-auto p-6 md:p-8">
            {/* Main Content Row */}
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-2/3'>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{experience.title}</h1>
                    <p className="text-gray-600 text-lg mb-6">{experience.subtitle}</p>

                    <div className="prose text-gray-700 mb-8 space-y-4">
                        {experience.fullDescription}
                    </div>

                    <div className="flex gap-4 mb-8">
                        <a
                            href={experience.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                        >
                            <FaGithub className="text-xl" />
                            <span>View Code</span>
                        </a>
                        {experience.deployment && (
                            <a
                                href={experience.deployment}
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

                {/* Right Content - Tags*/}
                <div className="md:w-1/3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {experience.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Image */}
                    <div className="flex flex-col items-center space-y-2">
                        <img
                            src={experience.image}
                            alt={`Logo of ${experience.title}`}
                            className="w-12 h-12 rounded-full object-fill"
                        />
                        <p className="text-xs text-gray-500 font-medium text-center">
                            {experience.company}
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ExperienceDetail;