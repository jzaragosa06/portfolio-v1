import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageComponent = () => (
    <motion.div
        className="flex items-center justify-center h-full bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
    >
        <img
            src="https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg"
            alt="Example"
            className="w-64 h-64 object-contain"
        />
    </motion.div>
);

const SkillsComponent = () => (
    <motion.div
        className="flex items-center justify-center h-full bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <h1 className="font-bold text-gray-800">Tech Stack</h1>
    </motion.div>
);

function Animated()
{
    const [showImage, setShowImage] = useState(true);

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setShowImage((prev) => !prev);
        }, 4000); // change every 4 seconds

        return () => clearInterval(interval); // cleanup
    }, []);


    return (
        <AnimatePresence mode="wait">
            {showImage ? <ImageComponent key="image" /> : <SkillsComponent key="text" />}
        </AnimatePresence>
    );
}


export default Animated; 