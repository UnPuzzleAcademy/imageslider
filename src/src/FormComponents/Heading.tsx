import React, { useState } from 'react'
import { globalStateObj } from '../App';

type propType = {
    headingSpec:any;
}

const Heading = ({headingSpec}:propType) => {
  let [count, setCount] = useState(0);
  globalStateObj[headingSpec.id] = {countState:{count, setCount}};
  let classString = 'text-xl w-full border border-black py-4 px-2';
  switch(headingSpec.type){
    case 'type1':
        classString += ' text-center';
        break;
    default:
        classString += '';
  }
  return (
    <h1 className={classString} id={headingSpec.id} onMouseOver={headingSpec.onHover}>{headingSpec.text} {count}</h1>
  )
}

export default Heading
