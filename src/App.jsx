import React, { useState } from "react";
import UserInfo from "./components/UserInfo";
import projectsData from "./data/projects";
import Project from "./components/Project";
import ProjectDetail from "./components/details/ProjectDetails";

const App = () => {
    const [selectedSection, setselectedSection] = useState("projects");
    const [selectedItemId, setSelectedItemId] = useState(projectsData[0].id);



    const handleNavigation = (section) => {
        setselectedSection(section);
    }

    const handleItemSelected = (itemId) => {
        setSelectedItemId(itemId);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="w-1/4 p-6">
                <UserInfo />
            </div>

            {/* navigations */}
            <div className="flex flex-col justify-center items-center gap-3 p-6">
                <div className={`rounded-3xl p-3 text-white ${selectedSection === "projects"
                    ? "bg-orange-600"
                    : "bg-teal-600 hover:bg-orange-500"
                    }`}
                    onClick={() => handleNavigation("projects")}

                >
                    Projects
                </div>
                <div className={`rounded-3xl p-3 text-white ${selectedSection === "experinces"
                    ? "bg-orange-600"
                    : "bg-teal-600 hover:bg-orange-500"
                    }`}
                    onClick={() => handleNavigation("experiences")}
                >
                    Experience
                </div>
                <div className={`rounded-3xl p-3 text-white ${selectedSection === "articles"
                    ? "bg-orange-600"
                    : "bg-teal-600 hover:bg-orange-500"
                    }`}
                    onClick={() => handleNavigation("articles")}
                >
                    Articles
                </div>
                <div className={`rounded-3xl p-3 text-white ${selectedSection === "certifications"
                    ? "bg-orange-600"
                    : "bg-teal-600 hover:bg-orange-500"
                    }`}
                    onClick={() => handleNavigation("certifications")}
                >
                    certifications
                </div>
            </div>

            {/* List */}
            <div className="p-6">
                {selectedSection == "projects" &&
                    <div>
                        {projectsData.map((project) => (
                            <div 
                                key={project.id} 
                                id={project.id} 
                                onClick={() => handleItemSelected(project.id)}
                                className="mb-3"
                            >
                                <Project project={project} />
                            </div>
                        ))}
                    </div>
                }

                {selectedSection == "experiences" &&
                    <div>Experience</div>
                }
                {selectedSection == "articles" &&
                    <div>articles</div>
                }

                {selectedSection == "certifications" &&
                    <div>certifications</div>
                }
            </div>

            {/* Details */}
            <div className="space-y-4 p-6">
                {selectedSection == "projects" &&
                    <ProjectDetail project={projectsData.find(p => p.id == selectedItemId)} />
                }
                {selectedSection == "experiences" &&
                    <div>Experience</div>
                }
                {selectedSection == "articles" &&
                    <div>articles</div>
                }
                {selectedSection == "certifications" &&
                    <div>certifications</div>
                }
            </div>

        </div>
    );
};

export default App;