import './artistDetails.css';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import useLoadedData from '../../hooks/useLoadedData';
import { Link } from 'react-router-dom';

const ArtistDetails = () => {
    const {artistID} = useParams();
    const url = `https://theaudiodb.com/api/v1/json/1/artist.php?i=${artistID}`;
    const [data] = useLoadedData(url)
    const {strArtistThumb, strArtist, strBiographyEN, strCountry, strCountryCode, strFacebook, strGender, strGenre, strLocked, strTwitter, strWebsite} = data?.artists?.[0] || {}
    
    const history = useHistory();
    const handleHome = () => {
        history.push('/home')
    }

    return (
        <div>
            <h2>{strArtist} <small><i>from <u>{strCountry}({strCountryCode})</u></i></small></h2>
            <button onClick={handleHome}>Go Home</button>     
            <p>Gender: {strGender}</p>
            <p>Song Category: {strGenre}</p>
            <p>Availablity: {strLocked}</p>
            <p>Biography: {strBiographyEN}</p>
            <a href={strFacebook}>Facebook</a>
            <a href={strTwitter}>Twitter</a>
            <a href={strWebsite}>Original WebSite</a>
            <img src={strArtistThumb} alt="" />
        </div>
    );
};

export default ArtistDetails;


