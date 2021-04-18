import {useEffect, useState} from 'react';
import './App.css';
import WebHits from './WebHits';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  
  function handleHeight(e){
    let h = e.target.value;
    setHeight(h);
  }
  function handleWeight(e){
    let w = e.target.value;
    setWeight(w);
  }

  useEffect(() => {
    let bm = (weight/(height*2))*100;
    setBMI(bm.toFixed(2));
  },[height,weight]);

  return (
    <div className="App">
      <div className ="App-header">
          <h1>BMI Calculator</h1>
          <p>Height in cms</p><input type="number" onChange={handleHeight} />
          <p>Weight in Kilograms</p><input type="number" onChange={handleWeight} />
          <h2>BMI : {bmi}</h2>
          <WebHits />
      </div>
    </div>
  );
}

export default App;
