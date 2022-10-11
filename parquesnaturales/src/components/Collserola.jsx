import React from 'react'
import Traductor from "./Traductor.js";
import {useContext} from 'react';
import Collserola.img from "../../img/collserola.jpeg" ;


function Collserola() {
    const Traductor2 = useContext(Traductor);

  return (
    <div>
        <h1>{Traductor2.traduciendo('nombre','1')} </h1>
        <p> {Traductor2.traduciendo('texto','1')}</p>
        <img src={Collserolaimg}/>

    </div>
  )
}

export default Collserola;