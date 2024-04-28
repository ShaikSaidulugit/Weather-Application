import { useState } from 'react'
import React from 'react'
import './style.css'
import pic from './images/weather.png'
export default function Comp1() {
const [data,setData]=useState([])
const [search,setSearch]=useState('')
const [city,setCity]=useState('')
const [humidity,setHumidity]=useState('')
const [speed,setSpeed]=useState('')
const Submit=(e)=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b23abb51fe8ac483b6681e6d42e8247c`)
  .then(res=>res.json())
  .then((data)=>{
    let kelvin=data.main.temp
    let celcius=kelvin-273.4
    setData(Math.round(celcius))
    setCity(data.name)
    setHumidity(data.main.humidity)
    setSpeed(data.wind.speed)
  })

}
const handler=(e)=>{
  setSearch(e.target.value)
  
}

  return (
    <div id='main'>
      <h1>Serach Weather where you want</h1>
      <form>
    <input type='text' placeholder='Search City here' onChange={handler}/>&nbsp;
    <i class="fa-brands fa-searchengin" onClick={Submit}></i>
    </form>
    
    <img src={pic} alt=''/>
    <br/>
    <br/>
    <h1>{data}<sup>0</sup>C</h1>
    <h1>{city}</h1>
    <div className='humidity'>
      <div id='first'><i class="fa-solid fa-water"></i> {humidity}%
      <br/>
      <h3>Humidity</h3>
      </div>
      <div id='second'><i class="fa-solid fa-wind"></i> {speed} km/h
      <br/>
      <h3>Wind Speed</h3>
      </div>
    </div>
    </div>
  )
}
