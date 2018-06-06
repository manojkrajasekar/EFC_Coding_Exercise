import React, {Component} from 'react';
import './MovieCard.css';


class MovieCard extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="movie-card-container">
				<div className="movie-card">	
					<div className="movie-card-title-container">
						<div className="movie-card-title">
							{this.props.data.Title}
						</div>
					</div>
					<div className="movie-details-container">	
						<div className="movie-poster" style={ { backgroundImage: `url(${this.props.data.Poster})` }}>
						</div> 
						<div className ="movie-details">
							<div className="movie-detail-title">
								<span className="detail-title">Released:</span> 
								<span className="movie-detail-value">{this.props.data.Year}</span>
							</div>
							<div className="movie-detail-title">
								<span className="detail-title">imdbID:</span> 
								<span className="movie-detail-value">{this.props.data.imdbID}</span>
							</div>
							<div className="movie-detail-title">
								<span className="detail-title">movie:</span> 
								<span className="movie-detail-value">{this.props.data.imdbID}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;