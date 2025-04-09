import React, { useEffect } from 'react';


function ProjectDetails({ project })
{
    return (
        <div className='bg-white shadow-md rounded-md p-6'>
            <div>
                {project.screenshots.map((image) => (
                    <div><img src={image}/></div>
                ))}
            </div>
            <h2 className='text-lg font-semibold text-gray-600 mb-2' >{project.title}</h2>
            <p className='text-sm text-gray-600 mb-2'>{project.fullDescription}</p>

            <p>Deployment: {project.deployment}</p>
            <p>Repository: {project.repository}</p>
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

export default Project;