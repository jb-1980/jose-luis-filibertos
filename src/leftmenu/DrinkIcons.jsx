import React from 'react'

const width = ((window.innerWidth / 4) - 20) / 5 - 6
const DrinkIcons = () =>
<div style={{
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  }}
>
  {
    [
      'cocacola.png',
      'dietcoke.jpg',
      'mrpibb.jpg',
      'fantaorange.jpg',
      'sprite.jpg',
      'minutemaid.png',
      'powerade-2.jpg',
      'hi-c.png',9,10, 11].map( i =>
      <img
        key={i}
        src={
          typeof(i)==='number' ? `http://placehold.it/${width}x${width}` :
          `../../assets/images/drinks/${i}`}
        style={{
          padding: 3,
          width: width,
          height: width,
          borderRadius: '50%',
        }}/>
    )
  }
</div>

export default DrinkIcons
