import React, { useEffect, useState } from 'react';

const TimeRightNow = () => {

    let hour = (new Date().getHours());
    let minute = (new Date().getMinutes());
    let sec = (new Date().getSeconds());
    let curTime = [hour, minute, sec];

    const [nowTime,setTime] = useState(curTime);

    useEffect(()=>{
        let hour = (new Date().getHours());
    let minute = (new Date().getMinutes());
    let sec = (new Date().getSeconds());
    let curTime = [hour, minute, sec];
        setTime(curTime)
    },[nowTime])
    return (
        <div style={{backgroundColor:"pink", padding:"15px", color:"blue", fontSize:"40px"}}>
            <h3>
                <i>Current Time: <span>{nowTime[0]}</span> : <span>{nowTime[1]}</span> : <span>{nowTime[2]}</span></i>
            </h3>
        </div>
    );
};

export default TimeRightNow;