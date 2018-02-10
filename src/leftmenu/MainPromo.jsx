import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const promos = [
  {
    name: 'Super Nachos',
    // img: 'super_nachos_600x416.jpg',
    img: '2017/sides/Super_Nachos.jpg'
  },
  {
    name: 'Menudo',
    img: 'menudo_600x416.jpg',
    //img: '2017/sides/Menudo.jpg'
  },
  {
    name: 'Carne Asada Fries',
    img: '2017/sides/Carne_Asada_Fries.jpg',
  },
  {
    name: 'Cowboy Fries',
    img: '2017/sides/Cowboy_Fries.jpg'
  },
]

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const MainPromo = () =>
<div className={css(styles.promosContainer)}>
  {
    promos.map( (promo, i) =>
      <div key={i} className="main-promo">
        <div className="main-promo-title">{promo.name}</div>
        <img className="main-promo-image"
          src={`../../assets/images/${promo.img}`}
          style={{
            width: windowWidth / 2 - 20,
            height: windowHeight / 2 - 20,
          }}
        />
      </div>
    )
  }

</div>

const styles = StyleSheet.create({
  promosContainer: {
    flex: 1,
    margin: 10,
  },
})

export default MainPromo
