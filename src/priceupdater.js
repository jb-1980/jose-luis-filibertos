import combos from "../assets/data/combo-items-2022.json" assert { type: "json" }
import leftItems from "../assets/data/left-menu-items-2022.json" assert { type: "json" }
import rightItems from "../assets/data/right-menu-items-2022.json" assert { type: "json" }
import fs from "fs"

const PRICE_INCREASE = 1.1

const _combos = combos.map((combo) => {
  const price = Number(combo.price.replace("$", "")) * PRICE_INCREASE
  return {
    ...combo,
    price: "$" + price.toFixed(2),
  }
})

const left_menuitems = Object.entries(leftItems).reduce(
  (acc, [name, values]) => {
    const items = values.items.map((i) => {
      const price = Number(i.price.replace("$", "")) * PRICE_INCREASE

      return { ...i, price: "$" + price.toFixed(2) }
    })

    acc[name] = { ...values, items }
    return acc
  },
  {}
)

const right_menuitems = Object.entries(rightItems).reduce(
  (acc, [name, values]) => {
    const items = values.items.map((i) => {
      const price = Number(i.price.replace("$", "")) * PRICE_INCREASE

      return { ...i, price: "$" + price.toFixed(2) }
    })

    acc[name] = { ...values, items }
    return acc
  },
  {}
)

const combosString = JSON.stringify(_combos, null, 2)
const lString = JSON.stringify(left_menuitems, null, 2)
const rString = JSON.stringify(right_menuitems, null, 2)

fs.writeFileSync("./assets/data/combo-items.json", combosString)
fs.writeFileSync("./assets/data/right-menu-items.json", rString)
fs.writeFileSync("./assets/data/left-menu-items.json", lString)
