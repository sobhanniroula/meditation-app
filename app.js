const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.video-container video');
    
    // Select sounds
    const sounds = document.querySelectorAll('.sound-picker button');    
    
    // Time Display
    const timeDisplay = document.querySelector('.time-display');  
    
    // Get the length of the outline
    const outlineLength = outline.getTotalLength();

    // Set the duration of the song
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    // Play sounds
    play.addEventListener('click', () => {
        checkPlaying(song);
    });


    // Play and stop the sounds
    const checkPlaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = './img/pause.svg';
        } else {
            song.pause();
            video.play();
            play.src = './img/play.svg'
        }
    };

    // Animate the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
    }

};

app();