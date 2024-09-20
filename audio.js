const audio = document.getElementById('miAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pausame -> ⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Reproduceme -> ▶️';
    }
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    seekBar.value = (currentTime / duration) * 100;

    // Actualizar el tiempo actual y la duración total
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationTimeDisplay.textContent = formatTime(duration);
});

seekBar.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (seekBar.value / 100) * duration;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

audio.addEventListener('loadedmetadata', () => {
    durationTimeDisplay.textContent = formatTime(audio.duration);
});
