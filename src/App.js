import React, {useEffect, useState, useRef} from 'react';
import TrackPlayer from 'react-native-track-player'
import Player from "./components/Player";
import PlayerBrain from "./PlayerBrain";
import {Container} from "./style";
import Header from "./components/Header";

function App(props) {
  const [state, setState] = useState(TrackPlayer.STATE_NONE);
  const playerBrain = useRef({});

  useEffect(() => {
    playerBrain.current = new PlayerBrain({setState});
    playerBrain.current.init()
  }, []);

  return (
    <Container>
      <Header/>
      <Player playerState={state} onPress={playerBrain.current.onPress}/>
    </Container>
  );
}

export default App;
