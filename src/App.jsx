import React from "react";
import UserInfo from "./components/UserInfo";
import projectsData from "./data/projects";
import Project from "./components/Project";

const App = () =>
{
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="w-1/4 p-6">
                <UserInfo />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
                <div className="rounded-3xl bg-orange-600 p-3 text-white">
                    Projects
                </div>
                <div className="rounded-3xl bg-teal-600 p-3 text-white">
                    Experience
                </div>
                <div className="rounded-3xl bg-teal-600 p-3 text-white">
                    Articles
                </div>
                <div className="rounded-3xl bg-orange-600 p-3 text-white">
                    Contacts
                </div>
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