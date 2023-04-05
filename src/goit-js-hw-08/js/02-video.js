import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});


function onSetTime(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);
}

player.on('timeupdate', throttle(onSetTime,1000));


player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
       
            break;

        default:
           
            break;
    }
});



