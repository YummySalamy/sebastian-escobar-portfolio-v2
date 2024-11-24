import React from "react";
import { FaGithub, FaRegStar, FaSearch } from "react-icons/fa";
import './assets/styles/Extra.css';

const GitHubInfo = () => {
    return (
        <div className="github-container">
            <div className="github-info">
                <h1>YummySalamy</h1>
                <p>Feel free to check out my GitHub repository for more projects.</p>
                <a target="_blank" rel="noreferrer" href="https://github.com/YummySalamy">
                    <button className="github-button">
                        <FaGithub /> GitHub Profile
                    </button>
                </a>
                <div className="github-icons">
                    <span className="github-icon">
                        <FaRegStar />
                        <p>Star</p>
                    </span>
                    <span className="github-icon">
                        <FaSearch />
                        <p>Search</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default GitHubInfo;