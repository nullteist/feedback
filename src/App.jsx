import React, {useState} from 'react';

import Button from './Button';
import Statistic from './Statistic';


export default function App(props){

    let [good, setGood] = useState(0);
    let [bad, setBad] = useState(0);
    let [neutral, setNeutral] = useState(0);

    let [isFeedback, setIsFeedBack] = useState(false);

    return ( <div>
    <h1>Feedback app</h1>
    <Button value = "Good" onClick={()=>setGood(++good)} />

    <Button value = "Neutral" onClick={()=>setNeutral(++neutral)} />

    <Button value = "Bad" onClick={()=>setBad(++bad)} />

    <h1>Statistics</h1>


    {good+bad+neutral === 0 && <h2>No feedback given</h2> }

     {good+bad+neutral >= 1 &&   <div>
    <Statistic name="Good" value={good} />
    <Statistic name="Neutral" value={neutral} />
    <Statistic name="Bad" value={bad} />

    <Statistic name="All" value={good+bad+neutral} />

    <Statistic name="Positive" value={good+bad+neutral !== 0 ? (good+neutral)/(good+bad+neutral) : "Unknown"} />

    </div> }
    </div> );
}