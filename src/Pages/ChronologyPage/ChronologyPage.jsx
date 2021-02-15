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

     function funcioX () {
       
     }

    useEffect(getChronology, []);

 
      return (
        <div>

          <button onClick={funcioX}></button>
            {timeline.filter(item => item.age && item.age.age).map((item, i) =>
              <div key={i}>
                <p> {item.age && item.age.age} </p>
                <p>{item.name}</p>
                <img src="{item.image}"/>
              </div>
            )}

        </div>
        )
}
