import React, { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
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
        <div className="min-h-screen flex justify-center items-center p-4 md:p-8 lg:p-10">
            <div className="w-full max-w-7xl">
                <ArcherContainer strokeColor="black" strokeWidth={2}>
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 items-start">
                        {/* Navigation */}
                        <div className="flex lg:flex-col gap-3 w-full lg:w-auto overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                            {["projects", "experiences", "articles", "certifications"].map((section) => (
                                <ArcherElement
                                    key={section}
                                    id={`nav-${section}`}
                                    relations={
                                        selectedSection === section && selectedSection === "projects"
                                            ? [
                                                {
                                                    targetId: `list-${selectedItemId}`,
                                                    targetAnchor: "left",
                                                    sourceAnchor: "right",
                                                },
                                            ]
                                            : []
                                    }
                                >
                                    <div
                                        className={`rounded-3xl px-4 py-2 cursor-pointer text-center font-medium whitespace-nowrap transition-colors duration-200 ${selectedSection === section
                                            ? "bg-black text-white"
                                            : "border border-black text-black hover:bg-black hover:text-white"
                                            }`}
                                        onClick={() => handleNavigation(section)}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </div>
                                </ArcherElement>
                            ))}
                        </div>

                        {/* List */}
                        <div className="w-full lg:w-1/5 space-y-2 md:space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                            {selectedSection === "projects" &&
                                projectsData.map((project) => (
                                    <ArcherElement
                                        key={project.id}
                                        id={`list-${project.id}`}
                                        relations={
                                            selectedItemId === project.id
                                                ? [
                                                    {
                                                        targetId: "details",
                                                        targetAnchor: "left",
                                                        sourceAnchor: "right",
                                                    },
                                                ]
                                                : []
                                        }
                                    >
                                        <div
                                            onClick={() => handleItemSelected(project.id)}
                                            className={`rounded-3xl px-4 py-2 cursor-pointer text-sm md:text-base text-center font-medium border border-black transition-colors duration-200 ${selectedItemId === project.id
                                                ? "bg-black text-white"
                                                : "hover:bg-gray-100"
                                                }`}
                                        >
                                            {project.title}
                                        </div>
                                    </ArcherElement>
                                ))}

                            {selectedSection === "experiences" && (
                                <div className="text-gray-700 p-4">Experience list here</div>
                            )}
                            {selectedSection === "articles" && (
                                <div className="text-gray-700 p-4">Articles list here</div>
                            )}
                            {selectedSection === "certifications" && (
                                <div className="text-gray-700 p-4">Certifications list here</div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="w-full lg:w-2/3 max-h-[60vh] lg:max-h-[70vh]">
                            <div className="space-y-4">
                                {selectedSection === "projects" && (
                                    <ProjectDetail
                                        project={projectsData.find(
                                            (p) => p.id === selectedItemId
                                        )}
                                    />
                                )}
                                {selectedSection === "experiences" && (
                                    <div className="text-gray-800 p-4">Experience details here</div>
                                )}
                                {selectedSection === "articles" && (
                                    <div className="text-gray-800 p-4">Articles details here</div>
                                )}
                                {selectedSection === "certifications" && (
                                    <div className="text-gray-800 p-4">Certifications details here</div>
                                )}
                            </div>
                        </div>
                    </div>
                </ArcherContainer>
            </div>
        </div>
    );
};

export default Works;