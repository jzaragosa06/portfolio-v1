import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaGoogle, FaPhone } from "react-icons/fa";

function UserInfo()
{
    return (
        <div className=" bg-white shadow-md rounded-md p-6 flex flex-col">
            <div className="p-6">
                <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-teal-200 flex items-center justify-center text-teal-600 text-2xl font-bold">
                        JJ
                    </div>
                </div>
                <h1 className="text-xl font-bold text-center mt-4 text-teal-800">Jun Jun</h1>
                <p className="text-sm text-center text-teal-600">Backend Developer | Information Technology | DOST Scholar</p>
            </div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatibus delectus! Soluta earum dolorum, repellat aliquam commodi omnis ad distinctio sequi sunt exercitationem a nisi facilis ipsum! At, consectetur voluptas.
            </div>

            {/* Skills */}
            <div className="p-6">
                <h2 className="text-lg font-semibold text-teal-800 mb-3">Skills</h2>
                <div className="space-y-2">
                    {['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Git'].map((skill) => (
                        <div key={skill} className="flex items-center">
                            <div className="h-2 bg-teal-200 rounded-full flex-grow mr-2">
                                <div className="h-2 bg-teal-600 rounded-full" style={{ width: `${Math.floor(Math.random() * 60) + 40}%` }}></div>
                            </div>
                            <span className="text-xs text-teal-800">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact */}
            <div className="flex flex-co justify-center items-center">
                <div className="space-y-2 flex">
                    <FaGoogle className="text-orange-600 mr-2" />
                    <FaGithub className="text-orange-600 mr-2" />
                    <FaLinkedin className="text-orange-600 mr-2" />
                    <FaEnvelope className="text-orange-600 mr-2" />
                    <FaPhone className="text-orange-600 mr-2" />

                </div>
            </div>

        </div>

    )
};

export default UserInfo;