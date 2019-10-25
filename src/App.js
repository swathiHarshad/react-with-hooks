import React,{useEffect, useState} from 'react'
import './App.css'
import MainComponent from './MainComponent/MainComponent'

function App () {
  const [searchData, searchFunc] = useState('')
  const [url, Seturl] = useState('http://www.omdbapi.com/?apikey=a184ae48&s=harry')
  const [Data , responseData] = useState('')

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((success) => { responseData(success.Search) } )
    .catch((error)=>{ console.log(error)});
  },[url])

  function APIcall() {
    if(searchData !== '') {
      url[0].split('&')
      Seturl(url.split('&')[0] + '&s=' + searchData)
    }
  }

  return (
    <div className='App'>
      <div id='header' className='TextAlignCenter' >
        <h4>HOOKED</h4>
      </div>
      <div className='searchDiv TextAlignCenter'>
        <div className='searchInputDiv'>
          <input type='text' value={searchData} onChange={(e)=>searchFunc(e.target.value)} className='inputSearch'/>
        </div>
        <input type='button' placeholder='Search' onClick={APIcall} value='Search' />
      </div>
      <div className ='imageComponent'>
      {
        (Data)? (
          Data.map((searchItem, index)=>(
            <MainComponent key={index} data = {searchItem} />
          ))
        )
        : (<div>Data not availabile</div>)
      }
      </div>
    </div>
  )
}

export default App
