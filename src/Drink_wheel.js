import React from 'react'

import WheelComponent from 'react-wheel-of-prizes'

function DrinkWheel() {
  const segments = [
    'водка',
    'ром',
    'коньячок',
    'текила',
    'джин',
    'вискарь',
    'шорли',
    'пиво',
    'ничего'
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
      size={290}
      upDuration={100}
      downDuration={1000}
      fontFamily='Arial'
    />
  )
}

export default DrinkWheel;