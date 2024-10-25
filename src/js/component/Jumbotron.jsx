import React from "react";
import PropTypes from "prop-types";

export default function Jumbotron (props) {
    return(
        <div className="container bg-opacity-10 bg-secondary rounded pb-5">
        <div className="jumbotron mx-4">
            <h1 className="display-4">{props.title}</h1>
            <p>{props.text} </p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" role="button">Call to action!</a>
                </p>
                </div>
        </div>
    )}

    Jumbotron.prototype = {
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }