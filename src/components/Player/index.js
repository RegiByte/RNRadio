import React from 'react';
import {ActivityIndicator} from 'react-native'
import TrackPlayer from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {ButtonContainer, Container, Title} from "./style";

const IconComponent = ({playerState}) => {
 switch (playerState) {
   case TrackPlayer.STATE_BUFFERING:
     return <ActivityIndicator size={50} color="#ffffff"/>
   case TrackPlayer.STATE_PLAYING:
     return <Icon name="pause" color="#ffffff" size={50}/>
   default:
     return <Icon name="play-arrow" color="#ffffff" size={50}/>
 }
}

function Player({playerState, onPress}) {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <IconComponent playerState={playerState}/>
      </ButtonContainer>
    </Container>
  );
}

export default Player;
