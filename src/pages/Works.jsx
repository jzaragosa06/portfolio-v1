import React, { useState } from "react";
import projectsData from "../data/projects";
import ProjectDetail from "../components/details/ProjectDetails";

const Works = () =>
{
    const [selectedSection, setSelectedSection] = useState('projects');
    const [selectedItemId, setSelectedItemId] = useState(projectsData[0].id);

    const handleNavigation = (section) =>
    {
        setSelectedSection(section);
        // Reset to first item when changing sections
        if (section === 'projects')
        {
            setSelectedItemId(projectsData[0].id);
        }
    };

    const handleItemSelected = (itemId) =>
    {
        setSelectedItemId(itemId);
    };

    return (
        <div className="min-h-screen flex flex-col justify-start items-center p-4 md:p-8 lg:p-12">
            <div className="w-full max-w-7xl space-y-8 md:space-y-12">
                {/* Navigation */}
                <div className="flex flex-row gap-2 md:gap-4 w-full overflow-x-auto pb-3 scrollbar-hide">
                    {["projects", "experiences", "articles", "certifications"].map((section) => (
                        <button
                            key={section}
                            className={`rounded-full px-5 py-2 md:px-6 md:py-2.5 cursor-pointer text-sm md:text-base font-medium whitespace-nowrap transition-all duration-200 ${selectedSection === section
                                ? "bg-black text-white"
                                : "border border-black text-black hover:bg-black hover:text-white"
                                }`}
                            onClick={() => handleNavigation(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full">
                    {/* List */}
                    <div className="w-full lg:w-1/4  overflow-hidden">
                        <div className="p-2 md:p-3 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            {selectedSection === "projects" && (
                                <div className="space-y-2">
                                    {projectsData.map((project) => (
                                        <div
                                            key={project.id}
                                            onClick={() => handleItemSelected(project.id)}
                                            className={`rounded-2xl px-4 py-3 cursor-pointer text-sm md:text-base font-medium transition-all duration-200 border ${selectedItemId === project.id
                                                ? "bg-black text-white border-black"
                                                : "border border-black text-black hover:bg-black hover:text-white"
                                                }`}
                                        >
                                            {project.title}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedSection === "experiences" && (
                                <div className="text-gray-500 p-4 text-center">Experience list coming soon</div>
                            )}
                            {selectedSection === "articles" && (
                                <div className="text-gray-500 p-4 text-center">Articles list coming soon</div>
                            )}
                            {selectedSection === "certifications" && (
                                <div className="text-gray-500 p-4 text-center">Certifications list coming soon</div>
                            )}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="w-full lg:w-3/4  border-l-2 border-l-black overflow-hidden">
                        <div className="p-4 md:p-6 max-h-[80vh]">
                            {selectedSection === "projects" && (
                                <ProjectDetail
                                    project={projectsData.find(
                                        (p) => p.id === selectedItemId
                                    )}
                                />
                            )}
                            {selectedSection === "experiences" && (
                                <div className="text-gray-600 p-4">Experience details coming soon</div>
                            )}
                            {selectedSection === "articles" && (
                                <div className="text-gray-600 p-4">Articles details coming soon</div>
                            )}
                            {selectedSection === "certifications" && (
                                <div className="text-gray-600 p-4">Certifications details coming soon</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;