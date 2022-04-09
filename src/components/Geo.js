import React, {  useEffect, useState } from 'react';
import GetWheather from './GetWheather';

 
const Geo =  () => {   
    
    const[weather, setWeather] = useState({})
    const[lat, setLat] = useState("51.50853")
    const[lon, setLon] = useState("-0.12574") 
 

    
    const api_url = "https://api.openweathermap.org/data/2.5/"
    const key= "2c3a45040b751d4c311bd556fb2c8a4d"
   
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(position =>  {            
            setLat(position.coords.latitude);
            setLon(position.coords.longitude) })
    },[]) 
    

    useEffect(async()=>{        
        const res = await fetch(`${api_url}weather?lat=${lat}&lon=${lon}&appid=${key}`)
        setWeather( await res.json())        
                  
          

    },[lat, lon])              
          
                  
                          
                
            
              
       
     
       
    return(
        <>       
       
        <GetWheather  weather={weather} />
         
        
        </>
    )

        
    
};

export default Geo;





