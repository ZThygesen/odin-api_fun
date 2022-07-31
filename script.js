const img = document.querySelector('img');
const newGif = document.querySelector('#GIF');
const status = document.querySelector('#status');

const submit = document.querySelector('#submit');
submit.addEventListener('click', (e) => handleSubmit(e))

function handleSubmit(e) {
    e.preventDefault();
    generateNewGif();
}

function generateNewGif() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=SxrmidC40mdVSkD1Ica566Q8BUGtHwWK&s=${newGif.value}`, { mode: 'cors', credentials: 'omit' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        status.textContent = `Now showing ${newGif.value.toUpperCase()} GIFs`;
        img.src = response.data.images.original.url;
    })
    .catch( error => {
        status.textContent = 'No GIFs found';
        img.src = './sad.webp';
        return;
    });
}

generateNewGif();
