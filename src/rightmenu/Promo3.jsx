import React from 'react'

const windowWidth = window.innerWidth
const columnWidth = (windowWidth - 4) / 4

const promos = [
  {
    name: 'Carne Asada Tostada',
    img: 'Carne_Asada_Tostada.jpg',
  },
  {
    name: 'Carnitas Tostada',
    img: 'Carnitas_Tostada.jpg',
  },
  {
    name: 'Chicken Tostada',
    img: 'Chicken_Tostada.jpg',
  },
  {
    name: 'Bean Tostada',
    img: 'Bean_Tostada.jpg',
  },
  {
    name: 'Chips & Guacamole',
    img: 'Chips_and_Guacamole.jpg',
  },
]

const Promo3 = () =>
<div className="promo3-container" style={{height: 400}}>
  {
    promos.map((promo, i) =>
    <div className="promo3"
      key={i}
      style={{
        height: 400,
        borderRadius: 10,
        overflow: 'hidden',
    }}>
      <img className="promo3-image"
       src={`../../assets/images/2017/tostadas/${promo.img}`}
       style={{
         borderRadius: 10,
         height: 400,
         width: columnWidth - 20
       }}/>
     <div className="promo3-title">
       {promo.name}
     </div>
    </div>
    )
  }
</div>

export default Promo3
