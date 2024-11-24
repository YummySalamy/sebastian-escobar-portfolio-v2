import React, { useState } from 'react';
import PageContainer from '../components/general/PageContainer';
import Header from '../components/header/MainHeader';
import Grid from '../components/Grid';
import Card from '../components/cards/Card';
import Inspected from '../components/inspector/Inspected';
import projects from '../misc/ProjectsList';

const MyProjects = () => {
    const isMobile = window.innerWidth < 768;
    const [projectsList] = useState(projects);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <PageContainer
            title="Sebastian's Portfolio"
            description="Get to know Sebastian's work and projects."
        >
            <div className='projects'>
                <Header />
                <h1>Featured Projects</h1>
                <Grid columns={isMobile ? 1 : 3}>
                    { projectsList.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            path={project.path}
                            button={project.path ? true : false}
                            buttonAction={() => setSelectedProject(project)}
                            techs={project.techs}
                        />
                    ))}
                </Grid>
                { selectedProject && 
                    <Inspected project={selectedProject} setSelectedProject={setSelectedProject} />
                }
            </div>
        </PageContainer>
    );
};

export default MyProjects;