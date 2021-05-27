import React from "react"
import { StyleSheet, css } from "aphrodite"

//--------------------------------STYLES--------------------------------------//
const styles = StyleSheet.create({
  menuItem: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 5,
  },
  nameAndPrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "1.8em",
  },
  itemName: {
    flex: 1,
  },
  itemPrice: {
    flex: 0,
    textAlign: "right",
  },
  itemDescription: {
    flexBasis: "100%",
    fontSize: "1.1em",
  },
})

const MenuItem = ({ name, price, description }) => (
  <div className={css(styles.menuItem)}>
    <div className={css(styles.nameAndPrice)}>
      <div className={css(styles.itemName)}>{name}</div>
      <div className={css(styles.itemPrice)}>{price}</div>
    </div>
    <div className={css(styles.itemDescription)}>{description}</div>
  </div>
)

export default MenuItem
