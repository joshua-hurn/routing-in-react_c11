import React from 'react';
import { Link } from "react-router-dom"

export default class SingleFilm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(film => this.setState({ film }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.film.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.film.director}</h6>
                    <p className="card-text">{this.state.film.description}</p>
                    <Link to={"/films"}>Go back</Link>
                </div>
            </div>
        )
    }
}