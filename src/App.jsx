import React from "react";
import UserInfo from "./components/UserInfo";
import projectsData from "./data/projects";
import Project from "./components/Project";

const App = () =>
{
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="w-1/4 p-6">
                <UserInfo />
            </div>

            <div className="space-y-4">
                {projectsData.map((project) => (
                    <Project project={project} />
                ))}
            </div>



        </div>
    );
};

export default App;