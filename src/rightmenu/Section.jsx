import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import MenuItem from './MenuItem'

//--------------------------------STYLES--------------------------------------//
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const columnWidth = (windowWidth - 4) / 4

const styles = StyleSheet.create({
  section: {
    ':not(:first-child)': {
      marginTop: 10,
    },
  },
  sectionHead: {
    textTransform: 'uppercase',
    color: 'rgb(240, 103, 16)',
    textAlign: 'center',
    fontSize: 39,
    marginBottom: 0,
    marginTop: 0,
  },
  sectionDescription: {
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'center',
    fontSize: '1em',
  },
})

//----------------------------------------------------------------------------//

const Section = ({name, description, items}) =>
<section className={css(styles.section)}>
  <h1 className={css(styles.sectionHead)}>
    {name}
  </h1>
  <h6 className={css(styles.sectionDescription)}>
    {description}
  </h6>
  {items.map((item, i) =>
    <MenuItem key={i} name={item.name} price={item.price} description={item.description} />
  )}
</section>

export default Section
