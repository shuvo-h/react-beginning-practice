import './artist.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Artist = (props) => {
    
    const {idArtist,intFormedYear,strArtistThumb,strArtist} = props?.artist;
    // console.log(props);
    return (
        <div className="artist">
            <img src={strArtistThumb} alt="" />
            <h3><Link to={`/artist/${idArtist}`}>{strArtist}</Link> <i><small>started ({intFormedYear})</small></i></h3>
        </div>
    );
};

export default Artist;