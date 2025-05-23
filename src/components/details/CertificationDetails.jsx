import React, { useState } from 'react';
import { FaAward, FaCertificate, FaGithub, FaLink, FaTimes } from 'react-icons/fa';

function CertificateDetail({ certificate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-8">
            {/* Main Content Row */}
            <div className='flex flex-col md:flex-row gap-8'>
                {/* Left Content - Project Info */}
                <div className='md:w-2/3'>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{certificate.title}</h1>
                    <p className="text-gray-600 text-lg mb-6">{certificate.subtitle}</p>

                    <div
                        className="prose text-gray-700 mb-8 space-y-4"
                        dangerouslySetInnerHTML={{ __html: certificate.fullDescription }}
                    ></div>


                    <div className="flex gap-4 mb-8">
                        <a
                            href={certificate.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                        >
                            <FaLink />
                            <FaAward className="text-xl" />
                            <span>Visit source</span>
                        </a>
                    </div>
                </div>

                {/* Right Content - Tags*/}
                <div className="md:w-1/3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {certificate.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Image */}
                    <div 
                        className="bg-white rounded-lg shadow-sm border border-gray-100 mt-3 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={openModal}
                    >
                        <img
                            src={certificate.image}
                            alt={`Screenshot of ${certificate.title}`}
                            className="w-full h-auto object-contain rounded-md border border-gray-200"
                        />
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            Screenshot of {certificate.title}
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Semi-transparent overlay */}
                    <div 
                        className="absolute inset-0 bg-black opacity-70"
                        onClick={closeModal}
                    ></div>
                    
                    {/* Modal content */}
                    <div className="relative z-50 bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-50"
                        >
                            <FaTimes className="text-2xl" />
                        </button>
                        
                        {/* Image on the left */}
                        <div className="md:w-2/3 p-2 flex items-center justify-center bg-gray-100">
                            <img
                                src={certificate.image}
                                alt={`Screenshot of ${certificate.title}`}
                                className="max-h-[80vh] w-auto object-contain rounded-md"
                            />
                        </div>
                        
                        {/* Description on the right */}
                        <div className="md:w-1/3 p-6 overflow-y-auto">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{certificate.title}</h2>
                            <div className="prose text-gray-700">
                                {certificate.fullDescription}
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {certificate.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CertificateDetail;