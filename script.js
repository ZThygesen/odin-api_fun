const img = document.querySelector('img');
const newGif = document.querySelector('#GIF');
const status = document.querySelector('#status');

const submit = document.querySelector('#submit');
submit.addEventListener('click', (e) => handleSubmit(e))

function handleSubmit(e) {
    e.preventDefault();
    generateNewGif();
}

async function generateNewGif() {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=SxrmidC40mdVSkD1Ica566Q8BUGtHwWK&s=${newGif.value}`, { mode: 'cors' });
    const gifData = await response.json();
    status.textContent = `Now showing ${newGif.value.toUpperCase()} GIFs`;
    img.src = gifData.data.images.original.url;
}

generateNewGif().catch( () => {
        status.textContent = 'No GIFs found';
        img.src = './sad.webp';
        return;
    });
