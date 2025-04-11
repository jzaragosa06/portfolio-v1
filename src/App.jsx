import React, { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import UserInfo from "./components/UserInfo";
import projectsData from "./data/projects";
import Project from "./components/Project";
import ProjectDetail from "./components/details/ProjectDetails";

const App = () =>
{
    const [selectedSection, setSelectedSection] = useState("projects");
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
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="w-1/4 p-6">
                <UserInfo />
            </div>

            <ArcherContainer strokeColor="orange" strokeWidth={2}>
                <div className="flex gap-10">

                    {/* Navigation */}
                    <div className="flex flex-col justify-center items-center gap-3 p-6">
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
                                    className={`rounded-3xl p-3 text-white cursor-pointer ${selectedSection === section
                                        ? "bg-orange-600"
                                        : "bg-teal-600 hover:bg-orange-500"
                                        }`}
                                    onClick={() => handleNavigation(section)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </div>
                            </ArcherElement>
                        ))}
                    </div>

                    {/* List */}
                    <div className="p-6 space-y-3">
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
                                        className="cursor-pointer"
                                    >
                                        <Project project={project} />
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
                    <div className="p-6">
                        <ArcherElement id="details">
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
                        </ArcherElement>
                    </div>

                </div>
            </ArcherContainer>
        </div>
    );
};

export default App;
