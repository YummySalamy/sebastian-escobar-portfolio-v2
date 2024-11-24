import React, { useState, useEffect } from "react";
import PageContainer from "../components/general/PageContainer";

import Header from "../components/header/MainHeader";
import TwoColumnsHero from "../components/hero/TwoColumnsHero";

import WhatsAppButton from "../components/floating-buttons/WhatsAppButton";

const LandingPage = () => {

    return (
        <PageContainer
            title="Sebastian's Portfolio"
            description="Get to know Sebastian's work and projects."
        >
            <div className="landing-page">
                <WhatsAppButton />
                <main>
                    <Header />
                    <TwoColumnsHero
                        title="Welcome to Sebastian's Portfolio"
                        subtitle="Get to know Sebastian's work and projects."
                    />
                    
                </main>
            </div>
        </PageContainer>
    );
}

export default LandingPage;