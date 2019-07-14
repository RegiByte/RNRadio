import TrackPlayer from 'react-native-track-player'

module.exports = async function() {
  TrackPlayer.addEventListener('remote-play', async () => {
    await TrackPlayer.stop()
    await TrackPlayer.play()
  });
  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause()
  });
  TrackPlayer.addEventListener('remote-stop', async () => {
    await TrackPlayer.stop()
  })
};
