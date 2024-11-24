import React, { useState, useEffect } from "react";
import PageContainer from "../components/general/PageContainer";

import Header from "../components/header/MainHeader";
import TwoColumnsHero from "../components/hero/TwoColumnsHero";
import TechsUsed from "../components/techs-used/TechsUsed";

import WhatsAppButton from "../components/floating-buttons/WhatsAppButton";

const LandingPage = () => {

    return (
        <PageContainer
            title="Sebastian's Portfolio"
            description="Get to know Sebastian's work and projects."
            image="https://4kwallpapers.com/images/wallpapers/macos-monterey-stock-black-dark-mode-layers-5k-3840x2160-5889.jpg"
            url="https://sebastian-escobar-portfolio-v2.vercel.app/"
            keywords="Sebastian Escobar, Sebastian, Escobar, Portfolio, Projects, Work, Software, Hardware, Full-Stack, Developer, AI, Researcher"
        >
            <div className="landing-page">
                <WhatsAppButton />
                <main>
                    <Header />
                    <TwoColumnsHero
                        title="Full-Stack Developer & AI Researcher"
                        subtitle="Passionate and enthusiastic technologist with a deep love for both software and hardware. Highly skilled in coding and developing intelligent models."
                    />
                    <TechsUsed />
                </main>
            </div>
        </PageContainer>
    );
}

export default LandingPage;