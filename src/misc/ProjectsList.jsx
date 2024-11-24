import { FaReact } from "react-icons/fa6";
import { FaNodeJs, FaWhatsapp, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiArduino, SiFirebase, SiGooglecloud, SiJavascript, SiTensorflow, SiTailwindcss, SiCss3 } from "react-icons/si";

import FreshPlaceImage from '../assets/mockups/fresh-place.png';
import SiriusImage from '../assets/mockups/sirius-mockup.png';
import ClassifierImage from '../assets/mockups/image-classifier.png';
import NubotImage from '../assets/mockups/nubot-mockup.png';
import Aurora from '../assets/mockups/Aurora.png';
import EclipseImage from '../assets/mockups/eclipse-mockup.png';
import RetroModernMaketPlaceImage from '../assets/mockups/retromodern-marketplace-mockup.png';
import DataPathImage from '../assets/mockups/datapath-e-learning-mockup1.png';
import DataPathSecondImage from '../assets/mockups/datapath-e-learning-mockup2.png';
import DataPathLandingImage from '../assets/mockups/datapath-landing-mockup.jpeg';
import JewerlyShopImage from '../assets/mockups/jewerly-shop-mockup.jpg';
import SiriusLandigPageImage from '../assets/mockups/sirius-landing-page-mockup1.png';
import SiriusLandigPageSecondImage from '../assets/mockups/sirius-landing-page-mockup2.png';

const projects = [
    {
        id: 10,
        title: 'Datapath Web',
        description: 'A web application that showcases various tech courses. It is a platform for learning and testing.',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />, <SiFirebase />, <SiGooglecloud />, <DiMysql />],
        path: 'https://datapath.ai',
        image: DataPathLandingImage,
    },
    {
        id: 2,
        title: 'Fresh Place',
        description: 'A web application of a company distributing fresh groceries.',
        path: 'https://fresh-place.com',
        techs: [<FaReact />, <FaNodeJs />, <SiTailwindcss />],
        image: FreshPlaceImage,
    },
    {
        id: 3,
        title: 'SIRIUS',
        description: 'A muti-platform application for physics studies and simulations.',
        path: 'https://github.com/jesusckantillo/expofisica-front/tree/dev_yummy',
        techs: [<FaReact />, <FaNodeJs />, <SiJavascript />, <SiArduino />],
        image: SiriusImage,
    },
    {
        id: 4,
        title: 'AI Image Classifier',
        description: 'A Python application that uses machine learning to classify images.',
        path: 'https://github.com/YummySalamy/Image_classifier',
        techs: [<FaPython />, <SiTensorflow />],
        image: ClassifierImage,
    },
    
    {
        id: 5,
        title: 'nubot.io',
        description: 'A web application that allows users to auto-manage their companies with AI.',
        path: 'https://nubot.io',
        techs: [<FaReact />, <FaNodeJs/>,  <FaPython />, <SiFirebase />, <SiGooglecloud />, <SiTensorflow />, <SiTailwindcss />, <SiCss3 />],
        image: NubotImage,
    },
    {
        title: 'SIRIUS Landing Page',
        description: 'The official landing page for the SIRIUS project.',
        path: 'https://sirius-landing-page.vercel.app/',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
        image: SiriusLandigPageImage,
        second_image: SiriusLandigPageSecondImage,
    },
    {
        id: 6,
        title: 'RetroModern Marketplace',
        description: 'A web applicaction that allows users to buy and sell retro and modern items.',
        path: 'https://retromodern-market-place.vercel.app/',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
        image: RetroModernMaketPlaceImage,
    },
    {
        id: 7,
        title: 'Datapath e-learning',
        description: 'A web application that showcases various tech courses.',
        path: 'https://datapath-e-learning-tests.vercel.app/',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />, <SiFirebase />, <SiGooglecloud />, <DiMysql />],
        image: DataPathImage,
        second_image: DataPathSecondImage,
    },
    {
        id: 8,
        title: 'Jewerly Shop Landing',
        description: 'A minimalistic landing page for a jewerly shop.',
        path: 'https://jewerly-shop-landing.vercel.app/',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
        image: JewerlyShopImage,
    },
    {
        id: 9,
        title: 'Aurora',
        description: 'Coming soon.',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
        path: 'https://aurora-insight.vercel.app/',
        image: Aurora,
    },
    {
        id: 10,
        title: 'Eclipse',
        description: 'A web application that is designed to be a an all-in-one platform administrator.',
        techs: [<FaNodeJs />, <SiFirebase />, <SiGooglecloud />, <DiMysql />, <FaWhatsapp />],
        path: 'https://eclipse-theta.vercel.app/',
        image: EclipseImage,
    },
];

export default projects;