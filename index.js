const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultContainer = document.getElementById("result");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const dateresult=document.getElementById("datetime");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const pm2Result = document.getElementById("pm2");
const pm10Result = document.getElementById("pm10");
const so2Result = document.getElementById("so2");
// const stateresult = document.getElementById("state_code");
// const timeresult = document.getElementById("timezone");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bd9573db0bmsh73088e3e588fd15p169383jsnf6242ac878d1',
		'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    fetch(url,options)
        .then(response=>response.json())
        .then(result=>{
            let readings = result.data[0];
            // let extrareadings=result.data[71];
            console.log(readings);
            aqiResult.textContent=readings.aqi;
            coResult.textContent=readings.co;
            dateresult.textContent=readings.datetime;
            no2Result.textContent=readings.no2;
            pm2Result.textContent=readings.pm2;
            o3Result.textContent=readings.o3;
            pm10Result.textContent=readings.pm10;
            so2Result.textContent=readings.so2;
            // stateresult.textContent=extrareadings.state_code;
            // timeresult.textContent=extrareadings.timezone;
            resultContainer.style.display = 'flex';
        })
});



 
//  Here, I have used API for getting values form "RapidAPI" website and "Air Quality APi" 


//  This is the key for APi <===>     'x-rapidapi-key': 'bd9573db0bmsh73088e3e588fd15p169383jsnf6242ac878d1',

// This is the Host for API <===>		'x-rapidapi-host': 'air-quality.p.rapidapi.com'

