import React from "react"

const windowWidth = 1920
const columnWidth = (windowWidth - 4) / 4

const promos = [
  {
    name: "Carne Asada Tostada",
    img: "Carne_Asada_Tostada.jpg",
  },
  {
    name: "Carnitas Tostada",
    img: "Carnitas_Tostada.jpg",
  },
  {
    name: "Chicken Tostada",
    img: "Chicken_Tostada.jpg",
  },
  {
    name: "Bean Tostada",
    img: "Bean_Tostada.jpg",
  },
  {
    name: "Chips & Guacamole",
    img: "Chips_and_Guacamole.jpg",
  },
]

const Promo3 = () => {
  const [currentPromo, setCurrentPromo] = React.useState(promos[0].name)
  React.useEffect(() => {
    let intervalId = setTimeout(() => {
      const indx = promos.findIndex((p) => p.name === currentPromo)
      const nextIndx = indx === promos.length - 1 ? 0 : indx + 1
      setCurrentPromo(promos[nextIndx].name)
    }, 4567)
    return () => clearInterval(intervalId)
  }, [currentPromo])
  return (
    <div className="promo3-container" style={{ height: 400 }}>
      {promos.map((promo, i) => (
        <div
          className={`promo3${currentPromo === promo.name ? " active" : ""}`}
          key={i}
          style={{
            height: 400,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <img
            className="promo3-image"
            src={`../../assets/images/2017/tostadas/${promo.img}`}
            style={{
              borderRadius: 10,
              height: 400,
              width: columnWidth - 20,
            }}
          />
          <div className="promo3-title">{promo.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Promo3
