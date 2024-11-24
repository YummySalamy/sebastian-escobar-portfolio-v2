import React, { useState } from 'react';
import PageContainer from '../components/general/PageContainer';
import Header from '../components/header/MainHeader';
import Grid from '../components/Grid';
import Card from '../components/cards/Card';
import Inspected from '../components/inspector/Inspected';
import projects from '../misc/ProjectsList';
import WhatsAppButton from '../components/floating-buttons/WhatsAppButton';
import GitHubInfo from '../components/extra/GitHubInfo';


const MyProjects = () => {
    const [projectsList] = useState(projects);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <PageContainer
            title="Sebastian's Portfolio"
            description="Get to know Sebastian's work and projects."
            image="https://4kwallpapers.com/images/wallpapers/macos-monterey-stock-black-dark-mode-layers-5k-3840x2160-5889.jpg"
            url="https://sebastian-escobar-portfolio-v2.vercel.app/"
            keywords='Sebastian Escobar, Sebastian, Escobar, Portfolio, Projects, Work, Software, Hardware, Full-Stack, Developer, AI, Researcher'
        >
            <WhatsAppButton />
            <div className='projects'>
                <Header />
                <h1>Featured Projects</h1>
                <Grid>
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
                    <Card addStyles={{ backgroundColor: '#24292e', width: '300px' }}>
                        <GitHubInfo />
                    </Card>
                </Grid>
                { selectedProject && 
                    <Inspected project={selectedProject} setSelectedProject={setSelectedProject} />
                }
            </div>
        </PageContainer>
    );
};

export default MyProjects;