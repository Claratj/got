import React, { useEffect, useState } from 'react';
import { API } from '../../shared/consts/api.consts';


export function ChronologyPage () {

    const [timeline, setTimeline] = useState([]);

    //establecemos por defecto el orden en false
    let ascendingOrder = false;

    const getChronology = () => {
        //llamada a la api
        API.get('/show/characters').then((res) => {

            //recoger datos + filter
            const youngestToOldest = res.data.filter((character) => {
              //condiciones del filter
              if (character.age !== undefined && character.age !== null) {

                if (
                    character.age.age !== undefined &&
                    character.age.age !== null &&
                    character.age.age < 100 
                ) {
                  return character;
                }
              }
            });

            //ordenacion de los datos
            youngestToOldest.sort(function (a, b) {
                ascendingOrder = true;
                return a.age.age - b.age.age;
            });

            //introducir datos en el array timeline
            setTimeline(youngestToOldest);
            console.log(youngestToOldest);
        });
    }
    
    const reverseTimelineOrder = () => {

      //primero hacemos una copia del array de timeline
        const timelineCopy = [...timeline];

        //si la edad es 16, es decir el pers mas joven por lo que estan de menor a mayor => ORDENAMOS DE MAYOR A MENOR
        if (timeline[0].age.age === 16 ) {
          ascendingOrder = false; //PONEMOS EL ORDEN A FALSE PORQUE EN LA API PUSIMOS QUE DE MENOR A MAYOR SERIA TRUE
          timelineCopy.sort(oldestToYoungest);
          setTimeline(timelineCopy);
        } else { //sino, es dicir si el orden es de mayor a menor => ORDENAMOS DE MENOR A MAYOR
          ascendingOrder = true;
          timelineCopy.sort(youngestToOldest);
          setTimeline(timelineCopy);
        }
    }

    const oldestToYoungest = (a, b) => {
      return b.age.age - a.age.age;
    }

    const youngestToOldest = (a, b) => {
      return a.age.age - b.age.age;
    }

    useEffect(getChronology, []);

 
      return (
        <div>

          <button onClick={reverseTimelineOrder}>ORDENAR EDAD</button>
            {timeline.map((item, i) =>
              <div key={i}>
                <p> {item.age && item.age.age} </p>
                <p>{item.name}</p>
                <img src="{item.image}"/>
              </div>
            )}

        </div>
        )
}
