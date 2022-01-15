import React from "react"

const breakfastPlatters = [
  {
    name: "Chorizo Plate",
    img: "Filibertos-Chorizo-60-Light-600x600.jpg",
  },
  {
    name: "Huevos Rancheros",
    img: "Filibertos-Huevos-Rancheros-60-Light-600x600.jpg",
  },
  {
    name: "Machaca",
    img: "Filibertos-Machaca-90-Light-600x600.jpg",
  },
  {
    name: "Spanish Omelet",
    img: "Filibertos-Spanish-Omelet-60-Light-600x600.jpg",
  },
  {
    name: "Steak Ranchero",
    img: "Filibertos-Steak-Ranchero-60-Light-600x600.jpg",
  },
]

const windowWidth = 1920
const columnWidth = (windowWidth - 4) / 4

const Promo1 = () => {
  const [currentPromo, setCurrentPromo] = React.useState(
    breakfastPlatters[0].name
  )
  React.useEffect(() => {
    let intervalId = setTimeout(() => {
      const indx = breakfastPlatters.findIndex((p) => p.name === currentPromo)
      const nextIndx = indx === breakfastPlatters.length - 1 ? 0 : indx + 1
      setCurrentPromo(breakfastPlatters[nextIndx].name)
    }, 5555)
    return () => clearInterval(intervalId)
  }, [currentPromo])
  return (
    <div>
      {breakfastPlatters.map((image, i) => {
        return (
          <div
            key={i}
            className={`promo1${currentPromo === image.name ? " active" : ""}`}
            style={{
              width: columnWidth - 20,
            }}
          >
            <div className="promo1-text">{image.name}</div>
            <img
              src={`../../assets/images/breakfastplatters/${image.img}`}
              style={{
                width: "100%",
                height: 300,
                opacity: "inherit",
                borderRadius: 10,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Promo1
