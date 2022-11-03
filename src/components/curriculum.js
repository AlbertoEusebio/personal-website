import React from "react";

class Projects extends React.Component{

    render(){

        return (
        <>
        <div className="card-group">
        {
            this.props.card.map(card_i => (
                <div className="card" key={card_i.id}>
                <img src={card_i.img} className="card-img-right" alt={card_i.alt} />
                <div className="card-body">
                <h5 className="card-title"> {card_i.title} </h5>
                <p className="card-text"> {card_i.text} </p>
                </div>
                <div className="card-footer">
                <small className="text-muted">Last updated on 03/11/2022 </small>
                </div>
            </div>))
        }
        </div>
        </>
        );

    }
}

export default Projects;