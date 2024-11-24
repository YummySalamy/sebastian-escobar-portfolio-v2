import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { handleOpenWhatsapp } from "../../scripts/communication";
import './assets/styles/FloatingButtons.css';

const WhatsAppButton = () => {
    return (
        <div className="floating-buttons">
            <button
                className="floating-button "
                onClick={() => handleOpenWhatsapp({ message: "Hello, I'm interested in your services." })}
                title="Contact me via WhatsApp"
                aria-label="Contact me via WhatsApp"
            >
                <FaWhatsapp className="whatsapp" />
            </button>
        </div>
    );
}

export default WhatsAppButton;