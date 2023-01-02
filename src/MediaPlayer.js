function MediaPlayer(config) {
    this.isPlaying = false
    this.media = config.mediaElement
    this.plugins = config.plugins || []

    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.execute(this)
    });
}

MediaPlayer.prototype.playOrPause = function () {
    if (this.isPlaying) {
        this.isPlaying = !this.isPlaying
        return this.media.pause()
    }
    this.isPlaying = !this.isPlaying
    return this.media.play()
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

export default MediaPlayer