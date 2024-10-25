import PropTypes from "prop-types";
import React from "react";

export default function Card( props ) {
    return (
        
            
            <div className="card m-4 p-0" style={{width: '18rem'}}>
                <img src={props.srcImage} style={{height:'60%'}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
                    <p className="card-text ">{props.text}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button type="button" className="btn btn-primary">Find Out More!</button>
                </div>
            </div>
    )
}
Card.prototype = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}