import React from 'react'
 const WeatherForm =(props)=>{
        return(
            <form onSubmit={props.GetWeather}>
                <input type='text' placeholder='City.........' name='city'/>
                <input type='text' placeholder='Country.......' name='country'/>
                <button>Get Weather</button>
            </form>
            
        )
    }

export default WeatherForm;