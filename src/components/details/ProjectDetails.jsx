import React, { useEffect } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function ProjectDetail({ project })
{
    return (
        <div className=" flex gap-8">
            {/* Left Content */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="text-gray-500 mb-6">subtitle</p>

                <div className="space-y-4 mb-6">
                    {project.fullDescription}
                </div>

                <hr className="border-gray-300 my-4" />

                {/* Skills */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {project.skills.map((skill, idx) => (
                        <button
                            key={idx}
                            className="px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-100 transition"
                        >
                            {skill}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Content - Scrollable Images */}
            <div className="w-[300px] h-[500px] overflow-y-scroll space-y-4">
                {/* Example images */}
                {project.screenshots.map((img, idx) => (
                    <div
                        key={idx}
                        className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 text-sm"
                    >
                        image
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetail;


