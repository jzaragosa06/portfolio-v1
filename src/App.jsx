import React, { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import UserInfo from "./components/UserInfo";
import projectsData from "./data/projects";
import Project from "./components/Project";
import ProjectDetail from "./components/details/ProjectDetails";

const App = () =>
{
    const [selectedSection, setSelectedSection] = useState(null);
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
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
            <ArcherContainer strokeColor="orange" strokeWidth={2}>
                {/* Initial View: UserInfo + Navigation */}
                {!selectedSection ? (
                    <div className="flex gap-10 items-center">
                        {/* User Info */}
                        <div className="p-6 bg-white rounded-2xl shadow-md">
                            <UserInfo />
                        </div>

                        {/* Navigation */}
                        <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-md">
                            {["projects", "experiences", "articles", "certifications"].map((section) => (
                                <ArcherElement
                                    key={section}
                                    id={`nav-${section}`}
                                    relations={[]}
                                >
                                    <div
                                        className="rounded-3xl px-4 py-2 bg-teal-600 hover:bg-orange-500 text-white cursor-pointer text-center"
                                        onClick={() => handleNavigation(section)}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </div>
                                </ArcherElement>
                            ))}
                        </div>
                    </div>
                ) : (
                    // After Navigation Clicked: Show List + Detail
                    <div className="flex gap-10 items-start">
                        {/* Navigation */}
                        <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl shadow-md">
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
                                        className={`rounded-3xl px-4 py-2 text-white cursor-pointer text-center ${selectedSection === section
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
                        <div className="p-4 space-y-3 bg-white rounded-2xl shadow-md max-h-[80vh] overflow-y-auto">
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
                        <div className="p-4 bg-white rounded-2xl shadow-md w-[30rem] max-h-[80vh] overflow-y-auto">
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
                )}
            </ArcherContainer>
        </div>
    );
};

export default App;
