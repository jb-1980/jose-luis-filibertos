import React from "react"
import ReactDOM from "react-dom"
import { StyleSheet, css } from "aphrodite"

const windowWidth = 1024
const windowHeight = 768

// Header would be 60px for a 1080p resolution, so we will scale
// accordingly for 4 rows of 6 columns.
const headerHeight = (60 * windowHeight) / 1080
const padding = windowWidth / 640

const containerWidth = windowWidth / 6 - 2 * padding
const imgHeight = windowHeight / 4 - 2 * padding - headerHeight

const styles = StyleSheet.create({
  combos: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    width: windowWidth,
    padding: padding,
  },
  combo: {
    flex: 1,
    maxWidth: containerWidth,
    height: imgHeight + headerHeight,
    border: `${padding}px solid #000`,
  },
  comboHeader: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: containerWidth,
    minWidth: containerWidth,
    height: headerHeight,
    backgroundColor: "#fff",
    color: "#000",
  },
  number: {
    flex: 0,
    minWidth: headerHeight * 1.02,
    minHeight: headerHeight * 1.02,
    width: headerHeight * 1.02,
    height: headerHeight * 1.02,
    fontSize: 0.55 * headerHeight,
    backgroundColor: "rgb(238, 242, 8)",
    borderRadius: "50%",
    border: `${headerHeight / 20}px solid #e10707`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    color: "#e10707",
    transform: `translateY(7%)`,
  },
  title: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  price: {
    flex: 0,
    backgroundColor: "#000",
    borderRadius: `${headerHeight}px 0 0 ${headerHeight}px`,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 0.4 * headerHeight,
    transform: `translateY(${headerHeight / 30}px)`,
  },
  fontTopPadding: {
    transform: `translateY(${0.1 * headerHeight}px)`,
  },
  img: {
    borderRadius: `0 0 ${headerHeight}px ${headerHeight}px`,
    width: containerWidth,
    height: imgHeight,
  },
})

export default function Combos() {
  const [combos, setCombos] = React.useState([])
  React.useEffect(() => {
    fetch("../../assets/data/combo-items.json", { cache: "no-store" })
      .then((res) => res.json())
      .then(setCombos)
  }, [])
  const combosComponents = combos.map((combo, i) => (
    <div className={css(styles.combo)} key={i} id={combo._id}>
      <div className={css(styles.comboHeader)}>
        <div className={combo.number ? css(styles.number) : ""}>
          <div className={css(styles.fontTopPadding)}>{combo.number}</div>
        </div>
        <div
          className={`${css(styles.title)} title`}
          style={{ fontSize: (combo.fontSize * windowHeight) / 1500 }}
        >
          <div className={css(styles.fontTopPadding)}>{combo.title}</div>
        </div>
        <div className={css(styles.price)}>
          <div className={css(styles.fontTopPadding)}>{combo.price}</div>
        </div>
      </div>
      <img
        className={css(styles.img)}
        src={`../../assets/images/${combo.img}`}
        alt={combo.title}
      />
    </div>
  ))

  const promos = ["Bowls.jpg", "Burritos.jpg"].map((promo, i) => (
    <img
      key={i}
      className="promo-image"
      style={{
        width: 3 * containerWidth,
        height: imgHeight + headerHeight,
      }}
      src={`../../assets/images/promos/${promo}`}
    />
  ))

  return (
    <div className={css(styles.combos)} id="combos">
      {combosComponents}
      <div
        style={{
          width: 3 * containerWidth,
          height: imgHeight + headerHeight,
          border: `${padding}px solid #000`,
          overflow: "hidden",
        }}
      >
        {promos}
      </div>
      <div className={css(styles.combo)}>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src="../../assets/images/filibertos-logo.png"
          alt="logo"
        />
      </div>
    </div>
  )
}

ReactDOM.render(<Combos />, document.getElementById("app"))
