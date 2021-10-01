import React from 'react';
import useLoadedData from '../../hooks/useLoadedData';

const Home = () => {
    const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay`;
    const [artist] = useLoadedData(url);
    console.log(artist);
    return (
        <div>
            it home
        </div>
    );
};

export default Home;