import { useContext, useEffect, useState } from "react";
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

    let newEnemyHealth = (state.enemyhealth - 10);
    console.log(newEnemyHealth);
    useEffect(()=>{
        dispatch({type:"SET_ENEMY_HEALTH", payload: newEnemyHealth})
    },[])

  
    return <></>;
}

export const Analyze = (params) => {

    return <>{alert("Analyzed")}</>
}

export const SelfDestruct = (params) => {
    return <></>
}

