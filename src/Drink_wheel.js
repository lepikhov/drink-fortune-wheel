import React from 'react';

import WheelComponent from 'react-wheel-of-prizes';
import useWindowDimensions from './hooks/window_dimensions';

function DrinkWheel() {
  const { height, width } = useWindowDimensions();

  const segments = [
    'водка',
    'ром',
    'пиво',
    'текила',
    'ничего',
    'вискарь',
    'шорли',
    'коньячок',
    'джин'
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#ff1ce6'
  ]
  const onFinished = (winner) => {
    console.log(winner)
  }
  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Пьём'
      isOnlyOnce={false}
      size={width/5}
      upDuration={100}
      downDuration={1000}
      fontFamily='Arial'
    />
  )
}

export default DrinkWheel;