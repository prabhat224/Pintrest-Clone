import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import PinBoard from './components/PinBoard'
function App() {
  const api_key="QuYLVUDoSbs91nkd0pptrFH0m_iRgdW7zEfTlbP3SxW4es2l6aSDI"
  const num=40;
  const [pins,setPins]=useState([])

  const getimages=(term)=>{
   fetch(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${api_key}&per_page=${num}`
    ).then((val)=>{
    return val;
    }).then((value)=>{
    const data=value.json()
    return data;
    }).then((val)=>{
    let response=val.results;
    const newPins=[
    ...response,...pins
  ]
  newPins.sort(function(a,b){
    return 0.5-Math.random();
  })
  setPins(newPins)
})
 }


 useEffect(()=>{
    getimages("random")

 },[])

  const onSearchSubmit=(term)=>{
   getimages(term);
  }


  return (
    <div>
      <Header onSearchSubmit={onSearchSubmit}  />
      <PinBoard pins={pins}/>
    </div>
  )
}

export default App

