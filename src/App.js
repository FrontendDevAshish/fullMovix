
import { useEffect } from 'react';
import './App.css';
import { fetchDataFromApi } from './Utils/api';


function App() {
  
  

  const apiTest =()=>{
    const{data} = fetchDataFromApi('/movie/popular').then((res)=>{console.log(res)})
  }
  useEffect(()=>{apiTest()},[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
