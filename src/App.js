
import { useEffect } from 'react';
import './App.css';
import { fetchDataFromApi } from './Utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home)
  console.log(url,'shshsghsh')

  const apiTest =()=>{
    const{data} = fetchDataFromApi('/movie/popular').then((res)=>{console.log(res)
    dispatch(getApiConfiguration(res))
    })
  }
  useEffect(()=>{apiTest()},[])
  return (
    <div className="App">
     App
     {url?.total_pages}
    </div>
  );
}

export default App;
