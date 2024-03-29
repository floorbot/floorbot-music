const AudioPlayer = require('../audio/audio-player');

module.exports = Discord => {
    const { Structures } = Discord;
    return Structures.extend('Guild', Guild => {
        return class extends Guild {
            constructor(client, data) {
                super(client, data);
                this.audioPlayer = new AudioPlayer(this);
                this.mediaMessage = null;
            }
        }
    });
}
