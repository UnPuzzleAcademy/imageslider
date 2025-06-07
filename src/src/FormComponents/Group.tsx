import React, { useState } from 'react'
import Heading from './Heading';
import Button from './Button';

type propType = {
    groupSpec:any;
}
const Group = ({groupSpec}:propType) => {
  return (
    <div className="flex gap-2 flex-wrap p-2">
      {groupSpec.elements.map((element:any)=>{
        let ele;
        switch(element.elementType){
            case 'Heading':
                ele = <Heading headingSpec={element} key={element.id}/>
                break;
            case 'Button':
                ele = <Button buttonSpec={element} key={element.id}/>
                break;
            default:
                ele = null;
        }
        return ele;
      })}
    </div>
  )
}

export default Group
