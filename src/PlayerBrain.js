import {PLAYER_TITLE, PLAYER_URL} from "./constants";
import TrackPlayer, {Track} from 'react-native-track-player'

export default class PlayerBrain {
  constructor({setState}) {
    this.setState = setState
  }

  async init() {
    await this.setupPlayer();

    await this
      .addListener()
      .updateCapabilities()
      .addMainTrack();
  }

  async setupPlayer() {
    await TrackPlayer.setupPlayer();

    return this
  }

  async addMainTrack() {
    const track = {
      id: 'main',
      url: PLAYER_URL,
      title: PLAYER_TITLE,
     // type: 'hls'
    };

    await TrackPlayer.add([track]);

    return this
  }

  updateCapabilities() {
    TrackPlayer.updateOptions({
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ]
    });

    return this
  }


  addListener() {
    TrackPlayer.addEventListener('playback-state', async ({state}) => {
      this.setState(state);

      if (state === TrackPlayer.STATE_STOPPED) {
        this.ready = false
      }
    });

    TrackPlayer.addEventListener('playback-error', (code, message) => {
      console.log(code, message)
    });

    return this
  }

  async onPress() {
    const state = await TrackPlayer.getState();

    try {
    switch (state) {
      case TrackPlayer.STATE_PLAYING:
        await TrackPlayer.pause();
        break;
      default:
        await TrackPlayer.stop();
        await TrackPlayer.play()
    }

    } catch(e) {
      console.log(e)
    }
  }
}
