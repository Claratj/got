import React, { useContext, useEffect, useState } from 'react';
import { API } from '../../shared/consts/api.consts';
import { LoadingContext } from '../../core/components/Loading/contexts/LoadingContext';
import './Chronology.scss';


export function ChronologyPage () {

    const {setIsLoading} = useContext(LoadingContext);

    const [timeline, setTimeline] = useState([]);

    //establecemos por defecto el orden en false
    let [ascendingOrder, setAscendingOrder] = useState(false);

    const getChronology = () => {

        setIsLoading(true);
        //llamada a la api
        API.get('/show/characters').then((res) => {
            setIsLoading(false)
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
                setAscendingOrder(true);
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
          setAscendingOrder (false); //PONEMOS EL ORDEN A FALSE PORQUE EN LA API PUSIMOS QUE DE MENOR A MAYOR SERIA TRUE
          timelineCopy.sort(oldestToYoungest);
          setTimeline(timelineCopy);
        } else { //sino, es dicir si el orden es de mayor a menor => ORDENAMOS DE MENOR A MAYOR
          setAscendingOrder(true);
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
      <div className="c-chronology">

        <div className="scroll" style={{width: '80%', margin: 'auto'}}>

          <button onClick={reverseTimelineOrder}>{ascendingOrder ? 'Flecha arriba' : 'Flecha abajo'}</button>

            {timeline.map((item, i) =>
              <figure className="c-chronology-character" key={i}>
                <p> {item.age && item.age.age} </p>
                <p>{item.name}</p>
                <img src={item.image}/>
              </figure>
            )}

          </div>

      </div>
        )
}
