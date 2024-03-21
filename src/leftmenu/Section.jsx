import React from "react"
import { StyleSheet, css } from "aphrodite"

import MenuItem from "./MenuItem"

//--------------------------------STYLES--------------------------------------//
const styles = StyleSheet.create({
  section: {
    ":not(:first-child)": {
      marginTop: 15,
    },
  },
  sectionHead: {
    textTransform: "uppercase",
    color: "rgb(240, 103, 16)",
    textAlign: "center",
    fontSize: "1.1rem",
    marginBottom: 3,
    marginTop: 0,
  },
  sectionDescription: {
    marginTop: 0,
    marginBottom: 5,
    textAlign: "center",
    fontSize: "1rem",
  },
})

//----------------------------------------------------------------------------//

const Section = ({ name, description, items }) => (
  <section className={css(styles.section)}>
    <h1 className={css(styles.sectionHead)}>{name}</h1>
    <h6 className={css(styles.sectionDescription)}>{description}</h6>
    {items.map((item, i) => (
      <MenuItem
        key={i}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    ))}
  </section>
)

export default Section
