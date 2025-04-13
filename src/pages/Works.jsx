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
    };

    const handleItemSelected = (itemId) =>
    {
        setSelectedItemId(itemId);
    };

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center p-10">
            <div className="w-full max-w-6xl">
                <ArcherContainer strokeColor="black" strokeWidth={2}>
                    <div className="flex gap-10 items-start">
                        {/* Navigation */}
                        <div className="flex flex-col gap-4">
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
                                        className={`rounded-3xl px-4 py-2 cursor-pointer text-center font-medium ${selectedSection === section
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
                        <div className="space-y-3 p-3 overflow-y-auto">
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
                                            className="cursor-pointer bg-white rounded-2xl border border-black px-3 py-0.5"
                                        >
                                            <p className='text-sm font-semibold mb-2' >{project.title}</p>
                                        </div>
                                    </ArcherElement>
                                ))}

                            {selectedSection === "experiences" && (
                                <div className="text-gray-700">Experience list here</div>
                            )}
                            {selectedSection === "articles" && (
                                <div className="text-gray-700">Articles list here</div>
                            )}
                            {selectedSection === "certifications" && (
                                <div className="text-gray-700">Certifications list here</div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="w-full max-h-[80vh]">
                            <div className="space-y-4">
                                {selectedSection === "projects" && (
                                    <ProjectDetail
                                        project={projectsData.find(
                                            (p) => p.id === selectedItemId
                                        )}
                                    />
                                )}
                                {selectedSection === "experiences" && (
                                    <div className="text-gray-800">Experience details here</div>
                                )}
                                {selectedSection === "articles" && (
                                    <div className="text-gray-800">Articles details here</div>
                                )}
                                {selectedSection === "certifications" && (
                                    <div className="text-gray-800">Certifications details here</div>
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
