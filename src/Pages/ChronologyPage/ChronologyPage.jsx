import React, { useEffect, useState } from 'react';
import { API } from '../../shared/consts/api.consts';

export function ChronologyPage () {

    const [timeline, setTimeline] = useState([]);

    const getChronology = () => {
        
        API.get('/show/characters').then((res) => {
            setTimeline(res.data)
            console.log(res.data); 
        });
    }

    useEffect(getChronology, []);

    return (
    <div>
        {timeline.map((item, i) =>

          <div key={i}>
            {/* <p>{item.age}</p> */}
            <p>{item.name}</p>
            <img src="{item.image}"/>
          </div>
        )}  
    </div>
    )
}