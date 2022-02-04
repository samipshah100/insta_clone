import styles from './CssGrid.module.css'

import React from 'react'

export default function grid() {
  return (
    <div className={styles.container}>
      <div className={`${styles.item1} ${styles.gridItem}`}> Item 1</div>
      <div className={`${styles.item2} ${styles.gridItem}`}> Item 2</div>
      <div className={`${styles.item3} ${styles.gridItem}`}> Item 3</div>
      <div className={`${styles.item4} ${styles.gridItem}`}> Item 1</div>
      <div className={`${styles.item5} ${styles.gridItem}`}> Item 1</div>
      <div className={`${styles.item6} ${styles.gridItem}`}> Item 1</div>
      <div className={`${styles.item7} ${styles.gridItem}`}> Item 1</div>
      <div className={`${styles.item8} ${styles.gridItem}`}> Item 1</div>
      <div className={`${styles.item9} ${styles.gridItem}`}> Item 1</div>
    </div>
  )
}
