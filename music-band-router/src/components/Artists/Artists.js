import './artists.css';
import React from 'react';
import Artist from '../Artist/Artist';

const Artists = (props) => {
    const artists = props.artists.artists;
    // console.log(artists);
    return (
        <div className="artists-container">
            {
                artists?.map(artist => <Artist key={artist?.idArtist} artist={artist}></Artist>)
            }
            {/* <h2>{strArtist}</h2> */}
        </div>
    );
};

export default Artists;