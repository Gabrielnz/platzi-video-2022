function AutoPlay () {
    AutoPlay.prototype.execute = function (player) {
        player.mute()
        player.play()
    }
}

export default AutoPlay