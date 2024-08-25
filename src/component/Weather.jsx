import React, { useEffect, useRef, useState } from 'react'
import './Weather.css';
import searchicon from 'E:/project12/src/assets/loupe.png';
import sunny from 'E:/project12/src/assets/sunny.png';
import clear_icon from 'E:/project12/src/assets/sunny.png';
import cloud_icon from 'E:/project12/src/assets/partly-cloudy.png';
import rain_icon from 'E:/project12/src/assets/thunder.png';
import bgimage from 'E:/project12/src/assets/bg.jpg';
import bgimage1 from 'E:/project12/src/assets/sunny.jpeg';
import bgimage2 from 'E:/project12/src/assets/thunder.jpeg';
import bgimage3 from 'E:/project12/src/assets/clear.jpeg';


const Weather = () => {


    let inputref = useRef()
    let [weatherdata, setweather] = useState(false);

    let allicons = {
        "01d": sunny,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        // "04d": drizzle_icon,
        // "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": cloud_icon,
        "13n": cloud_icon

    }

    // let bgicon = {
    //     "01d": bgimage1,
    //     "01n": bgimage3,
    //     "02d": bgimage1,
    //     "02n": bgimage1,
    //     "03d": bgimage1,
    //     "03n": bgimage1,
    //     // "04d": drizzle_icon,
    //     // "04n": drizzle_icon,
    //     "09d": bgimage,
    //     "09n": bgimage,
    //     "10d": bgimage2,
    //     "10n": bgimage2,
    //     "13d": bgimage3,
    //     "13n": bgimage3
    // }

 

  


    const search = async (city) => {
        if (city === "") {
            alert("Enter city name")
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                alert("enter correct city name");
            }
            console.log(data);

            let icon = allicons[data.weather[0].icon] || clear_icon;
            // let image = bgicon[data.weather[0].icon] || bgimage1;
            setweather({
                humidity: data.main.humidity,
                wind: data.wind.speed,
                temp: Math.floor(data.main.temp),
                feel: data.main.feels_like,
                icons: icon,
                descriptions: data.weather[0].description,
                name: data.name,
                images: data.weather[0].icon,

            });
        } catch (error) {

        }
        let bg = document.querySelector('.app');
        let images = weatherdata.images;
        if( images === "01d"){
            bg.style.backgroundImage = `url(${bgimage1})`;
    
        }
        else if(images=== "01n"){
            bg.style.backgroundImage = `url(${bgimage3})`;
    
        }
        else if(images=== "02d"){
            bg.style.backgroundImage = `url(${bgimage1})`;
    
        }
        else if(images=== "02n"){
            bg.style.backgroundImage = `url(${bgimage1})`;
    
        }
        else if(images=== "03d"){
            bg.style.backgroundImage = `url(${bgimage1})`;
    
        }
        else if(images=== "03n"){
            bg.style.backgroundImage = `url(${bgimage1})`;
    
        }
        else if(images=== "09d"){
            bg.style.backgroundImage = `url(${bgimage})`;
    
        }
        else if(images=== "09n"){
            bg.style.backgroundImage = `url(${bgimage})`;
    
        }
        else if(images=== "10d"){
            bg.style.backgroundImage = `url(${bgimage2})`;
    
        }
        else if(images=== "10n"){
            bg.style.backgroundImage = `url(${bgimage2})`;
    
        }
        else if(images=== "13d"){
            bg.style.backgroundImage = `url(${bgimage3})`;
    
        }
        else if(images=== "13n"){
            bg.style.backgroundImage = `url(${bgimage3})`;
    
        }

        else{
            bg.style.backgroundImage = `url(${bgimage})`;

        }
    }

    useEffect(() => {

        search("jamshoro");

    }, []);

  
   
   
   
   
   
   
   
   
   
   
    
    return (
        <div className="weather">

            <div className="input-box">
                <input ref={inputref} type="text" placeholder='enter city name' />
                <img src={searchicon} alt="" onClick={() => search(inputref.current.value)} />
            </div>
            {weatherdata ? <>  <div className="main-container">
                <div className="right-content">
                    <div className="headings">
                        <h1>Weather</h1>
                    </div>
                    <div className="temperature">
                        <h2>{weatherdata.name}</h2>
                        <div className="for-flex">
                            <h1>{weatherdata.temp}°</h1>
                            <img src={weatherdata.icons} alt="" />
                        </div>

                    </div>
                    <div className="feel-temp">
                        <p>Feels like <span>{weatherdata.feel}°</span></p>
                    </div>
                </div>

                <div className="left-content">
                    <div className="paras">
                        <p className="sunny">{weatherdata.descriptions}</p>
                    </div>
                    <div className="weather-condition">
                        <p>percip: <span>0%</span></p>
                        <p>Humidity: <span>{weatherdata.humidity}%</span></p>
                        <p>Wind: <span>{weatherdata.wind}</span> <span>km/h</span></p>
                    </div>


                </div>
            </div></> : <></>}

        </div>
    )
}

export default Weather