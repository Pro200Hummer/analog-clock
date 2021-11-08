import React from 'react';
import style from './AnalogClock.module.css'
import {TimeType} from "./Clock";

export const AnalogClock = (props: TimeType) => {
    let date = new Date(props.currentTime)
    let secondRotate = (date.getSeconds()/60*360 - 90)
    let minuteRotate = (date.getMinutes()/60*360 - 90)
    let hourRotate = (date.getHours()/12*360 - 90)

    return <div className={style.container}>
        <div className={style.dial}>
            <div className={style.secondHand}
                 style={{
                transform: `rotate(${secondRotate}deg)`
            }}/>
            <div className={style.minuteHand}
                 style={{
                     transform: `rotate(${minuteRotate}deg)`
                 }}/>
            <div className={style.hourHand}
                 style={{
                     transform: `rotate(${hourRotate}deg)`
                 }}/>
        </div>

    </div>
}