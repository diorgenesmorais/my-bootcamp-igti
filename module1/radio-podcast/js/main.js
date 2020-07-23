"use strict";
(function(list) {
    let resultPodcast = document.querySelector('#resultPodcast');
    let inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
    let rangeFrequencies = document.querySelector('#rangeFrequencies');

    rangeFrequencies.addEventListener('input', handleRangeValueChange);

    function handleRangeValueChange(event) {
        let currentFrequency = event.target.value;
        inputCurrentFrequency.value = `${currentFrequency} Mhz`;
    
        hasPodcastOn(currentFrequency);
    }

    function hasPodcastOn(frequency) {
        let hasPodcast = findPodcastFrom(frequency);
        if (hasPodcast) {
            render(hasPodcast);
        } else {
            resultPodcast.textContent = 'Nenhum podcast encontrado';
        }
    }

    function findPodcastFrom(frequency) {
        let foundPodcast = null;
        for (let i = 0; i < list.length; i++) {
            let currentPodcast = list[i];
            if (currentPodcast.id === frequency) {
                return currentPodcast;
            }
        }
        return foundPodcast;
    }

    function render(podcast) {
        resultPodcast.textContent = '';

        let img = document.createElement('img');
        img.setAttribute('src', `./img/${podcast.img}`);
        img.setAttribute('alt', `Podcast ${podcast.title}`);
        img.setAttribute('title', `Podecast ${podcast.title}`);

        resultPodcast.appendChild(img);
    }
})(realPodcast);