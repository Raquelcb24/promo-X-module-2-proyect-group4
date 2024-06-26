"use strict";

const shareTwitter = document.querySelector('.js-share-twitter');
const url = document.querySelector('.js-share-link');
const shareErrorContainer = document.querySelector('.js-error');



const handleCreateCard = (event)=>{
    event.preventDefault();
    fetch('https://dev.adalab.es/api/card/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(dataResponse => {
        console.log(dataResponse);
        if(dataResponse.success){
            btnShare.classList.remove('hidden');
            url.innerHTML = dataResponse.cardURL;
            url.href = dataResponse.cardURL;
            const tweetText = encodeURIComponent('¡He creado mi nueva tarjeta de contacto con MystiCards by Mystical Coders!');
            const twitterShareURL = `https://twitter.com/intent/tweet?text=${tweetText}&url=${dataResponse.cardURL}`;
            shareTwitter.href = twitterShareURL;
         }
         else {
            shareErrorContainer.classList.remove('hidden');
            shareErrorContainer.innerHTML = `Asegúrate de haber rellenado todos los campos`;
         }

    })
    
};

createCard.addEventListener('click', handleCreateCard)



