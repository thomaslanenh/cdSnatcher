import { useContext, useState } from "react";
import {Context} from '../Store';



export const Investigate =(params)=>{
    window.open('/PMScenes/Investigate.html')
    return (
        <>
            {alert("Investigion Complete.")}
        </>
    )
}

export const Shoot = (params) => {

    const [state, dispatch] = useContext(Context);

    return <></>
}

export const Analyze = (params) => {

    return <>{alert("Analyzed")}</>
}

export const SelfDestruct = (params) => {
    return <></>
}

