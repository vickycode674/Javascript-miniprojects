// import React from "react";
const card = ({ title, description, image }) => {
    return (
        <div className="card">
            {image && <img src="image" alt="title" className="card-img" />}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default card;