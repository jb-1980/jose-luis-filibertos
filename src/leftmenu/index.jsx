import React from "react"
import ReactDOM from "react-dom"
import { StyleSheet, css } from "aphrodite"

import Section from "./Section"
import MainPromo from "./MainPromo"
import Promo1 from "./Promo1"

const styles = StyleSheet.create({
  menu: {
    display: "flex",
  },
  leftHalf: {
    width: 512,
    height: 768,
    display: "flex",
    ":first-child": {
      marginLeft: 0,
    },
    ":last-child": {
      marginRight: 0,
    },
  },
  rightHalf: {
    width: 512,
    height: 768,
    display: "flex",
    flexDirection: "column",
  },
  column: {
    width: 256,
    flex: 1,
    marginLeft: 7,
    marginRight: 7,
  },
  underPromo: {
    display: "flex",
    height: 768 / 2,
  },
  logo: {
    width: 256 - 14,
  },
  catchPhrase: {
    textAlign: "center",
    fontSize: "2.0rem",
    color: "rgb(253, 229, 0)",
  },
})

export default function Menu() {
  const [menuitems, setMenuitems] = React.useState(null)
  React.useEffect(() => {
    if (menuitems === null) {
      fetch("../../assets/data/left-menu-items.json", { cache: "no-store" })
        .then((res) => res.json())
        .then(setMenuitems)
    }
  }, [menuitems])
  return menuitems === null ? null : (
    <div className={css(styles.menu)}>
      <section className={css(styles.leftHalf)}>
        <div className={css(styles.column)}>
          <Section
            name={menuitems.extras.name}
            description={menuitems.extras.description}
            items={menuitems.extras.items}
          />
          <Section
            name={menuitems.quesadillasSupreme.name}
            description={menuitems.quesadillasSupreme.description}
            items={menuitems.quesadillasSupreme.items}
          />
          <Promo1 />
          <Section
            name={menuitems.desserts.name}
            description={menuitems.desserts.description}
            items={menuitems.desserts.items}
          />
        </div>
        <div className={css(styles.column)}>
          <Section
            name={menuitems.tacos.name}
            description={menuitems.tacos.description}
            items={menuitems.tacos.items}
          />

          <Section
            name={menuitems.sides.name}
            description={menuitems.sides.description}
            items={menuitems.sides.items}
          />
        </div>
      </section>
      <section className={css(styles.rightHalf)}>
        <MainPromo />
        <div className={css(styles.underPromo)}>
          <div className={css(styles.column)}>
            <Section
              name={menuitems.juicesAndAguas.name}
              description={menuitems.juicesAndAguas.description}
              items={menuitems.juicesAndAguas.items}
            />
            <Section
              name={menuitems.softDrinks.name}
              description={menuitems.softDrinks.description}
              items={menuitems.softDrinks.items}
            />
          </div>
          <div
            className={css(styles.column)}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Section
              name={menuitems.salads.name}
              description={menuitems.salads.description}
              items={menuitems.salads.items}
            />
            <img
              className={css(styles.logo)}
              src={"../../assets/images/filibertos-text.png"}
              style={{
                marginTop: 40,
              }}
            />
            <div className={css(styles.catchPhrase)}>
              We don't just serve fast food, we serve fresh food fast.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ReactDOM.render(<Menu />, document.getElementById("app"))
