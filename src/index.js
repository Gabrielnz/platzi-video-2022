const video = document.querySelector('video')
const button = document.querySelector('button')

function MediaPlayer(config) {
    this.media = config.mediaElement
}

MediaPlayer.prototype.play = function () {
    this.media.play()
}

const player = new MediaPlayer({ mediaElement: video })

button.onclick = () => player.play()