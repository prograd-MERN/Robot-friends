import React from 'react'
import CardComponents from './Components/CardComponents/CardComponents'
import { robots } from './Components/CardComponents/robots';
import'tachyons';
function App() {
  return (
<React.Fragment>
  <div className="container">
  <CardComponents id={robots[0].id} name={robots[0].name} username={robots[0].username}/>
  <CardComponents id={robots[1].id} name={robots[1].name} username={robots[1].username}/>
  <CardComponents id={robots[2].id} name={robots[2].name} username={robots[2].username}/>
  <CardComponents id={robots[3].id} name={robots[3].name} username={robots[3].username}/>
  <CardComponents id={robots[4].id} name={robots[4].name} username={robots[4].username}/>
  </div>
</React.Fragment>  )
}4
export default App