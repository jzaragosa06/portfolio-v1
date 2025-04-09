import React, { useEffect } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function ProjectDetail({ project }) {
    return (
        <div className='bg-white shadow-md rounded-md p-6'>
            <div className='flex p-3'>

                {project.screenshots.map((image) => (
                    <div><img src={image} /></div>
                ))}
            </div>
            <div className='flex justify-between'>
                <h2 className='text-lg font-semibold text-gray-600 mb-2' >{project.title}</h2>
                <div className='flex'>
                    <FaGithub className='text-teal-600 mr-2' />
                    <FaLink className='text-teal-600 mr-2' />
                </div>
            </div>
            <p className='text-sm text-gray-600 mb-2'>{project.fullDescription}</p>

            <div className='flex gap-2'>
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className='text-xs text-teal-600 border border-teal-600 rounded-2xl p-1'>{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetail;