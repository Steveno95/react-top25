import React from 'react';

import './Album.css';

const Display = props => {
    return (
        <div className="card-container">
            <h2>{props.characters.name}</h2>
            <p className="content">Album Name: {props.albums.name}</p>
            <p className="content">Artist Name: {props.albums.artistName}</p>
            <p className="content">Release Date: {props.albums.releaseDate}</p>
            <p className="content">Copyright :{props.albums.copyright}</p>
            {/* <p className="content url">{props.albums.films}</p> */}
            <p className="content">Genre: {props.albums.genres.name}</p>
            {/* <p className="content">Hair Color: {props.albums.hair_color}</p> */}
            {/* <p className="content">Height: {props.albums.height}</p> */}
            <p className="content url">{props.albums.artworkUrl100}</p>
            {/* <p className="content">Mass: {props.albums.mass}</p> */}
            {/* <p className="content">Skin Color: {props.characters.skin_color}</p> */}
            {/* <p className="content url">{props.characters.species}</p> */}
            {/* <p className="content url">{props.characters.starships}</p> */}
            {/* <p className="content url">{props.characters.vehicles}</p> */}
        </div>
    );
}


export default Display;