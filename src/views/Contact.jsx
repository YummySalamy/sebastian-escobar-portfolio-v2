import React from 'react';
import PageContainer from '../components/general/PageContainer';
import Header from '../components/header/MainHeader';
import Grid from '../components/Grid';
import Card from '../components/cards/Card';
import WhatsAppButton from '../components/floating-buttons/WhatsAppButton';
import MyCV from '../assets/MyCV.pdf';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const contactMethods = [
        {
            name: 'Email',
            icon: <FaEnvelope />,
            link: 'mailto:carsebastian1013@gmail.com',
            description: 'Send me an email!',
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp />,
            link: 'https://wa.me/573216371230',
            description: 'Chat with me on WhatsApp.',
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/sebastian-escobar-55b5b9256/',
            description: 'Connect with me on LinkedIn.',
        },
        {
            name: 'GitHub',
            icon: <FaGithub />,
            link: 'https://github.com/YummySalamy',
            description: 'Check out my GitHub projects.',
        },
        {
            name: 'Phone',
            icon: <FaPhone />,
            link: 'tel:+573216371230',
            description: 'Give me a call!',
        },
    ];

    return (
        <PageContainer
            title="Contact Me"
            description="Get in touch with me through various platforms or download my CV."
            image="https://4kwallpapers.com/images/wallpapers/macos-monterey-stock-black-dark-mode-layers-5k-3840x2160-5889.jpg"
            url="https://sebastian-escobar-portfolio-v2.vercel.app/"
            keywords='Sebastian Escobar, Sebastian, Escobar, Portfolio, Projects, Work, Software, Hardware, Full-Stack, Developer, AI, Researcher'
        >
            <WhatsAppButton />
            <div className="contact">
                <Header />
                <h1>Contact Me</h1>
                <p>
                    I'm always excited to connect with new people, whether it's for collaborations, 
                    work opportunities, or just a friendly chat. Feel free to reach out to me through 
                    any of the platforms below or download my CV to learn more about my professional journey.
                </p>

                {/* Button to Download CV */}
                <div className="download-cv">
                    <button
                        className="btn btn-primary"
                        onClick={() => window.open(MyCV)}
                    >
                        View My CV
                    </button>
                    <button
                        href={MyCV}
                        download="Sebastian-Escobar_CV.pdf"
                        className="btn btn-primary"
                    >
                        Download My CV
                    </button>
                </div>

                {/* Contact Methods */}
                <h2>Let's Connect</h2>
                <Grid>
                    {contactMethods.map((method, index) => (
                        <Card
                            key={index}
                        >
                            <div className="icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                {method.icon}
                            </div>
                            <h3>{method.name}</h3>
                            <p>{method.description}</p>
                            <a
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-link"
                            >
                                Go to {method.name}
                            </a>
                        </Card>
                    ))}
                </Grid>
                <p className="contact-note">
                    :) Looking forward to hearing from you!
                </p>
            </div>
        </PageContainer>
    );
};

export default Contact;
