import React from "react"
import ReactDOM from "react-dom"
import { StyleSheet, css } from "aphrodite"

import { menuitems } from "./menuitems"
import Section from "./Section"
import DrinkIcons from "./DrinkIcons"
import MainPromo from "./MainPromo"
import Promo1 from "./Promo1"

const styles = StyleSheet.create({
  menu: {
    display: "flex",
  },
  leftHalf: {
    width: 960,
    height: 1080,
    display: "flex",
    ":first-child": {
      marginLeft: 0,
    },
    ":last-child": {
      marginRight: 0,
    },
  },
  rightHalf: {
    width: 960,
    height: 1080,
    display: "flex",
    flexDirection: "column",
  },
  column: {
    width: 480,
    flex: 1,
    marginLeft: 7,
    marginRight: 7,
  },
  underPromo: {
    display: "flex",
    flex: 1,
  },
  logo: {
    width: 480 - 14,
  },
  catchPhrase: {
    textAlign: "center",
    fontSize: "3.5em",
    color: "rgb(253, 229, 0)",
  },
})

export default class Menu extends React.Component {
  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener("resize", this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize)
  }

  render() {
    return (
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
}

ReactDOM.render(<Menu />, document.getElementById("app"))
