import React, { useState } from "react";

const Denguta = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(updateTime,);

    return (
        <>
        <h1>{time}</h1>
        </>
    )
}


export default Denguta;