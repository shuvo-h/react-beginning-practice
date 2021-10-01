import { useEffect, useState } from 'react';

const useLoadedData = (url) => {
    const [loadedData,setLoadedData] = useState([]);
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setLoadedData(data))
    },[url])
    return [loadedData]
};

export default useLoadedData;