import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [excuses, setExcuses] = useState("");
   
  const fetchData = (type) =>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`)
    .then((res)=>{
      setExcuses(res.data[0].excuse);
      console.log(res.data);
    });
  };

 

  return (
    <div className="App">

      <h1>Excuse Generator</h1>

      <Button variant="primary" value="family" onClick={() => fetchData("family")} >Family</Button>
      <Button variant="secondary" onClick={() => fetchData("office")} >Office</Button>
      <Button variant="success" onClick={() => fetchData("college")} >College</Button>
      <Button variant="warning" onClick={() => fetchData("party")} >Party</Button>
      <Button variant="danger" onClick={() => fetchData("developers")} >Developers</Button>
      <Button variant="info" onClick={() => fetchData("funny")} >Funny</Button>

      <p>{excuses}</p>
       
    </div>
  );
 
}


export default App;


 