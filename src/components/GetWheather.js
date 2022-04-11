import React, {  useState } from 'react';
import climate from '../assets/img/clima.jpg'




const GetWheather = ({ weather}) => { 
    
    const tempF =`${((weather.main?.temp * 9 / 5) + 32).toFixed(2)} °F` 
    const tempC= `${(weather.main?.temp - 273.15).toFixed(2)} °C`
       
    const [temperature, setTemperature] = useState("")
         
    const changeTemperature = () => {

        if (temperature === tempC) {
            setTemperature(tempF)
        } else { setTemperature(tempC) }

    }
     console.log(tempC)
   
      
        return (
            <div className='card-wheather'>
                <img src={climate} alt="" />
                <div className="num">
                    <h2 className='mt-2'>Wheather APP</h2>
                    <h5 className='text-center'>{weather?.name},{weather.sys?.country}</h5>
                    <div className='row'>
                        <div className='col-md-5'>
                            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" ></img>
                            <li className=' text-center list-unstyled'>
                                <i className="bi bi-thermometer-half"></i>
                                <b> Temp:  </b>
                                {temperature}
                            </li>
                            

                        </div>
                        <div className='col-md-7 mx-auto mt-4'>
                            <h6 className='text-center'><b> " {weather.weather?.[0].description} " </b> </h6>
                            <ul className='list-unstyled mx-4'>
                                <li className='mb-2'>
                                    <i className="bi bi-wind"></i>
                                    <b> wind speed:  </b>
                                    {weather.wind?.speed} m/s
                                </li>
                                <li className='mb-2'>
                                    <i className="bi bi-cloud-fill"></i>
                                    <b> Clouds:  </b>
                                    {weather.clouds?.all}%
                                </li>

                                <li>
                                    <i className="bi bi-moisture"></i>
                                    <b> Humidity:  </b>
                                    {weather.main?.humidity}
                                </li>
                            </ul>

                        </div>
                        <div className="col text-center mt-5">
                            <button className="btn btn-primary" onClick={changeTemperature}>Degrees °F/°C</button>
                        </div>
                    </div>
                </div>

            </div>


        )
    
   
};

export default GetWheather;