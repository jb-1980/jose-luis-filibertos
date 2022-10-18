import React from "react"
import ReactDOM from "react-dom"
import { StyleSheet, css } from "aphrodite"

import Section from "./Section"
import { menuitems } from "./menuitems"
import Promo1 from "./Promo1"
import Promo2 from "./Promo2"
import Promo3 from "./Promo3"

const styles = StyleSheet.create({
  columns: {
    width: 1920,
    display: "flex",
    justifyContent: "flex-start",
  },
  column: {
    flex: 1,
    padding: 6,
    position: "relative",
    height: 1080,
  },
  disclaimer: {
    alignSelf: "flex-end",
    flex: 1,
    color: "rgb(222, 245, 84)",
  },
})

export default function Extras() {
  const [menuitems, setMenuitems] = React.useState(null)
  React.useEffect(() => {
    if (menuitems === null) {
      fetch("../../assets/data/right-menu-items.json", { cache: "no-store" })
        .then((res) => res.json())
        .then(setMenuitems)
    }
  }, [menuitems])
  if (menuitems === null) {
    return null
  }
  return (
    <div className={css(styles.columns)}>
      <div className={css(styles.column)}>
        <Section
          name={menuitems.breakfastPlatters.name}
          description={menuitems.breakfastPlatters.description}
          items={menuitems.breakfastPlatters.items}
        />
        <Section
          name={menuitems.breakfastBurritos.name}
          description={menuitems.breakfastBurritos.description}
          items={menuitems.breakfastBurritos.items}
        />
        <Promo1 />
      </div>
      <div className={css(styles.column)}>
        <Section
          name={menuitems.burritos.name}
          description={menuitems.burritos.description}
          items={menuitems.burritos.items}
        />
        <div className={css(styles.disclaimer)}>
          *Consuming raw eggs, undercooked meat or seafood may increase your
          risk of foodbourne illness, especially if you have a certain medical
          condition.
        </div>
        <div
          className={css(styles.disclaimer)}
          style={{
            borderTop: "2px solid rgb(222, 245, 84)",
            padding: "5px 0 5px 0",
          }}
        >
          *Consumir huevo, carne cruda o mariscos puede aumentar el riesgo y
          dañar su salud, especialmente si quien las come padece de ciertas
          condiciones médicas.
        </div>
      </div>
      <div className={css(styles.column)}>
        <Section
          name={menuitems.tortas.name}
          description={menuitems.tortas.description}
          items={menuitems.tortas.items}
        />
        <Section
          name={menuitems.enchiladas.name}
          description={menuitems.enchiladas.description}
          items={menuitems.enchiladas.items}
        />
        <Promo2 />
      </div>
      <div className={css(styles.column)}>
        <Section
          name={menuitems.tostadas.name}
          description={menuitems.tostadas.description}
          items={menuitems.tostadas.items}
        />
        <Promo3 />
        <Section
          name={menuitems.bowls.name}
          description={menuitems.bowls.description}
          items={menuitems.bowls.items}
        />
        <Section
          name={menuitems.kids.name}
          description={menuitems.kids.description}
          items={menuitems.kids.items}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<Extras />, document.getElementById("app"))
