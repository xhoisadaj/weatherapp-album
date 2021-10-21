console.log('Website is loaded....');

const weatherForm = document.querySelector('form');
const albumInput = document.querySelector('input');
const albumTitle = document.querySelector('#album-title');
const albumUser = document.querySelector('#album-user');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    albumTitle.textContent = 'Loading album...';

    fetch(`/Album?userId=${albumInput.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                albumTitle.textContent = data.message;
                console.log(data.error);
            } else {
                albumUser.textContent = data.album.user[0].userId;
                albumTitle.textContent = data.album.user[0].title;

                console.log(data.album.user[0].title)

            }
        });
    });
});
