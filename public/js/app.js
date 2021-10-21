console.log('Website is loaded....');

const weatherForm = document.querySelector('form');
const weatherInput = document.querySelector('input');
const weatherLocation = document.querySelector('#weather-location');
const weatherForecast = document.querySelector('#weather-forecast');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    weatherLocation.textContent = 'Loading weather...';
    weatherForecast.textContent = '';

    fetch(`/weather?userId=${weatherInput.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                weatherLocation.textContent = data.message;
                console.log(data.error);
            } else {
                weatherForecast.textContent = data.album.user[0].userId;
                weatherLocation.textContent = data.album.user[0].title;

                console.log(data.album.user[0].title)

            }
        });
    });
});
