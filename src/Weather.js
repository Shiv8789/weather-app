import React,{useEffect,useState} from 'react'
import './Weather.css'

function Weather() {
    const [city,setCity]=useState({});
    const [search,setSearch]=useState("pune");
    const [weather,setWeather]=useState({});
    const [sys ,setSys]=useState({});
    const [name ,setName]=useState();
    
    
    
        
          const fetchApi= async()=>{ const res= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2c2f90f87c3221b80e93d1b7e98f5f5f`);
          const data=await res.json();
          setCity(data.main);
          setName(data.name);
          setWeather(data.weather);
          setSys(data.sys);


    }

      
            
        
    // let tp= sys.sunrise;
    // let date= new Date(tp);
    // let h=date.getHours();
    // let m= date.getMinutes();
    // let t=h+":"+m;
    // let tp2= sys.sunset;
    // let date2= new Date(tp2);
    // let h2=date2.getHours();
    // let m2= date2.getMinutes();
    // let t2=h2+":"+m2;
    


    
    return (
        <div>
            <div id="main">
                <div id="search">

                    <input type="search"
                    onChange={(e)=>{
                        e.preventDefault();
                        setSearch(e.target.value);
                        

                    }}
                    
                     />
                     <button className="btn" onClick={ fetchApi}>Search</button>
                     
                    
                </div>
                { 
                    city?(
                    <div>
                        <div id="content">
                         <h2 className="icon"><i className=" f fas fa-street-view"></i>{city.temp}°C
                          {(city.temp>10)?<i className=" sun fas fa-cloud-sun	"></i>:<i className="sun  fas fa-cloud-sun-rain	"></i>}</h2>
                         
                         
                        <div className="tmp">
                            
                            <ul>
                                <li>MIN:{city.temp_min}°C</li>
                                <li>MAX:{city.temp_max}°C</li>
                            </ul>

                        </div>
                        <div className="prs">
                            
                            <ul>
                                <li>PRESSURE:{city.pressure} hPa</li>
                                <li>HUMIDITY:{city.humidity}%</li>
                            </ul>

                        </div>
                        {/* <div>
                            <h1>{weather.main}</h1>
                        </div> */}
                         </div>
                    </div>)
                    :(<h2 className="m-5 d-1 not" style={{color:'white'}}>404, NOT FOUND</h2>)

                }
               

               

            </div >
        </div >
    )

}

export default Weather
