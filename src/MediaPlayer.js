function MediaPlayer(config) {
    this.isPlaying = false
    this.media = config.mediaElement
}

MediaPlayer.prototype.playOrPause = function () {
    if (this.isPlaying) {
        this.isPlaying = !this.isPlaying
        return this.media.pause()
    }
    this.isPlaying = !this.isPlaying
    return this.media.play()
}

export default MediaPlayer