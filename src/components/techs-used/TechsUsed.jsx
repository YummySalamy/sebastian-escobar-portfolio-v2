import React, { useState, useEffect } from 'react';
import Grid from '../Grid';

import { FaReact } from "react-icons/fa6";
import { FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiArduino, SiFirebase, SiGooglecloud, SiJavascript, SiTensorflow, SiTailwindcss, SiCss3 } from "react-icons/si";

const TechsUsed = () => {
    const techs = [
        {
            name: 'React',
            logo: <FaReact />,
        },
        {
            name: 'Node.js',
            logo: <FaNodeJs />,
        },
        {
            name: 'Tailwind CSS',
            logo: <SiTailwindcss />,
        },
        {
            name: 'Javascript',
            logo: <SiJavascript />,
        },
        {
            name: 'Arduino',
            logo: <SiArduino />,
        },
        {
            name: 'Firebase',
            logo: <SiFirebase />,
        },
        {
            name: 'Google Cloud',
            logo: <SiGooglecloud />,
        },
        {
            name: 'MySQL',
            logo: <DiMysql />,
        },
        {
            name: 'Python',
            logo: <FaPython />,
        },
        {
            name: 'Tensorflow',
            logo: <SiTensorflow />,
        },
        {
            name: 'CSS3',
            logo: <SiCss3 />,
        },
        {
            name: 'Database',
            logo: <FaDatabase />,
        },
    ];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    return (
        <section className='techs-used'>
            <h2>My Relevant Skills</h2>
            <Grid columns={isMobile ? 4 : 12}>
                {techs.map((tech, index) => (
                    <div key={index} className='tech'>
                        {tech.logo}
                    </div>
                ))}
            </Grid>
        </section>
    );
};

export default TechsUsed;