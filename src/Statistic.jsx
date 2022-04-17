import React from 'react';

export default function Statistic(props){
    let {name, value} = props;

    return (<h3>
        {name}: {value}
    </h3>);
}