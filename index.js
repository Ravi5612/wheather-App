const apiKey = 'b0485af859f47646828720d9605b71b4'; // Your API key

document.getElementById('mybutton').addEventListener('click', async function() {
    const inputValue = document.getElementById('myInput').value;
   
  
    if (inputValue) {
        await getWeather(inputValue);
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   
        const response = await fetch(url);

       

        const data = await response.json();
      const humidity =data.main.temp;
        
        // Update the HTML with fetched data
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity;    
        document.querySelector('.temp').innerHTML =`${humidity} &#8451;`; 
        document.querySelector('.wind').innerHTML = data.wind.speed;
    
}
