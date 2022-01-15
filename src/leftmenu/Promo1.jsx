import React from "react"
import { StyleSheet, css } from "aphrodite"

const promos = [
  {
    name: "Carne Asada Quesadilla Supreme",
    img: "Carne_Asada_Quesadilla_Supreme.jpg",
  },
  {
    name: "Carnitas Quesadilla Supreme",
    img: "Carnitas_Quesadilla_Supreme.jpg",
  },
  {
    name: "Pollo Quesadilla Supreme",
    img: "Chicken_Quesadilla_Supreme.jpg",
  },
  {
    name: "Camaron Quesadilla Supreme",
    img: "Shrimp_Quesadilla_Supreme.jpg",
  },
]

const windowWidth = 1920

const Promo1 = () => {
  const [currentPromo, setCurrentPromo] = React.useState(promos[0].name)
  React.useEffect(() => {
    let intervalId = setTimeout(() => {
      const indx = promos.findIndex((p) => p.name === currentPromo)
      const nextIndx = indx === promos.length - 1 ? 0 : indx + 1
      setCurrentPromo(promos[nextIndx].name)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [currentPromo])
  return (
    <div className={css(styles.promosContainer)}>
      {promos.map((promo, i) => (
        <div
          key={i}
          className={`promo1${currentPromo === promo.name ? " active" : ""}`}
        >
          <img
            className="promo1-image"
            src={`../../assets/images/2017/quesadillas_supreme/${promo.img}`}
            style={{
              width: windowWidth / 4 - 20,
              height: (20 * (windowWidth / 4 - 20)) / 23,
            }}
          />
          <div
            className="promo1-title"
            style={{
              width: windowWidth / 4 - 20,
              fontSize: "2em",
              color: "rgb(240, 103, 16)",
              textTransform: "uppercase",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            {promo.name}
          </div>
        </div>
      ))}
    </div>
  )
}

const styles = StyleSheet.create({
  promosContainer: {
    flex: 1,
    margin: 10,
    height: 450,
  },
})

export default Promo1
