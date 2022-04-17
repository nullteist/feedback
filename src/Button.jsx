import React from 'react';

export default function App(props){
    let {value, onClick} = props;

    return(
        <button onClick={onClick}>{value}</button>
    )
}