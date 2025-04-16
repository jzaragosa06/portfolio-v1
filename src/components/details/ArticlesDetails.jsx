import React, { useState } from 'react';
import { FaGithub, FaLink, FaTimes } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';

function ArticleDetail({ article }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-8">
            {/* Main Content Row */}
            <div className='flex flex-col md:flex-row gap-8'>
                {/* Left Content - Project Info */}
                <div className='md:w-2/3'>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{article.title}</h1>
                    <p className="text-gray-600 text-lg mb-6">{article.subtitle}</p>

                    <div className="prose text-gray-700 mb-8 space-y-4">
                        {article.fullDescription}
                    </div>

                    <div className="flex gap-4 mb-8">
                        <a
                            href={article.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            <FaGithub className="text-xl" />
                            <span>View Code</span>
                        </a>
                        {article.deployment && (
                            <a
                                href={article.deployment}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <FaLink className="text-xl" />
                                <span>Live Demo</span>
                            </a>
                        )}
                        {article.source && (
                            <a
                                href={article.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                            >
                                <FaMedium className="text-xl" />
                                <span>Read Article</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Content - Tags*/}
                <div className="md:w-1/3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, idx) => (
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
                            src={article.image}
                            alt={`Screenshot of ${article.title}`}
                            className="w-full h-auto object-contain rounded-md border border-gray-200"
                        />
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            Screenshot of {article.title}
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
                                src={article.image}
                                alt={`Screenshot of ${article.title}`}
                                className="max-h-[80vh] w-auto object-contain rounded-md"
                            />
                        </div>

                        {/* Description on the right */}
                        <div className="md:w-1/3 p-6 overflow-y-auto">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h2>
                            <div className="prose text-gray-700">
                                {article.fullDescription}
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map((tag, idx) => (
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

export default ArticleDetail;