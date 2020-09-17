import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Categories from './Categories';
let category = require('./assets/catalog.json');
function App() {
  const [location,setLoation] = useState([]);
  const [dropDownValue, setDropdownValue] = useState({})

  useEffect(()=>{
    const temp =[];
    if(category.data.locations.length>0){
      category.data.locations.forEach(element => {
        temp.push({value:element.name,label:element.name});
     });
     setLoation(temp)
    }
 
  },[])
  const dropdownChange = (e)=>{
     setDropdownValue(e)
  }

  return (
    <Router>
      <div>
        <Header location ={location}  onChange={(e)=>dropdownChange(e)}/>
        <Switch>
          <Route path="/equpment">
          <Categories  dropDownValue={dropDownValue} data={category.data.locations}/>
          </Route>
          <Route path="/">
            <Categories  dropDownValue={dropDownValue} data={category.data.locations}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;