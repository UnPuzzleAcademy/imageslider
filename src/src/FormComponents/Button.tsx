import React from 'react'

type propType = {
    buttonSpec:any
}

const Button = ({buttonSpec}:propType) => {
    let classString = 'px-4 py-2 border border-black';
  switch(buttonSpec.type){
    case 'btn1':
        classString += ' rounded-l-full rounded-r-full';
        break;
    default:
        classString += '';
  }
  return (
    <button id={buttonSpec.id} className={classString} onClick={buttonSpec.onClick}>{buttonSpec.label}</button>
  )
}

export default Button
