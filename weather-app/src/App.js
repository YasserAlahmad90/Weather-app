import React,{Component} from 'react'
import './App.css';
import WeatherList from './components/WeatherList';
import WeatherForm from './components/WeatherForm';
//import axios from 'axios'
/*const link='http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44'*/
const API_KEY='439bfb97ab2e445f59d6bc88e1aaf1da'
class App extends Component{
  state={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  /*GetWeather=(e)=>{
e.preventDefault();
const city=e.target.city.value
const country=e.target.country.value
console.log(city,country)
console.log('weather')

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2${country}&appid=${API_KEY}`).then(res=>{
  console.log(res)
  console.log(res.data)
  this.setState({data_api:res.data})

})
  }*/

  /* http://api.openweathermap.org/data/2*/

  GetWeather=async(e)=>{
    e.preventDefault();
const city=e.target.elements.city.value
const country=e.target.elements.country.value
console.log(city,country)
const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}+&appid=${API_KEY}`)
const data=await api.json()
console.log(data)

if(city && country){
  this.setState({
    tempreature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:''
  })
 
}
else{
   this.setState({
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'Please Enter Data'
   }) 
}




  }
  render(){
    
    return (
      <div className="wrapper">
        <div className='form-container'>
          <h2>Weather App</h2>
        <WeatherForm GetWeather={this.GetWeather}/>
        <WeatherList tempreature={this.state.tempreature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
        </div>

        <div>
        </div>
      </div>
    );
  }
  }


export default App;
