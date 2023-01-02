function AutoPlay () {
    AutoPlay.prototype.execute = function (player) {
        player.mute()
        player.playOrPause()
    }
}

export default AutoPlay