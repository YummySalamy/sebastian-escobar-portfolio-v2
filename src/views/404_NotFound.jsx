import React from "react";
import { Link } from "react-router-dom";
import "./assets/styles/Views.css";
import PageContainer from "../components/general/PageContainer";

const NotFound = ({
    title = "404",
    description = "Page Not Found",
    message = "Sorry, the page you are looking for does not exist."
}) => {

    return (
        <PageContainer
            title={title}
            description={description}
        >
            <div className="not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>{message}</p>
                <button
                    onClick={() => window.history.back()}
                >Go back to previous page</button>
            </div>
        </PageContainer>
    )

}

export default NotFound;