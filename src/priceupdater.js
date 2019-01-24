import { combos } from "./combo/combos"
import { menuitems as leftItems } from "./leftmenu/menuitems"
import { menuitems as rightItems } from "./rightmenu/menuitems"
import fs from "fs"

const _combos = combos.map(combo => {
  const price = Number(combo.price.replace("$", "")) * 1.035
  return {
    ...combo,
    price: "$" + price.toFixed(2),
  }
})

const left_menuitems = Object.entries(leftItems).reduce(
  (acc, [name, values]) => {
    const items = values.items.map(i => {
      const price = Number(i.price.replace("$", "")) * 1.035

      return { ...i, price: "$" + price.toFixed(2) }
    })

    acc[name] = { ...values, items }
    return acc
  },
  {}
)

const right_menuitems = Object.entries(rightItems).reduce(
  (acc, [name, values]) => {
    const items = values.items.map(i => {
      const price = Number(i.price.replace("$", "")) * 1.035

      return { ...i, price: "$" + price.toFixed(2) }
    })

    acc[name] = { ...values, items }
    return acc
  },
  {}
)
const combosString = "export const combos = " + JSON.stringify(_combos, null, 2)

const lString =
  "export const menuitems = " + JSON.stringify(left_menuitems, null, 2)
const rString =
  "export const menuitems = " + JSON.stringify(right_menuitems, null, 2)

fs.writeFileSync("combos.js", combosString)

fs.writeFileSync("rmenuitems.js", rString)
fs.writeFileSync("lmenuitems.js", lString)
