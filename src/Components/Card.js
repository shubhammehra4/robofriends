import React from "react";

function Card({ id, name, email }) {
    return (
        <div className="tc bg-light-green dib pa3 ma4 grow br3 bw2 shadow-5">
            <img
                className="card-image"
                src={`https://robohash.org/${id}?200x200`}
                alt="Robots"
            />
            <div className="card-content">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
