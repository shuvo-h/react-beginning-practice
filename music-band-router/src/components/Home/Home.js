import React, { useState } from 'react';
import './home.css';
import useLoadedData from '../../hooks/useLoadedData';
import Artists from '../Artists/Artists';

const Home = () => {
    const [searchTxt,setSearchTxt] = useState([]);
    const handleSearch = (event) =>{
        const searchValue = event.target.value;
        setSearchTxt(searchValue);
    }
    const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchTxt}`;
    const [artists] = useLoadedData(url);

    // console.log(artists);
    return (
        <div className="welcome-container">
            <h3>Welcome to</h3>
            <h1 ><i className="brand">ZorZen</i> Music Band</h1>
            <input onChange={handleSearch} type="text"  placeholder="Search artist" />
            <Artists artists={artists}></Artists>
        </div>
    );
};

export default Home;