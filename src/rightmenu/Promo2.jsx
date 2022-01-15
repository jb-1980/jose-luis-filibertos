import React from "react"

const windowWidth = 1920
const columnWidth = (windowWidth - 4) / 4

const promos = [
  {
    name: "Cheese Enchiladas",
    img: "Two_Cheese_Enchiladas.jpg",
  },
  {
    name: "Chicken Enchiladas",
    img: "Two_Chicken_Enchiladas.jpg",
  },
  {
    name: "Beef Enchiladas",
    img: "Two_Beef_Enchiladas.jpg",
  },
  {
    name: "Two Chile Rellenos",
    img: "Two_Chile_Rellenos.jpg",
  },
]

const Promo2 = () => {
  const [currentPromo, setCurrentPromo] = React.useState(promos[0].name)
  React.useEffect(() => {
    let intervalId = setTimeout(() => {
      const indx = promos.findIndex((p) => p.name === currentPromo)
      const nextIndx = indx === promos.length - 1 ? 0 : indx + 1
      setCurrentPromo(promos[nextIndx].name)
    }, 5432)
    return () => clearInterval(intervalId)
  }, [currentPromo])
  return (
    <div className="promo2-container">
      {promos.map((promo, i) => (
        <div
          className={`promo2${currentPromo === promo.name ? " active" : ""}`}
          key={i}
          style={{
            height: 330,
            borderRadius: 10,
          }}
        >
          <img
            className="promo2-image"
            src={`../../assets/images/2017/enchiladas/${promo.img}`}
            style={{
              borderRadius: 10,
              height: 330,
              width: columnWidth - 20,
            }}
          />
          <div className="promo2-title">{promo.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Promo2
