import React from 'react';
import {useContext} from 'react';
import Traductor from "./Traductor.js";
import Vallvidreraimg from "../../img/vallvidrera.jpeg" ;


function Vallvidrera() {
    
    const Traductor2 = useContext(Traductor);
  return (
    <div>
    <h1>{Traductor2.traduciendo('nombre','1')} </h1>
    <p> {Traductor2.traduciendo('texto','1')}</p>
<img src={Vallvidreraimg}/>
</div>
  )
}

export default Vallvidrera