import React, { useContext, useEffect, useState } from 'react';
import { API } from '../../shared/consts/api.consts';
import { LoadingContext } from '../../core/components/Loading/contexts/LoadingContext';
import { Header } from '../../core/components/Header/Header';
import { Footer } from '../../core/components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Chronology.scss';

export function ChronologyPage(props) {

  const { setIsLoading } = useContext(LoadingContext);

  const [timeline, setTimeline] = useState([]);

  const [t, i18n] = useTranslation(['translation']);

  const changeLanguage = code => {
    i18n.changeLanguage(code);
    console.log(code);
  }

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
    if (timeline[0].age.age === 16) {
      setAscendingOrder(false); //PONEMOS EL ORDEN A FALSE PORQUE EN LA API PUSIMOS QUE DE MENOR A MAYOR SERIA TRUE
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
    <div className="gallery-container">
      <Header house={true} fnLanguage={changeLanguage} />
      {/* <span onClick={reverseTimelineOrder} className={ascendingOrder ? "icon-circle-up b-icon b-icon--circle" :
        "icon-circle-down b-icon b-icon--circle"}>
      </span> */}
      {/*<div className="gallery gallery_chr">
        <div className="chronology">

          {timeline.map((item, i) =>

            <div className="chronology__card" key={i} style={
              i % 2 ? { "margin-top": "10.5rem", } :
                { "margin-top": "0px", }}>
              <p> {item.age && item.age.age} </p>
              <p>{item.name}</p>
              <img className="chronology__card__img" src={item.image} alt={item.name} />
            </div>

          )}


        </div>
      </div>
      <div className="timeline"></div> */}

      <div className="gallery gallery_chr">
      <div className="chronology">
      
      <span onClick={reverseTimelineOrder} className={ascendingOrder ? "icon-circle-up b-icon b-icon--circle" :
        "icon-circle-down b-icon b-icon--circle"}>
      </span>
        <VerticalTimeline>

          {timeline.map((item, i) =>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ "background-color": '#000', color: '#fff' }}
              contentArrowStyle={{ borderRight: '0px solid  #fff' }}
              iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            >          
              <p>{item.age && item.age.age}</p>
              <p>{item.name}</p>
              <img className="chronology__card__img" src={item.image} alt={item.name} />

            </VerticalTimelineElement>)}

        </VerticalTimeline>
      </div>
      </div>

      <Footer />
    </div>
  )
}