import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const promos = [
  {
    name: 'Carne Asada Quesadilla Supreme',
    img: 'Carne_Asada_Quesadilla_Supreme.jpg',
  },
  {
    name: 'Carnitas Quesadilla Supreme',
    img: 'Carnitas_Quesadilla_Supreme.jpg',
  },
  {
    name: 'Pollo Quesadilla Supreme',
    img: 'Chicken_Quesadilla_Supreme.jpg',
  },
  {
    name: 'Camaron Quesadilla Supreme',
    img:'Shrimp_Quesadilla_Supreme.jpg',
  },
]

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const Promo1 = () =>
<div className={css(styles.promosContainer)}>
  {
    promos.map( (promo, i) =>
      <div key={i} className="promo1">
        <div className="promo1-title" style={{
          width: windowWidth / 4 - 20,
          fontSize: '2em',
          color: 'rgb(240, 103, 16)',
          textTransform: 'uppercase',
          fontWeight: 'bolder',
          textAlign: 'center',
        }}
        >
        {promo.name}
        </div>
        <img className="promo1-image"
          src={`../../assets/images/2017/quesadillas_supreme/${promo.img}`}
          style={{
            width: windowWidth / 4 - 20,
            height: (windowWidth / 4 - 20) * (15 / 23),
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
    height: 390,
  },
})

export default Promo1
