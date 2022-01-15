import React from "react"
import { StyleSheet, css } from "aphrodite"

const promos = [
  {
    name: "Super Nachos",
    // img: 'super_nachos_600x416.jpg',
    img: "2017/sides/Super_Nachos.jpg",
  },
  {
    name: "Menudo",
    img: "menudo_600x416.jpg",
    //img: '2017/sides/Menudo.jpg'
  },
  {
    name: "Carne Asada Fries",
    img: "2017/sides/Carne_Asada_Fries.jpg",
  },
  {
    name: "Cowboy Fries",
    img: "2017/sides/Cowboy_Fries.jpg",
  },
]

const windowWidth = 1920
const windowHeight = 1080

const MainPromo = () => {
  const [currentPromo, setCurrentPromo] = React.useState(promos[0].name)
  React.useEffect(() => {
    let intervalId = setTimeout(() => {
      const indx = promos.findIndex((p) => p.name === currentPromo)
      const nextIndx = indx === promos.length - 1 ? 0 : indx + 1
      setCurrentPromo(promos[nextIndx].name)
    }, 5555)
    return () => clearInterval(intervalId)
  }, [currentPromo])
  return (
    <div className={css(styles.promosContainer)}>
      {promos.map((promo, i) => (
        <div
          key={i}
          className={`main-promo${
            currentPromo === promo.name ? " active" : ""
          }`}
        >
          <div className="main-promo-title">{promo.name}</div>
          <img
            className="main-promo-image"
            src={`../../assets/images/${promo.img}`}
            style={{
              width: windowWidth / 2 - 20,
              height: windowHeight / 2 - 20,
            }}
          />
        </div>
      ))}
    </div>
  )
}

const styles = StyleSheet.create({
  promosContainer: {
    flex: 1,
    margin: 10,
  },
})

export default MainPromo
