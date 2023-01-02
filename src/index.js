import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"

const video = document.querySelector('video')
const button = document.querySelector('button')

const player = new MediaPlayer({ mediaElement: video, plugins: [new AutoPlay()] })

button.onclick = () => {
    player.isItPlaying() ? player.pause() : player.play()
}