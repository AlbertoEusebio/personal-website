import React from "react";

class Card extends React.Component{

    render(){
        return (
            <>
            <div className="card text-light mb-3" style={{width: '18rem', backgroundColor: '#061E25'}}>
                <img src={this.props.card.img} className="card-img-top" alt="Me in San Francisco" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.card.name}</h5>
                    <p className="card-text">{this.props.card.presentation}</p>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                    {
                        this.props.card.items.map(element => (
                            <li key={element.key} className="list-group-item" style={{backgroundColor: "#061E25", color: "white"}}>{element.text}</li>
                        ))
                    }
                    </ul>
                </div>
                <div className="card-body">
                    <div className="row">
                    <a href={this.props.card.linkedin} className="btn btn-primary ml-5"> Linkedin </a>
                    </div>
                    <div className="row my-2">
                    <a href={this.props.card.github} className="btn btn-outline-primary ml-2"> GitHub </a>
                    </div>
                    <div className="row my-2">
                    <a href={this.props.card.policumbent} className="btn btn-outline-success ml-2"> Policumbent </a>
                    </div>
                </div>
                </div>
            </>

        );
    }


}

export default Card;