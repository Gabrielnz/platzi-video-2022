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

MediaPlayer.prototype.play = function () {
    this.media.play()
    this.isPlaying = true
}

MediaPlayer.prototype.pause = function () {
    this.media.pause()
    this.isPlaying = false
}

MediaPlayer.prototype.isItPlaying = function () {
    return this.isPlaying
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

export default MediaPlayer