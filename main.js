const apiKey = "01de32a825a93a13b24e4d28fd1ff021";

const inputCity = document.querySelector('#city-input');
const btnSearch = document.querySelector('#search');
const citySelect = document.querySelector('#city');
const degreesTemp = document.querySelector('#degrees');
const minTemp = document.querySelector('#min')
const maxTemp = document.querySelector('#max');
const climate = document.querySelector('#climate');
const iconTemp = document.querySelector('#iconTemp');
const humidity = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');
const formElement = document.querySelector('#form-container');

const getWeather = async (inputCity) =>{

const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}&lang=pt_br`

const response = await fetch(urlWeather)
const data = await response.json()
return data
};


const weather = async(inputCity)=>{
    const data = await getWeather(inputCity)

    citySelect.innerText = data.name;
    degreesTemp.innerText = `${parseInt(data.main.temp)} °C`;
    minTemp.innerText = `${parseInt(data.main.temp_min)} °C/`;
    maxTemp.innerText = `${parseInt(data.main.temp_max)} °C`;
    climate.innerText = data.weather[0].description;
    iconTemp.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    windElement.innerText = `${(data.wind.speed)}km/h`;
    humidity.innerText = `${(data.main.humidity)}%`;

    formElement.classList.remove('hide');
}





btnSearch.addEventListener('click',(e)=>{
    e.preventDefault();
    const valueCity = inputCity.value;
    weather(valueCity);

    if(inputCity.value === ''){
        
        formElement.classList.add('hide')
    }
    
})

document.addEventListener( 'keypress', (e)=>{
   
    if(e.key === 'Enter'){
        btnSearch.click();
    }

})

