import './App.css'
import Group from './FormComponents/Group'

export let globalStateObj:any = {};

let headingSpec1 = {
  elementType:'Heading',
  id:'LoginHeading1',
  text:'Heading 1 - Count: ',
  type:'type1'
}

let headingSpec2 = {
  elementType:'Heading',
  id:'LoginHeading2',
  text:'Heading 2 - Count: ',
  type:'',
  onHover: function(){
    console.log('Hovered');
  }
}

let btnSpec1 = {
  elementType:'Button',
  id:'btn1',
  label:'Click me',
  type:'btn1',
  onClick:function(e:any){
    e.preventDefault();
    let {countState} = globalStateObj[headingSpec2.id];
    countState.setCount(countState.count+1);
  }
}

let btnSpec2 = {
  elementType:'Button',
  id:'btn2',
  label:'Click me too',
  type:'btn2',
  onClick:function(e:any){
    e.preventDefault();
    let {countState} = globalStateObj[headingSpec1.id];
    countState.setCount(countState.count+1);
  }
}

let groupSpec1 = {
  elementType:'Group',
  id:'grp1',
  elements:[headingSpec2, btnSpec1]
}

let groupSpec2 = {
  elementType:'Group',
  id:'grp2',
  elements:[headingSpec1, btnSpec2]
}

function App() {
  return (
    <>
      {/* <Login/> */}
      <div className="flex flex-col gap-4">
        <Group groupSpec={groupSpec1}/>
        <Group groupSpec={groupSpec2}/>
      </div>
    </>
  )
}

export default App
